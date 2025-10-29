import { useState, useEffect, useCallback } from 'react';
import type {
  DailyChallengeInfo,
  DailyChallengeInitResponse,
  DailyChallengeStartResponse,
  DailyChallengeAnswerResponse,
  DailyChallengeEndResponse,
  MathProblem,
} from '../../shared/types/api';
import { ALLOW_DAILY_RETRIES_FOR_TESTING } from '../../shared/constants';

export type DailyChallengeState = 'menu' | 'playing';

export const useDailyChallenge = () => {
  const [state, setState] = useState<DailyChallengeState>('menu');
  const [loading, setLoading] = useState(false);
  const [challengeInfo, setChallengeInfo] = useState<DailyChallengeInfo | null>(null);
  const [challengeId, setChallengeId] = useState<string | null>(null);
  const [problems, setProblems] = useState<MathProblem[]>([]);
  const [currentProblemIndex, setCurrentProblemIndex] = useState(0);
  const [answers, setAnswers] = useState<{ answer: number; correct: boolean }[]>([]);
  const [startTime, setStartTime] = useState<number | null>(null);
  const [completionTime, setCompletionTime] = useState<number | null>(null);
  const [finalScore, setFinalScore] = useState(0);
  const [rank, setRank] = useState<number | null>(null);

  // Initialize daily challenge
  const initChallenge = useCallback(async () => {
    try {
      setLoading(true);
      const res = await fetch('/api/daily-challenge/init');
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      const data: DailyChallengeInitResponse = await res.json();
      setChallengeInfo(data.challenge);
    } catch (error) {
      console.error('Failed to initialize daily challenge:', error);
    } finally {
      setLoading(false);
    }
  }, []);

  // Start daily challenge
  const startChallenge = useCallback(async () => {
    if (!challengeInfo) return;
    // Allow replays when the testing flag is enabled in shared/constants
    if (challengeInfo.hasAttempted && !ALLOW_DAILY_RETRIES_FOR_TESTING) return;

    try {
      setLoading(true);
      let url = '/api/daily-challenge/start';
      if (ALLOW_DAILY_RETRIES_FOR_TESTING) {
        url += '?force=true';
      }
      const res = await fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
      });
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      const data: DailyChallengeStartResponse = await res.json();
      
      setChallengeId(data.challengeId);
      setProblems(data.problems);
      setCurrentProblemIndex(0);
      setAnswers([]);
      setStartTime(Date.now());
      setState('playing');
    } catch (error) {
      console.error('Failed to start daily challenge:', error);
    } finally {
      setLoading(false);
    }
  }, [challengeInfo]);

  // Submit answer
  const submitAnswer = useCallback(async (answer: number) => {
    if (!challengeId || currentProblemIndex >= problems.length) return;

    try {
      const res = await fetch('/api/daily-challenge/answer', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          challengeId,
          answer,
          problemIndex: currentProblemIndex,
        }),
      });
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      const data: DailyChallengeAnswerResponse = await res.json();
      
      // Add answer to history
      setAnswers(prev => [...prev, { answer, correct: data.correct }]);
      
      if (data.isComplete) {
        // Challenge completed, end it
        await endChallenge();
      } else {
        // Move to next problem
        setCurrentProblemIndex(prev => prev + 1);
      }
    } catch (error) {
      console.error('Failed to submit answer:', error);
    }
  }, [challengeId, currentProblemIndex, problems.length]);

  // End challenge
  const endChallenge = useCallback(async () => {
    if (!challengeId || !startTime) return;

    try {
      const res = await fetch('/api/daily-challenge/end', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ challengeId }),
      });
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      const data: DailyChallengeEndResponse = await res.json();
      
  setCompletionTime(data.completionTime);
  setFinalScore(data.score);
  setRank(data.rank);
  // Return to menu so the menu shows the "Challenge Completed" summary
  setState('menu');
      
  // Refresh challenge info to show it's been attempted
  await initChallenge();
    } catch (error) {
      console.error('Failed to end challenge:', error);
    }
  }, [challengeId, startTime, initChallenge]);

  // Reset to menu
  const resetToMenu = useCallback(() => {
    setState('menu');
    setChallengeId(null);
    setProblems([]);
    setCurrentProblemIndex(0);
    setAnswers([]);
    setStartTime(null);
    setCompletionTime(null);
    setFinalScore(0);
    setRank(null);
  }, []);

  // Initialize on mount
  useEffect(() => {
    initChallenge();
  }, [initChallenge]);

  const currentProblem = problems[currentProblemIndex] || null;
  const totalCorrect = answers.filter(a => a.correct).length;
  const isComplete = currentProblemIndex >= problems.length;

  return {
    state,
    loading,
    challengeInfo,
    currentProblem,
    currentProblemIndex,
    totalProblems: problems.length,
    answers,
    totalCorrect,
    isComplete,
    completionTime,
    finalScore,
    rank,
    startTime,
    startChallenge,
    submitAnswer,
    resetToMenu,
    initChallenge,
  };
};
