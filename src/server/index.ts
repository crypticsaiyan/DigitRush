import express from 'express';
import {
  InitResponse,
  IncrementResponse,
  DecrementResponse,
  GameInitResponse,
  GameStartResponse,
  GameAnswerResponse,
  GameEndResponse,
  MathProblem,
  LeaderboardResponse,
  LeaderboardEntry,
  ShareInfoResponse,
} from '../shared/types/api';
import { GAME_DURATION_MS } from '../shared/constants';
import { redis, reddit, createServer, context, getServerPort } from '@devvit/web/server';
import { createPost } from './core/post';

const app = express();

// Middleware for JSON body parsing
app.use(express.json());
// Middleware for URL-encoded body parsing
app.use(express.urlencoded({ extended: true }));
// Middleware for plain text body parsing
app.use(express.text());

const router = express.Router();

// Helper functions for Redis game state
async function saveGameState(
  gameId: string,
  state: {
    startTime: number;
    score: number;
    currentProblem: MathProblem;
  }
) {
  await redis.set(`game:${gameId}`, JSON.stringify(state), {
    expiration: new Date(Date.now() + 120000),
  }); // 2 minutes expiry
}

async function getGameState(gameId: string) {
  const data = await redis.get(`game:${gameId}`);
  if (!data) return null;
  return JSON.parse(data) as {
    startTime: number;
    score: number;
    currentProblem: MathProblem;
  };
}

async function deleteGameState(gameId: string) {
  await redis.del(`game:${gameId}`);
}

// Helper function to generate math problems
function generateMathProblem(): MathProblem {
  // Use crypto.randomBytes for better randomness if available, fallback to Math.random
  const getRandomInt = (min: number, max: number) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  const operations = ['addition', 'subtraction', 'multiplication', 'division'] as const;
  const operation = operations[getRandomInt(0, operations.length - 1)];

  let num1: number, num2: number, answer: number, question: string;
  let finalOperation: 'addition' | 'subtraction' | 'multiplication' | 'division' = 'addition';

  switch (operation) {
    case 'addition':
      num1 = getRandomInt(10, 99); // 10-99
      num2 = getRandomInt(10, 99); // 10-99
      answer = num1 + num2;
      question = `${num1} + ${num2}`;
      finalOperation = 'addition';
      break;
    case 'subtraction':
      num1 = getRandomInt(20, 99); // 20-99 to ensure positive result
      num2 = getRandomInt(10, num1 - 1); // 10 to num1-1 (ensure positive result)
      answer = num1 - num2;
      question = `${num1} - ${num2}`;
      finalOperation = 'subtraction';
      break;
    case 'multiplication':
      num1 = getRandomInt(2, 20); // 2-20 (exclude 1)
      num2 = getRandomInt(2, 10); // 2-10 (exclude 1)
      answer = num1 * num2;
      question = `${num1} × ${num2}`;
      finalOperation = 'multiplication';
      break;
    case 'division':
      // Create divisors from 2-10 and also include 11 (exclude 1)
      const divisors = [...Array.from({ length: 9 }, (_, i) => i + 2), 11]; // [2,3,4,5,6,7,8,9,10,11]
      num2 = divisors[getRandomInt(0, divisors.length - 1)]!;

      // For divisor 11, use range 100-1000; for others use 1-100
      if (num2 === 11) {
        answer = getRandomInt(Math.ceil(100 / 11), Math.floor(1000 / 11)); // Results from ~9 to ~90
        num1 = num2 * answer; // Ensure clean division
      } else {
        answer = getRandomInt(1, Math.floor(100 / num2)); // Ensure result is 1-100 divided by divisor
        num1 = num2 * answer; // Ensure clean division
      }

      // Ensure we're not dividing a number by itself (answer would be 1)
      // If answer is 1, regenerate with a higher answer
      if (answer === 1) {
        answer = getRandomInt(2, Math.floor(100 / num2));
        num1 = num2 * answer;
      }

      question = `${num1} ÷ ${num2}`;
      finalOperation = 'division';
      break;
    default:
      // Fallback case
      num1 = getRandomInt(10, 99);
      num2 = getRandomInt(10, 99);
      answer = num1 + num2;
      question = `${num1} + ${num2}`;
      finalOperation = 'addition';
      break;
  }

  // Generate a unique ID using timestamp and random number
  const timestamp = Date.now().toString(36);
  const randomPart = Math.random().toString(36).substring(2, 7);

  return {
    id: `${timestamp}_${randomPart}`,
    question,
    answer,
    operation: finalOperation,
  };
}

