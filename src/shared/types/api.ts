export type InitResponse = {
  type: 'init';
  postId: string;
  count: number;
  username: string;
};

export type IncrementResponse = {
  type: 'increment';
  postId: string;
  count: number;
};

export type DecrementResponse = {
  type: 'decrement';
  postId: string;
  count: number;
};

// Math Quiz Game Types
export type MathProblem = {
  id: string;
  question: string;
  answer: number;
  operation: 'addition' | 'subtraction' | 'multiplication' | 'division';
};

export type GameInitResponse = {
  type: 'game-init';
  postId: string;
  username: string;
  highScore: number;
};

export type GameStartResponse = {
  type: 'game-start';
  problem: MathProblem;
  gameId: string;
};

export type GameAnswerResponse = {
  type: 'game-answer';
  correct: boolean;
  nextProblem: MathProblem | null;
  score: number;
  timeRemaining: number;
};

export type GameEndResponse = {
  type: 'game-end';
  finalScore: number;
  highScore: number;
  isNewHighScore: boolean;
};

export type LeaderboardEntry = {
  username: string;
  score: number;
  rank: number;
  avatarUrl?: string;
};

export type LeaderboardResponse = {
  type: 'leaderboard';
  entries: LeaderboardEntry[];
  userRank: number | null;
  userScore: number | null;
  userUsername: string | null;
  userAvatarUrl?: string | null;
};

export type ShareInfoResponse = {
  type: 'share-info';
  postUrl: string;
  subredditName: string;
};

export type GameStatsResponse = {
  type: 'game-stats';
  totalPlays: number;
};

// User-related responses
export type UserStreakResponse = {
  currentStreak: number;
  lastPlayDate: string | null; // ISO date string or null if none
};

// Daily Challenge Types
export type DailyChallengeInfo = {
  date: string; // YYYY-MM-DD format
  problems: MathProblem[];
  hasAttempted: boolean;
  userTime?: number; // completion time in milliseconds, if completed
  userScore?: number; // score achieved, if completed
};

export type DailyChallengeInitResponse = {
  type: 'daily-challenge-init';
  challenge: DailyChallengeInfo;
};

export type DailyChallengeStartResponse = {
  type: 'daily-challenge-start';
  challengeId: string;
  problems: MathProblem[];
};

export type DailyChallengeAnswerResponse = {
  type: 'daily-challenge-answer';
  correct: boolean;
  problemIndex: number;
  totalCorrect: number;
  isComplete: boolean;
};

export type DailyChallengeEndResponse = {
  type: 'daily-challenge-end';
  completionTime: number; // in milliseconds
  score: number; // number of correct answers
  rank: number | null; // user's rank on daily leaderboard
};

export type DailyChallengeLeaderboardEntry = {
  username: string;
  score: number;
  completionTime: number; // in milliseconds
  rank: number;
  avatarUrl?: string;
};

export type DailyChallengeLeaderboardResponse = {
  type: 'daily-challenge-leaderboard';
  date: string;
  entries: DailyChallengeLeaderboardEntry[];
  userRank: number | null;
  userScore: number | null;
  userTime: number | null;
  userUsername: string | null;
  userAvatarUrl?: string | null;
};
