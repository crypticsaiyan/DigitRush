import { useState, useEffect } from 'react';
import { useMathGame } from '../hooks/useMathGame';
import { Leaderboard } from './Leaderboard';
import type { LeaderboardResponse } from '../../shared/types/api';

interface GameResultsProps {
  game: ReturnType<typeof useMathGame>;
}

export const GameResults = ({ game }: GameResultsProps) => {
  const [showLeaderboard, setShowLeaderboard] = useState(false);
  const [userRank, setUserRank] = useState<number | null>(null);

  const getScoreColor = () => {
    // Use the app's accent heading color for consistency across screens
    return 'text-[#86f6b1]';
  };

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

  // Fetch current user's rank for phone-only leaderboard block
  useEffect(() => {
    let cancelled = false;
    (async () => {
      try {
        const res = await fetch('/api/leaderboard');
        if (!res.ok) return;
        const data: LeaderboardResponse = await res.json();
        if (cancelled) return;
        setUserRank(data.userRank);
      } catch {
        // ignore errors silently for this auxiliary UI
      }
    })();
    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <div className="min-h-screen sm:h-screen flex items-center justify-center p-6 bg-[#021013]">
      <main className="w-full max-w-3xl mx-auto sm:h-full sm:flex sm:items-stretch">
        {/* Results Card - hero style */}
        <section className="relative bg-[#06282a] border border-[#122e2a] rounded-2xl p-6 sm:p-8 shadow-lg sm:flex sm:flex-col sm:h-full">
          {/* Leaderboard icon button (like StartPage) inside the main box */}
          <button
            aria-label="Open leaderboard"
            onClick={() => setShowLeaderboard(true)}
            title="Leaderboard"
            className="absolute top-4 right-4 p-0 hover:scale-105 transition-transform focus:outline-none hidden sm:block"
          >
            <img src="/images/trophy.gif" alt="Trophy" className="w-8 h-8 sm:w-10 sm:h-10" />
          </button>
          <div className="text-center">
            <h1 className="font-heading text-3xl sm:text-4xl text-[#86f6b1] font-extrabold flex flex-col items-center justify-center gap-6">
              Time's Up!
            </h1>
            <p className="mt-3 text-gray-300 text-2xl">Here's how you did:</p>
          </div>

          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-6 sm:flex-1">
            <div className="sm:col-span-1">
              {game.isNewHighScore && (
                <div className="bg-[#16a085]/20 border-2 border-[#16a085] rounded-lg p-4 mb-4 animate-pulse">
                  <br />
                  <h2 className="text-2xl font-bold text-[#86f6b1] mb-1 flex items-center justify-center gap-2">
                    <img src="/images/partypopper.png" alt="Party" className="w-6" />
                    NEW HIGH SCORE!
                    <img src="/images/partypopper.png" alt="Party" className="w-6" />
                  </h2>
                  <p className="text-white/80">Congratulations!</p>
                </div>
              )}

              <div className="bg-gradient-to-br from-[#062d2e] to-[#0a3a3b] border-2 border-[#16a085] rounded-lg p-6 mb-4 text-center shadow-md">
                <h3 className="text-2xl font-semibold text-[#86f6b1] mb-2">Your Score</h3>
                <p className={`text-5xl sm:text-6xl font-extrabold mb-2 ${getScoreColor()}`}>
                  {game.currentScore}
                </p>
                <p className="text-gray-300">problems solved</p>
              </div>
              
            </div>

            <div className="sm:col-span-1 space-y-4">
              <div className="bg-[#062d2e] border border-[#16a085] rounded-lg p-4">
                <div className="flex items-center justify-between whitespace-nowrap">
                  <div className="flex items-center gap-2">
                    <img src="/images/gold.png" alt="Gold" className="w-10" />
                    <span className="text-lg font-semibold text-white">High Score</span>
                  </div>
                  <span className="text-2xl font-bold text-white">{game.highScore}</span>
                </div>
              </div>

              {/* Phone-only: Leaderboard quick access block, styled like High Score */}
              <button
                type="button"
                onClick={() => setShowLeaderboard(true)}
                className="sm:hidden bg-[#062d2e] border border-[#16a085] rounded-lg p-4 w-full text-left hover:bg-white/5 transition"
                aria-label="Open leaderboard"
              >
                <div className="flex items-center justify-between whitespace-nowrap">
                  <div className="flex items-center gap-2">
                    <img src="/images/trophy.gif" alt="Leaderboard" className="w-10 h-10" />
                    <span className="text-lg font-semibold text-white">Leaderboard</span>
                  </div>
                  <span className="text-2xl font-bold text-[#86f6b1]">{userRank ? `#${userRank}` : 'View'}</span>
                </div>
              </button>

              <div className="bg-[#0b2f2a] border border-[#122e2a] rounded-lg p-4">
                <h3 className="text-2xl font-semibold text-gray-200 mb-2 flex items-center gap-2">
                  <img src="/images/scroll.png" alt="Performance" className="w-10" />
                  Performance
                </h3>
                <div className="grid grid-cols-2 gap-4 text-xl">
                  <div>
                    <p className="text-gray-400">Problems / min</p>
                    <p className="font-bold text-gray-200">{game.currentScore}</p>
                  </div>
                  <div>
                    <p className="text-gray-400">Accuracy</p>
                    <p className="font-bold text-gray-200">
                      {(() => {
                        const total = game.totalAnswered ?? 0;
                        const correct = game.totalCorrect ?? 0;
                        if (total === 0) return '0%';
                        const pct = Math.round((correct / total) * 100);
                        return `${pct}%`;
                      })()}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-6 sm:mt-auto flex flex-col items-center gap-3">
            <button
              onClick={game.startGame}
              disabled={game.loading}
              className="font-heading inline-flex items-center gap-3 bg-[#00bf63] hover:bg-[#00a855] text-[#06282A] font-bold px-5 py-3 rounded-lg text-sm transition-transform transform hover:scale-105 shadow-md animate-heartbeat disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <span>{game.loading ? 'Starting...' : 'Play Again'}</span>
            </button>

            <button
              onClick={game.resetToMenu}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white/6 hover:bg-white/10 text-white text-2xl transition"
            >
              Back to Menu
            </button>
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
              <button
                onClick={() => setShowLeaderboard(false)}
                aria-label="Close leaderboard"
                className="absolute top-4 right-4 z-20 rounded-md p-2 bg-white/6 hover:bg-white/10"
              >
                <svg
                  className="w-4 h-4"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              <Leaderboard />
            </div>
          </div>
        )}
      </main>
    </div>
  );
};