router.get<{ postId: string }, InitResponse | { status: string; message: string }>(
  '/api/init',
  async (_req, res): Promise<void> => {
    const { postId } = context;

    if (!postId) {
      res.status(400).json({
        status: 'error',
        message: 'postId is required but missing from context',
      });
      return;
    }

    try {
      const [count, username] = await Promise.all([
        redis.get('count'),
        reddit.getCurrentUsername(),
      ]);

      res.json({
        type: 'init',
        postId: postId,
        count: count ? parseInt(count) : 0,
        username: username ?? 'anonymous',
      });
    } catch (error) {
      let errorMessage = 'Unknown error during initialization';
      if (error instanceof Error) {
        errorMessage = `Initialization failed: ${error.message}`;
      }
      res.status(400).json({ status: 'error', message: errorMessage });
    }
  }
);

router.post<{ postId: string }, IncrementResponse | { status: string; message: string }, unknown>(
  '/api/increment',
  async (_req, res): Promise<void> => {
    const { postId } = context;
    if (!postId) {
      res.status(400).json({
        status: 'error',
        message: 'postId is required',
      });
      return;
    }

    res.json({
      count: await redis.incrBy('count', 1),
      postId,
      type: 'increment',
    });
  }
);

router.post<{ postId: string }, DecrementResponse | { status: string; message: string }, unknown>(
  '/api/decrement',
  async (_req, res): Promise<void> => {
    const { postId } = context;
    if (!postId) {
      res.status(400).json({
        status: 'error',
        message: 'postId is required',
      });
      return;
    }

    res.json({
      count: await redis.incrBy('count', -1),
      postId,
      type: 'decrement',
    });
  }
);

// Math Game API endpoints
router.get<{ postId: string }, GameInitResponse | { status: string; message: string }>(
  '/api/game/init',
  async (_req, res): Promise<void> => {
    const { postId } = context;

    if (!postId) {
      res.status(400).json({
        status: 'error',
        message: 'postId is required but missing from context',
      });
      return;
    }

    try {
      const username = await reddit.getCurrentUsername();
      const userKey = username ? `highscore:${postId}:${username}` : null;
      const highScoreStr = userKey ? await redis.get(userKey) : null;

      res.json({
        type: 'game-init',
        postId: postId,
        username: username ?? 'anonymous',
        highScore: highScoreStr ? parseInt(highScoreStr) : 0,
      });
    } catch (error) {
      res.status(400).json({ status: 'error', message: 'Game initialization failed' });
    }
  }
);

router.post<{ postId: string }, GameStartResponse | { status: string; message: string }, unknown>(
  '/api/game/start',
  async (_req, res): Promise<void> => {
    const { postId } = context;
    if (!postId) {
      res.status(400).json({
        status: 'error',
        message: 'postId is required',
      });
      return;
    }

    try {
      const gameId = `${postId}_${Date.now()}`;
      const firstProblem = generateMathProblem();

      // Store game state in Redis
      await saveGameState(gameId, {
        startTime: Date.now(),
        score: 0,
        currentProblem: firstProblem,
      });

      res.json({
        type: 'game-start',
        problem: firstProblem,
        gameId,
      });
    } catch (error) {
      res.status(400).json({ status: 'error', message: 'Failed to start game' });
    }
  }
);

