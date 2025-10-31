import { useState, useEffect, useRef } from 'react';
import { useDailyChallenge } from '../hooks/useDailyChallenge';

interface DailyChallengePlayProps {
  challenge: ReturnType<typeof useDailyChallenge>;
}

export const DailyChallengePlay = ({ challenge }: DailyChallengePlayProps) => {
  const [userAnswer, setUserAnswer] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [feedback, setFeedback] = useState<{
    type: 'correct' | 'incorrect' | null;
    message: string;
  }>({
    type: null,
    message: '',
  });
  const inputRef = useRef<HTMLInputElement>(null);
  const [elapsedMs, setElapsedMs] = useState<number>(0);

  // Helper to focus the input safely
  const focusInput = () => {
    try {
      const el = inputRef.current;
      if (!el) return;
      el.focus({ preventScroll: false } as FocusOptions);
      el.select();
    } catch (e) {
      inputRef.current?.focus();
    }
  };

  // Focus input when component mounts or new problem appears
  useEffect(() => {
    setTimeout(() => focusInput(), 50);
  }, [challenge.currentProblemIndex]);

  // Update elapsed time since challenge started while playing
  useEffect(() => {
    let id: number | null = null;
    const update = () => {
      if (!challenge.startTime) {
        setElapsedMs(0);
        return;
      }
      setElapsedMs(Date.now() - challenge.startTime);
    };

    if (challenge.state === 'playing') {
      update();
      id = window.setInterval(update, 200);
    } else {
      // show final completionTime if available
      setElapsedMs(challenge.completionTime ?? 0);
    }

    return () => {
      if (id) clearInterval(id);
    };
  }, [challenge.state, challenge.startTime, challenge.completionTime]);

  const formatElapsed = (ms: number) => {
    if (!ms) return '0:00.0';
    const totalSeconds = Math.floor(ms / 1000);
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds % 60;
    const tenths = Math.floor((ms % 1000) / 100);
    return `${minutes}:${seconds.toString().padStart(2, '0')}.${tenths}`;
  };

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

    if (!userAnswer.trim() || !challenge.currentProblem || isSubmitting) return;

    const answer = parseInt(userAnswer);
    if (isNaN(answer)) return;

    setIsSubmitting(true);

    const isCorrect = answer === challenge.currentProblem.answer;
    setFeedback({
      type: isCorrect ? 'correct' : 'incorrect',
      message: isCorrect ? '✅ Correct!' : `❌ Wrong! Answer was ${challenge.currentProblem.answer}`,
    });

    // Submit answer
    await challenge.submitAnswer(answer);
    
    // Clear input and re-enable for next problem
    setUserAnswer('');
    setIsSubmitting(false);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
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

    if (e.ctrlKey || e.metaKey) {
      return;
    }

    if (allowedKeys.includes(e.key)) {
      if (e.key === 'Enter' && !isSubmitting) {
        handleSubmit(e as any);
      }
      return;
    }

    if ((e.key >= '0' && e.key <= '9') || e.key === '-') {
      return;
    }

    e.preventDefault();
  };

  if (!challenge.currentProblem) {
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
      <main className="relative z-10 w-full max-w-3xl mx-auto">
        <section className="bg-[#06282a] border border-[#122e2a] rounded-2xl p-4 sm:p-6 md:p-10 shadow-lg min-h-[60vh] flex flex-col items-center justify-center">
          {/* Top bar with progress and score */}
          <div className="flex items-center justify-between mb-8 gap-4 w-full">
            {/* Progress - Left */}
            <div className="flex-shrink-0">
              <div className="flex items-baseline gap-2 font-mono">
                <span className="text-2xl md:text-3xl text-gray-300">Problem:</span>
                <span className="text-2xl md:text-3xl font-bold text-[#86f6b1]">
                  {challenge.currentProblemIndex + 1}/{challenge.totalProblems}
                </span>
              </div>
            </div>

            {/* Score - Right */}
            <div className="flex-shrink-0">
              <div className="text-center mt-1">
                <div className="text-3xl font-mono text-[#86f6b1]">{formatElapsed(elapsedMs)}</div>
              </div>
            </div>
          </div>

          {/* Problem centered */}
          <div className="mb-6 text-center">
            <h2 className="font-mono text-5xl md:text-6xl font-bold text-gray-200">
              {challenge.currentProblem.question} = ?
            </h2>
          </div>

          {/* Answer Input */}
          <form onSubmit={handleSubmit} className="mb-4">
            <div className="flex flex-col sm:flex-row gap-3 items-center justify-center mx-auto w-full md:w-3/4 lg:w-1/2">
              <input
                ref={inputRef}
                type="number"
                inputMode="numeric"
                pattern="-?[0-9]*"
                aria-label="Answer input"
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
                aria-label="Submit answer"
                disabled={!userAnswer.trim() || isSubmitting}
                className="w-full sm:w-auto px-6 py-3 bg-[#00bf63] hover:bg-[#00a855] text-black font-bold text-2xl rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed inline-flex items-center justify-center sm:max-w-[160px] truncate"
              >
                {isSubmitting ? 'Loading...' : 'Submit'}
              </button>
            </div>
          </form>

          {/* Instructions */}
          <div className="text-center text-sm text-gray-400">
            <p className="font-body">
              Type your answer and press Enter or click Submit
            </p>
          </div>

          {/* Progress bar */}
          <div className="mt-8 w-full max-w-md">
            {(() => {
              const percent = Math.round((challenge.currentProblemIndex / Math.max(1, challenge.totalProblems)) * 100);
              const progressPercent = Math.min(100, Math.max(0, percent));
              return (
                <>
                  <div className="bg-gray-600 rounded-full h-2">
                    <div
                      className="h-2 rounded-full bg-[#86f6b1] transition-all duration-300"
                      style={{ width: `${progressPercent}%` }}
                    />
                  </div>
                  <p className="text-center text-gray-400 mt-2">
                    {challenge.currentProblemIndex} of {challenge.totalProblems} completed
                  </p>
                </>
              );
            })()}
          </div>
        </section>
      </main>
    </div>
  );
};
