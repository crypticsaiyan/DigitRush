import { useState, useEffect } from 'react';
import { useDailyChallenge } from '../hooks/useDailyChallenge';
import { DailyChallengeLeaderboard } from './DailyChallengeLeaderboard';

interface DailyChallengeResultsProps {
  challenge: ReturnType<typeof useDailyChallenge>;
}

export const DailyChallengeResults = ({ challenge }: DailyChallengeResultsProps) => {
  const [showLeaderboard, setShowLeaderboard] = useState(false);

  // Prevent background page from scrolling while modal is open
  useEffect(() => {
    if (showLeaderboard) {
      const prev = document.body.style.overflow;
      document.body.style.overflow = 'hidden';
      return () => {
        document.body.style.overflow = prev || '';
      };
    }
    return;
  }, [showLeaderboard]);

  

  const formatTime = (ms: number) => {
    const seconds = Math.floor(ms / 1000);
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`;
  };

  const getPerformanceMessage = () => {
    if (challenge.finalScore === 5) {
      return "Perfect score! 🎉";
    } else if (challenge.finalScore >= 4) {
      return "Excellent work! 🌟";
    } else if (challenge.finalScore >= 3) {
      return "Good job! 👍";
    } else if (challenge.finalScore >= 2) {
      return "Not bad! 💪";
    } else {
      return "Keep practicing! 📚";
    }
  };

  return (
    <div className="min-h-screen sm:h-screen flex items-center justify-center p-6 bg-[#021013]">
      <main className="w-full max-w-3xl mx-auto sm:h-full sm:flex sm:items-stretch">
        <section className="relative bg-[#06282a] border border-[#122e2a] rounded-2xl p-6 sm:p-8 shadow-lg sm:flex sm:flex-col sm:h-full">
          {/* Leaderboard icon button */}
          <button
            onClick={() => setShowLeaderboard(true)}
            className="absolute top-4 right-4 p-0 hover:scale-105 transition-transform focus:outline-none hidden sm:block"
          >
            <img src="/images/trophy.gif" alt="Trophy" className="w-8 h-8 sm:w-10 sm:h-10" />
          </button>

          <div className="text-center">
            <h1 className="font-heading text-3xl sm:text-4xl text-[#86f6b1] font-extrabold flex flex-col items-center justify-center gap-6">
              Daily Challenge Complete!
            </h1>
            <p className="mt-3 text-gray-300 text-2xl">{getPerformanceMessage()}</p>
          </div>

          {/* Desktop layout: 2 columns */}
          <div className="mt-6 hidden sm:grid sm:grid-cols-2 gap-6 sm:flex-1">
            <div className="sm:col-span-1">
              <div className="bg-gradient-to-br from-[#062d2e] to-[#0a3a3b] border-2 border-[#16a085] rounded-lg p-6 mb-4 text-center shadow-md">
                <h3 className="text-2xl font-semibold text-[#86f6b1] mb-2">Your Score</h3>
                <p className="text-5xl sm:text-6xl font-extrabold mb-2 text-[#86f6b1]">
                  {challenge.finalScore}/5
                </p>
                <p className="text-gray-300">problems correct</p>
              </div>
            </div>

            <div className="sm:col-span-1 space-y-4">
              <div className="bg-[#062d2e] border border-[#16a085] rounded-lg p-4">
                <div className="flex items-center justify-between whitespace-nowrap">
                  <div className="flex items-center gap-3">
                    <img src="/images/clock.png" alt="Clock" className="w-10 h-10" />
                    <span className="text-lg font-semibold text-white">Completion Time</span>
                  </div>
                  <span className="text-2xl font-bold text-white">
                    {challenge.completionTime ? formatTime(challenge.completionTime) : 'N/A'}
                  </span>
                </div>
              </div>

              {challenge.rank && (
                <div className="bg-[#062d2e] border border-[#16a085] rounded-lg p-4">
                  <div className="flex items-center justify-between whitespace-nowrap">
                    <div className="flex items-center gap-2">
                      <img src="/images/trophy.gif" alt="Rank" className="w-8 h-8" />
                      <span className="text-lg font-semibold text-white">Daily Rank</span>
                    </div>
                    <span className="text-2xl font-bold text-[#ffd166]">#{challenge.rank}</span>
                  </div>
                </div>
              )}

              <div className="bg-[#0b2f2a] border border-[#122e2a] rounded-lg p-4">
                <h3 className="text-2xl font-semibold text-gray-200 mb-2 flex items-center gap-2">
                  <span className="text-3xl">📊</span>
                  Performance
                </h3>
                <div className="grid grid-cols-1 gap-2 text-xl">
                  <div className="flex justify-between">
                    <span className="text-gray-400">Accuracy:</span>
                    <span className="font-bold text-gray-200">
                      {Math.round((challenge.finalScore / 5) * 100)}%
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Avg per problem:</span>
                    <span className="font-bold text-gray-200">
                      {challenge.completionTime 
                        ? formatTime(challenge.completionTime / 5)
                        : 'N/A'
                      }
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Mobile layout: single column */}
          <div className="mt-6 sm:hidden space-y-4">
            {/* Score */}
            <div className="bg-gradient-to-br from-[#062d2e] to-[#0a3a3b] border-2 border-[#16a085] rounded-lg p-6 text-center shadow-md">
              <h3 className="text-2xl font-semibold text-[#86f6b1] mb-2">Your Score</h3>
              <p className="text-5xl font-extrabold mb-2 text-[#86f6b1]">
                {challenge.finalScore}/5
              </p>
              <p className="text-gray-300">problems correct</p>
            </div>

            {/* Leaderboard button removed from bottom (top-right trophy remains) */}

            {/* Completion Time */}
            <div className="bg-[#062d2e] border border-[#16a085] rounded-lg p-4">
              <div className="flex items-center justify-between whitespace-nowrap">
                <div className="flex items-center gap-3">
                  <img src="/images/clock.png" alt="Clock" className="w-10 h-10" />
                  <span className="text-lg font-semibold text-white">Completion Time</span>
                </div>
                <span className="text-2xl font-bold text-white">
                  {challenge.completionTime ? formatTime(challenge.completionTime) : 'N/A'}
                </span>
              </div>
            </div>

            {/* Performance */}
            <div className="bg-[#0b2f2a] border border-[#122e2a] rounded-lg p-4">
              <h3 className="text-2xl font-semibold text-gray-200 mb-2 flex items-center gap-2">
                <span className="text-3xl">📊</span>
                Performance
              </h3>
              <div className="grid grid-cols-1 gap-2 text-xl">
                <div className="flex justify-between">
                  <span className="text-gray-400">Accuracy:</span>
                  <span className="font-bold text-gray-200">
                    {Math.round((challenge.finalScore / 5) * 100)}%
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Avg per problem:</span>
                  <span className="font-bold text-gray-200">
                    {challenge.completionTime 
                      ? formatTime(challenge.completionTime / 5)
                      : 'N/A'
                    }
                  </span>
                </div>
              </div>
            </div>

            {/* Back to Menu */}
            <button
              onClick={challenge.resetToMenu}
              className="w-full inline-flex items-center justify-center gap-2 px-4 py-2 rounded-lg bg-white/6 hover:bg-white/10 text-white text-2xl transition"
            >
              Back to Menu
            </button>
          </div>

          {/* Desktop buttons */}
          <div className="mt-6 sm:mt-auto hidden sm:flex flex-col items-center gap-3">
            <div className="text-center text-gray-300 text-xl mb-2">
              Come back tomorrow for a new challenge!
            </div>
            
            <div className="flex items-center gap-4">
              <button
                onClick={challenge.resetToMenu}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white/6 hover:bg-white/10 text-white text-2xl transition"
              >
                Back to Menu
              </button>
            </div>
          </div>
        </section>

        {/* Leaderboard modal */}
        {showLeaderboard && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center px-4"
            role="dialog"
            aria-modal="true"
            onClick={() => setShowLeaderboard(false)}
          >
            <div className="absolute inset-0 bg-black/40" />
            <div
              className="relative z-10 max-w-3xl w-full text-white shadow-xl max-h-[calc(100vh-6rem)] overflow-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <DailyChallengeLeaderboard onClose={() => setShowLeaderboard(false)} />
            </div>
          </div>
        )}
      </main>
    </div>
  );
};