router.post<
  { postId: string },
  GameAnswerResponse | { status: string; message: string },
  { gameId: string; answer: number; problemId: string }
>('/api/game/answer', async (req, res): Promise<void> => {
  const { postId } = context;
  const { gameId, answer, problemId } = req.body;

  if (!postId || !gameId || answer === undefined || !problemId) {
    res.status(400).json({
      status: 'error',
      message: 'Missing required fields',
    });
    return;
  }

  try {
    const gameState = await getGameState(gameId);

    if (!gameState) {
      res.status(400).json({
        status: 'error',
        message: 'Game not found',
      });
      return;
    }

    const currentProblem = gameState.currentProblem;
    if (!currentProblem) {
      res.status(400).json({
        status: 'error',
        message: 'Problem not found',
      });
      return;
    }

    const timeElapsed = Date.now() - gameState.startTime;
    const timeRemaining = Math.max(0, GAME_DURATION_MS - timeElapsed); // game duration

    // Allow one final answer submission even if time has expired
    // The game will be ended by the client via the /end endpoint
    const correct = currentProblem.answer === answer;

    if (correct) {
      gameState.score++;
    }

    let nextProblem: MathProblem | null = null;
    if (timeRemaining > 0) {
      nextProblem = generateMathProblem();

      // Update game state with new problem
      await saveGameState(gameId, {
        startTime: gameState.startTime,
        score: gameState.score,
        currentProblem: nextProblem,
      });
    } else {
      // Time is up, but save the final score
      await saveGameState(gameId, {
        startTime: gameState.startTime,
        score: gameState.score,
        currentProblem: currentProblem, // Keep current problem for consistency
      });
    }

    res.json({
      type: 'game-answer',
      correct,
      nextProblem,
      score: gameState.score,
      timeRemaining,
    });
  } catch (error) {
    res.status(500).json({ status: 'error', message: 'Failed to process answer' });
  }
});

router.post<
  { postId: string },
  GameEndResponse | { status: string; message: string },
  { gameId: string }
>('/api/game/end', async (req, res): Promise<void> => {
  const { postId } = context;
  const { gameId } = req.body;

  if (!postId || !gameId) {
    res.status(400).json({
      status: 'error',
      message: 'Missing required fields',
    });
    return;
  }

  try {
    const gameState = await getGameState(gameId);

    // If game state doesn't exist, it might have already been cleaned up
    // Return a graceful response with score 0
    if (!gameState) {
      const username = await reddit.getCurrentUsername();
      const highScoreKey = username ? `highscore:${postId}:${username}` : null;
      const currentHighScoreStr = highScoreKey ? await redis.get(highScoreKey) : null;
      const highScore = currentHighScoreStr ? parseInt(currentHighScoreStr) : 0;

      res.json({
        type: 'game-end',
        finalScore: 0,
        highScore: highScore,
        isNewHighScore: false,
      });
      return;
    }

    const finalScore = gameState.score;
    await deleteGameState(gameId);

    // Get and update per-user high score
    const username = await reddit.getCurrentUsername();
    const highScoreKey = username ? `highscore:${postId}:${username}` : null;
    const currentHighScoreStr = highScoreKey ? await redis.get(highScoreKey) : null;
    const currentHighScore = currentHighScoreStr ? parseInt(currentHighScoreStr) : 0;

    let isNewHighScore = false;
    let highScore = currentHighScore;

    if (finalScore > currentHighScore) {
      isNewHighScore = true;
      highScore = finalScore;
      if (highScoreKey) {
        await redis.set(highScoreKey, finalScore.toString());
      }
    }

    // Save to leaderboard using sorted set, but only if this is the user's best score
    // (username already fetched above)
    if (username && finalScore > 0) {
      const leaderboardSetKey = `leaderboard_set:${postId}`;

      try {
        // Check existing score for this user
        const existingScore = await redis.zScore(leaderboardSetKey, username);

        // If no existing score or this score is higher, update the sorted set
        if (existingScore == null || finalScore > existingScore) {
          await redis.zAdd(leaderboardSetKey, { member: username, score: finalScore });
        } else {
        }
      } catch (err) {}
    }

    res.json({
      type: 'game-end',
      finalScore,
      highScore,
      isNewHighScore,
    });
  } catch (error) {
    res.status(400).json({ status: 'error', message: 'Failed to end game' });
  }
});

