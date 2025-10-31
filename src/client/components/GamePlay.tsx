import { useState, useEffect, useRef } from 'react';
import { useMathGame } from '../hooks/useMathGame';
import { GAME_DURATION_SECONDS, LOW_TIME_THRESHOLD } from '../../shared/constants';

interface GamePlayProps {
  game: ReturnType<typeof useMathGame>;
}

export const GamePlay = ({ game }: GamePlayProps) => {
  const [userAnswer, setUserAnswer] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [lastProblemId, setLastProblemId] = useState<string | null>(null);
  const [hasSubmittedFinalAnswer, setHasSubmittedFinalAnswer] = useState(false);
  const [autoSubmit, setAutoSubmit] = useState(true);
  const [feedback, setFeedback] = useState<{
    type: 'correct' | 'incorrect' | null;
    message: string;
  }>({
    type: null,
    message: '',
  });
  const inputRef = useRef<HTMLInputElement>(null);

  // Helper to focus the input safely
  const focusInput = () => {
    try {
      const el = inputRef.current;
      if (!el) return;
      el.focus({ preventScroll: false } as FocusOptions);
      // select to make it obvious on desktop
      el.select();
    } catch (e) {
      // fallback - some environments may not accept options
      inputRef.current?.focus();
    }
  };

  // Focus input when component mounts or new problem appears
  useEffect(() => {
    // If problem ID changed, we have a new problem - re-enable input
    if (game.currentProblem && game.currentProblem.id !== lastProblemId) {
      setIsSubmitting(false);
      setLastProblemId(game.currentProblem.id);
      setHasSubmittedFinalAnswer(false);
      // Clear previous answer when a new problem arrives
      setUserAnswer('');
      // try to focus; wrap in a small timeout so focus happens after DOM paint
      setTimeout(() => focusInput(), 50);
    }
  }, [game.currentProblem, lastProblemId]);

  // Also focus once on mount (useful when component first renders)
  useEffect(() => {
    setTimeout(() => focusInput(), 50);
  }, []);

  // Handle keyboard shortcuts for restart (R key anywhere)
  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      // Trigger restart with R key (works even in input)
      if (e.key === 'r' || e.key === 'R') {
        e.preventDefault();
        game.startGame();
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [game]);

  // Clear feedback after a short delay
  useEffect(() => {
    if (feedback.type) {
      const timer = setTimeout(() => {
        setFeedback({ type: null, message: '' });
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [feedback.type]);

  // Auto-submit when answer is correct and autoSubmit is enabled
  useEffect(() => {
    if (autoSubmit && userAnswer.trim() && game.currentProblem && !isSubmitting) {
      const answer = parseInt(userAnswer);
      if (!isNaN(answer) && answer === game.currentProblem.answer) {
        // Automatically submit the correct answer
        handleSubmit({ preventDefault: () => {} } as React.FormEvent);
      }
    }
  }, [userAnswer, autoSubmit, game.currentProblem, isSubmitting]);

  // Submit final answer when time runs out
  useEffect(() => {
    if (
      game.timeRemaining === 0 &&
      userAnswer.trim() &&
      !hasSubmittedFinalAnswer &&
      !isSubmitting &&
      game.currentProblem
    ) {
      const answer = parseInt(userAnswer);
      if (!isNaN(answer)) {
        setHasSubmittedFinalAnswer(true);
        game.submitFinalAnswer(answer);
      }
    }
  }, [
    game.timeRemaining,
    userAnswer,
    hasSubmittedFinalAnswer,
    isSubmitting,
    game.currentProblem,
    game.submitFinalAnswer,
  ]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!userAnswer.trim() || !game.currentProblem || isSubmitting) return;

    const answer = parseInt(userAnswer);
    if (isNaN(answer)) return;

    // Disable input immediately
    setIsSubmitting(true);

    // Mark that we're submitting (to prevent final answer auto-submit)
    setHasSubmittedFinalAnswer(true);

    const isCorrect = answer === game.currentProblem.answer;
    setFeedback({
      type: isCorrect ? 'correct' : 'incorrect',
      message: isCorrect ? '✅ Correct!' : `❌ Wrong! Answer was ${game.currentProblem.answer}`,
    });

    // keep the input value (previous answer) visible while submitting;
    // it will be cleared when the next problem arrives

    // Submit answer - input will be re-enabled when new problem arrives
    await game.submitAnswer(answer);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    // Allow: backspace, delete, tab, escape, enter, and arrow keys
    const allowedKeys = [
      'Backspace',
      'Delete',
      'Tab',
      'Escape',
      'Enter',
      'ArrowLeft',
      'ArrowRight',
      'ArrowUp',
      'ArrowDown',
    ];

    // Allow: Ctrl+A, Ctrl+C, Ctrl+V, Ctrl+X
    if (e.ctrlKey || e.metaKey) {
      return;
    }

    // Allow allowed keys
    if (allowedKeys.includes(e.key)) {
      if (e.key === 'Enter' && !isSubmitting && !autoSubmit) {
        handleSubmit(e as any);
      }
      return;
    }

    // Allow numbers 0-9 and minus sign for negative numbers
    if ((e.key >= '0' && e.key <= '9') || e.key === '-') {
      return;
    }

    // Prevent all other keys
    e.preventDefault();
  };

  // Progress bar percentage (using game duration from constants)
  const progressPercentage = (game.timeRemaining / GAME_DURATION_SECONDS) * 100;

  if (!game.currentProblem) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#021013]">
        <div className="text-center">
          <div className="loader-container">
            <div className="loader text-white mb-4"></div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center p-6 bg-[#021013]">
      {/* Decorative shapes removed to ensure flat background (no gradients/blurs) */}

      <main className="relative z-10 w-full max-w-3xl mx-auto">
        {/* Restart Button - Above the game box */}
        <div className="flex justify-end mb-4">
          <button
            onClick={game.startGame}
            className="px-2 sm:px-4 py-2 bg-[#122e2a] hover:bg-[#1a3d38] text-[#86f6b1] hover:text-[#00bf63] font-bold text-sm sm:text-base rounded-lg transition-colors flex items-center justify-center gap-2"
            aria-label="Restart game (Press R)"
            title="Restart game with 0 points (Press R)"
          >
            {/* Icon for mobile, text for desktop */}
            <span className="text-lg sm:text-xl px-2" aria-hidden="true">↻</span>
          </button>
        </div>

        <section className="bg-[#06282a] border border-[#122e2a] rounded-2xl p-4 sm:p-6 md:p-10 shadow-lg min-h-[60vh] flex flex-col items-center justify-center">
          {/* Top bar with score (left), toggle (center) and time+progress (right) */}
          <div className="flex items-center justify-between mb-8 gap-4 w-full">
            {/* Score - Top Left */}
            <div className="flex-shrink-0">
              <div className="flex items-baseline gap-2 font-mono">
                <span className="hidden sm:inline text-3xl md:text-4xl text-gray-300">Score:</span>
                <span className="text-3xl md:text-4xl font-bold text-[#86f6b1]">
                  {game.currentScore}
                </span>
              </div>
            </div>

            {/* Center - Auto-submit toggle (moved to top center) */}
            <div className="flex-1 flex items-center justify-center">
              <div className="bg-transparent">
                <label className="retro-square-toggle" aria-label="Auto-submit toggle" style={{ display: 'inline-flex' }}>
                  <input
                    type="checkbox"
                    checked={autoSubmit}
                    onChange={(e) => setAutoSubmit(e.target.checked)}
                    className="sr-only"
                  />
                  <span className={`retro-square-toggle__box ${autoSubmit ? 'on' : ''}`} aria-hidden />
                  {/* Show text beside toggle on non-mobile devices */}
                  <span className="hidden sm:inline ml-2 text-2xl font-semibold text-gray-200">Autosubmit</span>
                </label>
              </div>
            </div>

            {/* Time and Progress Bar - Top Right */}
            <div className="flex items-center gap-3 w-[250px] sm:w-[150px] justify-end">
              <div className="flex-shrink-0">
                <div
                  className={`font-mono text-2xl md:text-3xl font-bold ${game.timeRemaining <= LOW_TIME_THRESHOLD ? 'text-red-400' : 'text-green-400'}`}
                >
                  {game.timeRemaining}s
                </div>
              </div>
              <div className="w-[140px] md:w-[200px]">
                <div className="bg-gray-600 rounded-full h-2">
                  <div
                    className={`h-2 rounded-full transition-all duration-500 ${
                      game.timeRemaining <= LOW_TIME_THRESHOLD ? 'bg-red-400' : 'bg-green-400'
                    }`}
                    style={{ width: `${progressPercentage}%` }}
                  />
                </div>
              </div>
            </div>
          </div>

          {/* (toggle moved to top bar) */}

          {/* Problem centered */}
          <div className="mb-6 text-center">
            <h2 className="font-mono text-5xl md:text-6xl font-bold text-gray-200">
              {game.currentProblem.question} = ?
            </h2>
          </div>

          {/* Answer Input */}
          <form onSubmit={handleSubmit} className="mb-4">
            <div className="flex flex-col sm:flex-row gap-3 items-center justify-center mx-auto w-full md:w-3/4 lg:w-1/2">
              <input
                ref={inputRef}
                type="number"
                value={userAnswer}
                onChange={(e) => setUserAnswer(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder={isSubmitting ? 'Loading...' : 'Your answer...'}
                disabled={isSubmitting}
                className={`px-2 py-2 text-3xl md:text-4xl text-center rounded-lg focus:outline-none placeholder-gray-400 w-full sm:w-3/4 md:w-1/2 lg:w-[420px] transition-colors duration-200 ${
                  feedback.type === 'correct'
                    ? 'bg-green-900/30 border-2 border-[#00bf63] text-green-200 focus:border-[#00bf63]'
                    : feedback.type === 'incorrect'
                      ? 'bg-red-900/30 border-2 border-red-400 text-red-200 focus:border-red-400'
                      : 'bg-gray-700 border-2 border-gray-600 text-gray-200 focus:border-[#00bf63]'
                } disabled:opacity-75 disabled:cursor-not-allowed`}
                aria-invalid={feedback.type === 'incorrect'}
                autoComplete="off"
              />
              <button
                type="submit"
                disabled={!userAnswer.trim() || isSubmitting || autoSubmit}
                className="w-full sm:w-auto px-6 py-3 bg-[#00bf63] hover:bg-[#00a855] text-black font-bold text-2xl rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed inline-flex items-center justify-center sm:max-w-[160px] truncate"
              >
                {isSubmitting ? 'Loading...' : autoSubmit ? 'Auto On' : 'Submit'}
              </button>
            </div>
          </form>

          {/* Instructions */}
          <div className="text-center text-sm text-gray-400">
            <p className="font-body">
              {autoSubmit
                ? 'Type your answer - correct answers will auto-submit!'
                : 'Type your answer and press Enter or click Submit'}
            </p>
          </div>
        </section>
      </main>
    </div>
  );
};
