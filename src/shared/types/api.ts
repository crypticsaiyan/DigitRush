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