// Share info endpoint
router.get<{ postId: string }, ShareInfoResponse | { status: string; message: string }>(
  '/api/share-info',
  async (_req, res): Promise<void> => {
    const { postId, subredditName } = context;

    if (!postId || !subredditName) {
      res.status(400).json({
        status: 'error',
        message: 'postId and subredditName are required',
      });
      return;
    }

    try {
      const postUrl = `https://reddit.com/r/${subredditName}/comments/${postId}`;

      res.json({
        type: 'share-info',
        postUrl,
        subredditName,
      });
    } catch (error) {
      res.status(400).json({ status: 'error', message: 'Failed to get share info' });
    }
  }
);

// Leaderboard endpoint
router.get<{ postId: string }, LeaderboardResponse | { status: string; message: string }>(
  '/api/leaderboard',
  async (req, res): Promise<void> => {
    const { postId } = context;

    if (!postId) {
      res.status(400).json({
        status: 'error',
        message: 'postId is required',
      });
      return;
    }

    try {
      const currentUsername = await reddit.getCurrentUsername();

      // Parse pagination params (offset, limit)
      const offset = Number.parseInt((req.query.offset as string) || '0', 10) || 0;
      const limit = Math.min(Number.parseInt((req.query.limit as string) || '10', 10) || 10, 100);

      // Get leaderboard entries for this post (paged)
      const entries: LeaderboardEntry[] = [];

      // Use sorted set to store leaderboard
      const leaderboardSetKey = `leaderboard_set:${postId}`;

      // Get paged members from sorted set (sorted by score, highest first)
      const members = await redis.zRange(leaderboardSetKey, offset, offset + limit - 1, {
        by: 'rank',
        reverse: true,
      });

      // Helper: default redditstatic avatar from username (stable)
      const defaultAvatarFromUsername = (name: string) => {
        let hash = 0;
        for (let i = 0; i < name.length; i++) {
          hash = (hash * 31 + name.charCodeAt(i)) >>> 0;
        }
        const idx = (hash % 8) + 1; // 1..8
        return `https://www.redditstatic.com/avatars/defaults/v2/avatar_default_${idx}.png`;
      };

      // Parse the members - member is username, score is the sort value
      for (const member of members) {
        const username = member.member;
        const score = member.score;

        // Try to get user avatar
        let avatarUrl: string | undefined;
        try {
          // Prefer snoovatar via dedicated API when available
          // Call via the reddit object to preserve 'this' binding used internally
          if (typeof (reddit as any).getSnoovatarUrl === 'function') {
            const url = await (reddit as any).getSnoovatarUrl(username);
            if (typeof url === 'string' && url.length > 0) {
              avatarUrl = url;
            }
          }

          if (!avatarUrl) {
            const user = await reddit.getUserByUsername(username);
            // Reddit user object might have different property names for avatar
            avatarUrl =
              (user as any)?.snoovatar_img ||
              (user as any)?.iconImg ||
              (user as any)?.icon_img ||
              undefined;
          }
        } catch (err) {}

        // Final fallback to redditstatic default if still missing
        if (!avatarUrl) {
          avatarUrl = defaultAvatarFromUsername(username);
        }

        entries.push({
          username,
          score,
          rank: 0, // Will be set after sorting
          avatarUrl,
        });
      }

      // Convert members from redis shape ({ member, score }) to LeaderboardEntry and set ranks
      const pagedEntries: LeaderboardEntry[] = [];
      for (let i = 0; i < members.length; i++) {
        const m = members[i];
        if (!m) continue;
        const username = m.member;
        const score = m.score;

        // Try to get user avatar (best-effort)
        let avatarUrl: string | undefined;
        try {
          if (typeof (reddit as any).getSnoovatarUrl === 'function') {
            const url = await (reddit as any).getSnoovatarUrl(username);
            if (typeof url === 'string' && url.length > 0) {
              avatarUrl = url;
            }
          }
          if (!avatarUrl) {
            const user = await reddit.getUserByUsername(username);
            avatarUrl =
              (user as any)?.snoovatar_img ||
              (user as any)?.iconImg ||
              (user as any)?.icon_img ||
              undefined;
          }
        } catch (err) {
          // ignore avatar fetch failures
        }

        if (!avatarUrl) {
          avatarUrl = defaultAvatarFromUsername(username);
        }

        pagedEntries.push({
          username,
          score,
          rank: offset + i + 1,
          avatarUrl,
        });
      }

      // Find current user's rank and score by fetching the full sorted set (fallback)
      // NOTE: if the leaderboard grows huge, replace this with a proper zRank/zRevRank
      let userRank: number | null = null;
      let userScore: number | null = null;
      let userUsername: string | null = null;
      let userAvatarUrl: string | null | undefined = null;

      if (currentUsername) {
        userUsername = currentUsername;
        try {
          const allMembers = await redis.zRange(leaderboardSetKey, 0, -1, {
            by: 'rank',
            reverse: true,
          });
          const idx = allMembers.findIndex((m) => m.member === currentUsername);
          if (idx >= 0) {
            const found = allMembers[idx];
            if (found) {
              userRank = idx + 1;
              userScore = found.score;
              // avatar not provided by redis; will attempt reddit lookup below if needed
            }
          }

          if (!userAvatarUrl) {
            if (typeof (reddit as any).getSnoovatarUrl === 'function') {
              const url = await (reddit as any).getSnoovatarUrl(currentUsername);
              if (typeof url === 'string' && url.length > 0) {
                userAvatarUrl = url;
              }
            }
            if (!userAvatarUrl) {
              const user = await reddit.getUserByUsername(currentUsername);
              userAvatarUrl =
                (user as any)?.snoovatar_img ||
                (user as any)?.iconImg ||
                (user as any)?.icon_img ||
                undefined;
            }
          }
        } catch (err) {
          // ignore failures
        }

        if (!userAvatarUrl) {
          userAvatarUrl = defaultAvatarFromUsername(currentUsername);
        }
      }

      res.json({
        type: 'leaderboard',
        entries: pagedEntries,
        userRank,
        userScore,
        userUsername,
        userAvatarUrl: userAvatarUrl ?? null,
      });
    } catch (error) {
      res.status(400).json({ status: 'error', message: 'Failed to fetch leaderboard' });
    }
  }
);

router.post('/internal/on-app-install', async (_req, res): Promise<void> => {
  try {
    const post = await createPost();

    res.json({
      status: 'success',
      message: `Post created in subreddit ${context.subredditName} with id ${post.id}`,
    });
  } catch (error) {
    res.status(400).json({
      status: 'error',
      message: 'Failed to create post',
    });
  }
});

router.post('/internal/menu/post-create', async (_req, res): Promise<void> => {
  try {
    const post = await createPost();

    res.json({
      navigateTo: `https://reddit.com/r/${context.subredditName}/comments/${post.id}`,
    });
  } catch (error) {
    res.status(400).json({
      status: 'error',
      message: 'Failed to create post',
    });
  }
});

// Use router middleware
app.use(router);

// Get port from environment variable with fallback
const port = getServerPort();

const server = createServer(app);
server.on('error', (_err) => {});
server.listen(port);
