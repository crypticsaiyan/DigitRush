import { useCallback, useEffect, useState, useRef } from 'react';
import type { 
  GameInitResponse, 
  GameStartResponse, 
  GameAnswerResponse, 
  GameEndResponse,
  MathProblem 
} from '../../shared/types/api';
import { GAME_DURATION_SECONDS } from '../../shared/constants';

type GameState = 'start' | 'menu' | 'playing' | 'finished';

interface MathGameState {
  gameState: GameState;
  username: string | null;
  highScore: number;
  currentScore: number;
  timeRemaining: number;
  currentProblem: MathProblem | null;
  gameId: string | null;
  loading: boolean;
  isNewHighScore: boolean;
}

export const useMathGame = () => {
  const [state, setState] = useState<MathGameState>({
    gameState: 'start',
    username: null,
    highScore: 0,
    currentScore: 0,
    timeRemaining: GAME_DURATION_SECONDS,
    currentProblem: null,
    gameId: null,
    loading: true,
    isNewHighScore: false,
  });

  const [postId, setPostId] = useState<string | null>(null);
  const [gameTimer, setGameTimer] = useState<NodeJS.Timeout | null>(null);
  const isSubmittingRef = useRef(false);

  // Initialize game
  useEffect(() => {
    const init = async () => {
      try {
        const res = await fetch('/api/game/init');
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        const data: GameInitResponse = await res.json();
        if (data.type !== 'game-init') throw new Error('Unexpected response');
        
        setState(prev => ({
          ...prev,
          username: data.username,
          highScore: data.highScore,
          loading: false,
        }));
        setPostId(data.postId);
      } catch (err) {
        console.error('Failed to init game', err);
        setState(prev => ({ ...prev, loading: false }));
      }
    };
    void init();
  }, []);

  // Start game
  const startGame = useCallback(async () => {
    if (!postId) {
      console.error('No postId – cannot start game');
      return;
    }

    try {
      setState(prev => ({ ...prev, loading: true }));
      
      const res = await fetch('/api/game/start', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({}),
      });
      
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      const data: GameStartResponse = await res.json();
      
      if (data.type !== 'game-start') throw new Error('Unexpected response');
      
      setState(prev => ({
        ...prev,
        gameState: 'playing',
        currentProblem: data.problem,
        gameId: data.gameId,
        currentScore: 0,
        timeRemaining: GAME_DURATION_SECONDS,
        loading: false,
        isNewHighScore: false,
      }));

      // Start countdown timer
      const timer = setInterval(() => {
        setState(prev => {
          const newTime = prev.timeRemaining - 1;
          if (newTime <= 0) {
            clearInterval(timer);
            // Don't call endGame here, just mark time as 0
            // endGame will be called when we detect gameState change
            return { ...prev, timeRemaining: 0 };
          }
          return { ...prev, timeRemaining: newTime };
        });
      }, 1000);
      
      setGameTimer(timer);
    } catch (err) {
      console.error('Failed to start game', err);
      setState(prev => ({ ...prev, loading: false }));
    }
  }, [postId]);

  // Submit answer
  const submitAnswer = useCallback(async (answer: number, isLastAnswer: boolean = false) => {
    if (!state.gameId || !state.currentProblem) {
      console.error('No active game or problem');
      return;
    }

    // Allow submission of last answer even if time is 0
    if (state.timeRemaining <= 0 && !isLastAnswer) {
      console.log('Time expired, skipping answer submission');
      return;
    }

    // Mark that we're submitting
    isSubmittingRef.current = true;

    try {
      console.log('Submitting answer:', {
        gameId: state.gameId,
        answer,
        problemId: state.currentProblem.id,
        isLastAnswer,
      });

      const res = await fetch('/api/game/answer', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          gameId: state.gameId,
          answer,
          problemId: state.currentProblem.id,
        }),
      });
      
      if (!res.ok) {
        const errorData = await res.json();
        console.error('Server error response:', errorData);
        
        // If game expired, trigger end game
        if (errorData.message === 'Game time expired') {
          if (gameTimer) {
            clearInterval(gameTimer);
            setGameTimer(null);
          }
          setState(prev => ({ ...prev, timeRemaining: 0 }));
          return;
        }
        
        throw new Error(`HTTP ${res.status}: ${errorData.message || 'Unknown error'}`);
      }
      
      const data: GameAnswerResponse = await res.json();
      
      if (data.type !== 'game-answer') throw new Error('Unexpected response');
      
      console.log('Received answer response:', data);
      console.log('Next problem:', data.nextProblem);
      
      setState(prev => ({
        ...prev,
        currentScore: data.score,
        currentProblem: data.nextProblem,
        timeRemaining: Math.ceil(data.timeRemaining / 1000),
      }));

      // If no next problem or time is up, end the game
      if (!data.nextProblem || data.timeRemaining <= 0) {
        if (gameTimer) {
          clearInterval(gameTimer);
          setGameTimer(null);
        }
        await endGame();
      }
    } catch (err) {
      console.error('Failed to submit answer', err);
    } finally {
      // Mark that we're done submitting
      isSubmittingRef.current = false;
    }
  }, [state.gameId, state.currentProblem, state.timeRemaining, gameTimer]);

  // End game
  const endGame = useCallback(async () => {
    if (!state.gameId) {
      console.error('No active game');
      return;
    }

    try {
      const res = await fetch('/api/game/end', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ gameId: state.gameId }),
      });
      
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      const data: GameEndResponse = await res.json();
      
      if (data.type !== 'game-end') throw new Error('Unexpected response');
      
      setState(prev => ({
        ...prev,
        gameState: 'finished',
        highScore: data.highScore,
        isNewHighScore: data.isNewHighScore,
        gameId: null,
        currentProblem: null,
      }));

      if (gameTimer) {
        clearInterval(gameTimer);
        setGameTimer(null);
      }
    } catch (err) {
      console.error('Failed to end game', err);
    }
  }, [state.gameId, gameTimer]);

  // Go to menu from start page
  const goToMenu = useCallback(() => {
    setState(prev => ({
      ...prev,
      gameState: 'menu',
    }));
  }, []);

  // Reset to menu
  const resetToMenu = useCallback(() => {
    if (gameTimer) {
      clearInterval(gameTimer);
      setGameTimer(null);
    }
    
    setState(prev => ({
      ...prev,
      gameState: 'menu',
      currentScore: 0,
      timeRemaining: GAME_DURATION_SECONDS,
      currentProblem: null,
      gameId: null,
      isNewHighScore: false,
    }));
  }, [gameTimer]);

  // End game when time runs out
  useEffect(() => {
    if (state.timeRemaining === 0 && state.gameState === 'playing' && state.gameId) {
      // If there's an active submission, wait for it to complete
      if (isSubmittingRef.current) {
        console.log('Waiting for submission to complete before ending game');
        // Check again after a short delay
        const checkTimer = setTimeout(() => {
          if (!isSubmittingRef.current && state.gameState === 'playing' && state.gameId) {
            console.log('Submission complete, ending game now');
            endGame();
          }
        }, 500);
        return () => clearTimeout(checkTimer);
      } else {
        console.log('Time ran out, ending game');
        endGame();
      }
    }
  }, [state.timeRemaining, state.gameState, state.gameId, endGame]);

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      if (gameTimer) {
        clearInterval(gameTimer);
      }
    };
  }, [gameTimer]);

  return {
    ...state,
    startGame,
    submitAnswer,
    submitFinalAnswer: (answer: number) => submitAnswer(answer, true),
    endGame,
    goToMenu,
    resetToMenu,
  } as const;
};
