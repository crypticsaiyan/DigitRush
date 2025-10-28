import { useState, useEffect, useRef } from 'react';
import { useMathGame } from '../hooks/useMathGame';

interface GamePlayProps {
  game: ReturnType<typeof useMathGame>;
}

export const GamePlay = ({ game }: GamePlayProps) => {
  const [userAnswer, setUserAnswer] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [lastProblemId, setLastProblemId] = useState<string | null>(null);
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

  // Clear feedback after a short delay
  useEffect(() => {
    if (feedback.type) {
      const timer = setTimeout(() => {
        setFeedback({ type: null, message: '' });
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [feedback.type]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!userAnswer.trim() || !game.currentProblem || isSubmitting) return;

    const answer = parseInt(userAnswer);
    if (isNaN(answer)) return;

    // Disable input immediately
    setIsSubmitting(true);

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
    if (e.key === 'Enter' && !isSubmitting) {
      handleSubmit(e as any);
    }
  };

  // Progress bar percentage (updated to 30s game length)
  const progressPercentage = (game.timeRemaining / 30) * 100;

  if (!game.currentProblem) {
    return (
      <div className="min-h-screen flex items-center justify-center p-6 bg-[#021013]">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-500 mx-auto mb-4"></div>
          <p className="text-gray-300">Loading next problem...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center p-6 bg-[#021013]">
      {/* Decorative shapes removed to ensure flat background (no gradients/blurs) */}

      <main className="relative z-10 w-full max-w-3xl mx-auto">
  <section className="bg-[#06282a] border border-[#122e2a] rounded-2xl p-4 sm:p-6 md:p-10 shadow-lg">
          {/* Header with score, problem and timer centered */}
          <div className="flex flex-col items-center justify-center mb-6 gap-3 text-center">
            <div>
              <p className="font-body text-sm text-gray-400">Score</p>
              <div className="mt-2 font-mono text-2xl md:text-3xl font-bold text-indigo-400">
                {game.currentScore}
              </div>
            </div>

            <div className="mt-2">
              <h2 className="font-mono text-2xl md:text-4xl lg:text-5xl font-bold text-gray-200">
                {game.currentProblem.question} = ?
              </h2>
            </div>

            <div className="mt-3">
              <p className="font-body text-sm text-gray-400">Time</p>
              <div
                className={`mt-2 font-mono text-2xl md:text-3xl font-bold ${game.timeRemaining <= 10 ? 'text-red-400' : 'text-green-400'}`}
              >
                {game.timeRemaining}s
              </div>
            </div>
          </div>

          {/* Progress bar */}
          <div className="w-3/4 md:w-1/2 lg:w-1/3 mx-auto bg-gray-600 rounded-full h-3 mb-6">
            <div
              className={`h-3 rounded-full transition-all duration-500 ${
                game.timeRemaining <= 10 ? 'bg-red-400' : 'bg-green-400'
              }`}
              style={{ width: `${progressPercentage}%` }}
            />
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
                className={`font-mono px-4 py-3 text-2xl text-center rounded-lg focus:outline-none placeholder-gray-400 w-full sm:w-3/4 md:w-1/2 lg:w-[420px] transition-colors duration-200 ${
                  feedback.type === 'correct'
                    ? 'bg-green-900/30 border-2 border-green-400 text-green-200 focus:border-green-400'
                    : feedback.type === 'incorrect'
                      ? 'bg-red-900/30 border-2 border-red-400 text-red-200 focus:border-red-400'
                      : 'bg-gray-700 border-2 border-gray-600 text-gray-200 focus:border-indigo-500'
                } disabled:opacity-75 disabled:cursor-not-allowed`}
                aria-invalid={feedback.type === 'incorrect'}
                autoComplete="off"
              />
              <button
                type="submit"
                disabled={!userAnswer.trim() || isSubmitting}
                className="w-full sm:w-auto px-6 py-3 bg-[#00bf63] hover:bg-[#00a855] text-black font-bold rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? '⏳' : '✓'}
              </button>
            </div>
          </form>

          {/* Instructions */}
          <div className="text-center text-sm text-gray-400">
            <p className="font-body">Type your answer and press Enter or click ✓</p>
          </div>
        </section>
      </main>
    </div>
  );
};
