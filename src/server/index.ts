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
      num1 = getRandomInt(10, 99); // 10-99
      num2 = getRandomInt(2, 9); // 2-9 (avoid 1 to make it more challenging)
      answer = num1 * num2;
      question = `${num1} × ${num2}`;
      finalOperation = 'multiplication';
      break;
    case 'division':
      num2 = getRandomInt(2, 12); // 2-12
      answer = getRandomInt(2, 25); // 2-25
      num1 = num2 * answer; // Ensure clean division
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
      console.error('API Init Error: postId not found in devvit context');
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
      console.error(`API Init Error for post ${postId}:`, error);
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
      const [username, highScoreStr] = await Promise.all([
        reddit.getCurrentUsername(),
        redis.get(`highscore:${postId}`),
      ]);

      res.json({
        type: 'game-init',
        postId: postId,
        username: username ?? 'anonymous',
        highScore: highScoreStr ? parseInt(highScoreStr) : 0,
      });
    } catch (error) {
      console.error(`Game Init Error for post ${postId}:`, error);
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
      console.log('Generated first problem:', firstProblem);

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
      console.error(`Game Start Error:`, error);
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

  console.log('Answer request received:', { postId, gameId, answer, problemId, body: req.body });

  if (!postId || !gameId || answer === undefined || !problemId) {
    console.error('Missing required fields:', { postId, gameId, answer, problemId });
    res.status(400).json({
      status: 'error',
      message: 'Missing required fields',
    });
    return;
  }

  try {
    const gameState = await getGameState(gameId);
    console.log('Game state found:', gameState ? 'yes' : 'no');

    if (!gameState) {
      console.error('Game not found:', gameId);
      res.status(400).json({
        status: 'error',
        message: 'Game not found',
      });
      return;
    }

    const currentProblem = gameState.currentProblem;
    console.log('Current problem:', currentProblem);

    if (!currentProblem) {
      console.error('Problem not found');
      res.status(400).json({
        status: 'error',
        message: 'Problem not found',
      });
      return;
    }

  const timeElapsed = Date.now() - gameState.startTime;
  const timeRemaining = Math.max(0, GAME_DURATION_MS - timeElapsed); // game duration
    console.log('Time remaining:', timeRemaining);

    if (timeRemaining <= 0) {
      console.log('Game time expired');
      await deleteGameState(gameId);
      res.status(400).json({
        status: 'error',
        message: 'Game time expired',
      });
      return;
    }

    const correct = currentProblem.answer === answer;
    console.log('Answer check:', {
      userAnswer: answer,
      correctAnswer: currentProblem.answer,
      correct,
    });

    if (correct) {
      gameState.score++;
    }

    let nextProblem: MathProblem | null = null;
    if (timeRemaining > 0) {
      nextProblem = generateMathProblem();
      console.log('Generated new problem:', nextProblem);

      // Update game state with new problem
      await saveGameState(gameId, {
        startTime: gameState.startTime,
        score: gameState.score,
        currentProblem: nextProblem,
      });
    }

    console.log('Sending response:', {
      correct,
      nextProblem,
      score: gameState.score,
      timeRemaining,
    });

    res.json({
      type: 'game-answer',
      correct,
      nextProblem,
      score: gameState.score,
      timeRemaining,
    });
  } catch (error) {
    console.error(`Game Answer Error:`, error);
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

  console.log('Game end request received:', { postId, gameId });

  if (!postId || !gameId) {
    console.error('Missing required fields for game end');
    res.status(400).json({
      status: 'error',
      message: 'Missing required fields',
    });
    return;
  }

  try {
    const gameState = await getGameState(gameId);
    console.log('Game state for ending:', gameState);
    if (!gameState) {
      res.status(400).json({
        status: 'error',
        message: 'Game not found',
      });
      return;
    }

    const finalScore = gameState.score;
    await deleteGameState(gameId);

    // Get and update high score
    const highScoreKey = `highscore:${postId}`;
    const currentHighScoreStr = await redis.get(highScoreKey);
    const currentHighScore = currentHighScoreStr ? parseInt(currentHighScoreStr) : 0;

    let isNewHighScore = false;
    let highScore = currentHighScore;

    if (finalScore > currentHighScore) {
      isNewHighScore = true;
      highScore = finalScore;
      await redis.set(highScoreKey, finalScore.toString());
    }

    // Save to leaderboard using sorted set, but only if this is the user's best score
    const username = await reddit.getCurrentUsername();
    if (username && finalScore > 0) {
      const leaderboardSetKey = `leaderboard_set:${postId}`;
      console.log('Considering saving to leaderboard:', { username, finalScore, key: leaderboardSetKey });

      try {
        // Check existing score for this user
        const existingScore = await redis.zScore(leaderboardSetKey, username);

  // If no existing score or this score is higher, update the sorted set
  if (existingScore == null || finalScore > existingScore) {
          await redis.zAdd(leaderboardSetKey, { member: username, score: finalScore });
          console.log('Score saved to leaderboard (new high or first entry)');
        } else {
          console.log('Not saving to leaderboard; existing score is higher or equal', { existingScore });
        }
      } catch (err) {
        console.error('Failed to update leaderboard:', err);
      }
    }

    res.json({
      type: 'game-end',
      finalScore,
      highScore,
      isNewHighScore,
    });
  } catch (error) {
    console.error(`Game End Error:`, error);
    res.status(400).json({ status: 'error', message: 'Failed to end game' });
  }
});

// Leaderboard endpoint
router.get<{ postId: string }, LeaderboardResponse | { status: string; message: string }>(
  '/api/leaderboard',
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
      const currentUsername = await reddit.getCurrentUsername();
      console.log('Fetching leaderboard for postId:', postId);

      // Get all leaderboard entries for this post
      const entries: LeaderboardEntry[] = [];

      // Use sorted set to store leaderboard
      const leaderboardSetKey = `leaderboard_set:${postId}`;
      console.log('Leaderboard key:', leaderboardSetKey);

      // Get all members from sorted set (sorted by score, highest first)
      const members = await redis.zRange(leaderboardSetKey, 0, -1, { by: 'rank', reverse: true });
      console.log('Retrieved members:', members);

      // Parse the members - member is username, score is the sort value
      for (const member of members) {
        const username = member.member;
        const score = member.score;
        
        console.log('Parsed entry:', { username, score });
        entries.push({
          username,
          score,
          rank: 0, // Will be set after sorting
        });
      }

      console.log('Total entries:', entries.length);

      // Sort by score descending (in case Redis didn't sort properly)
      entries.sort((a, b) => b.score - a.score);

      // Assign ranks and limit to top 10
      const topEntries = entries.slice(0, 10).map((entry, index) => ({
        ...entry,
        rank: index + 1,
      }));

      // Find current user's rank and score
      let userRank: number | null = null;
      let userScore: number | null = null;

      if (currentUsername) {
        const userEntry = entries.find((e) => e.username === currentUsername);
        if (userEntry) {
          userRank = entries.indexOf(userEntry) + 1;
          userScore = userEntry.score;
        }
      }

      console.log('Sending leaderboard response:', { topEntries, userRank, userScore });

      res.json({
        type: 'leaderboard',
        entries: topEntries,
        userRank,
        userScore,
      });
    } catch (error) {
      console.error(`Leaderboard Error:`, error);
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
    console.error(`Error creating post: ${error}`);
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
    console.error(`Error creating post: ${error}`);
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
server.on('error', (err) => console.error(`server error; ${err.stack}`));
server.listen(port);
