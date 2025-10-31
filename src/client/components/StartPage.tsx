import { useState, useEffect } from 'react';
import { Leaderboard } from './Leaderboard';
import type { LeaderboardResponse, GameStatsResponse } from '../../shared/types/api';

interface StartPageProps {
  onStart: () => void;
  onDailyChallenge?: () => void;
}

// Helper function to fetch total plays
const fetchTotalPlays = async (): Promise<number | null> => {
  try {
    const res = await fetch('/api/game/stats');
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const data: GameStatsResponse = await res.json();
    return data.totalPlays;
  } catch (err) {
    return null;
  }
};

export const StartPage = ({ onStart, onDailyChallenge }: StartPageProps) => {
  const [showHow, setShowHow] = useState(false);
  const [showLeaderboard, setShowLeaderboard] = useState(false);
  const [topScore, setTopScore] = useState<number | null>(null);
  const [loadingTopScore, setLoadingTopScore] = useState<boolean>(false);
  const [totalPlays, setTotalPlays] = useState<number | null>(null);
  const [loadingTotalPlays, setLoadingTotalPlays] = useState<boolean>(false);

  // Prevent background page from scrolling while modal is open
  useEffect(() => {
    // Lock body scroll if any modal is open
    if (showHow || showLeaderboard) {
      const prev = document.body.style.overflow;
      document.body.style.overflow = 'hidden';
      return () => {
        document.body.style.overflow = prev || '';
      };
    }
    return;
  }, [showHow, showLeaderboard]);

  // Fetch top score for quick display in the leaderboard button
  useEffect(() => {
    const fetchTopScore = async () => {
      try {
        setLoadingTopScore(true);
        const res = await fetch('/api/leaderboard');
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        const data: LeaderboardResponse = await res.json();
        if (data && Array.isArray(data.entries) && data.entries.length > 0) {
          // Prefer rank 1 if provided, else compute max defensively
          const rankOne = data.entries.find((e) => e.rank === 1);
          const maxScore = rankOne?.score ?? data.entries.reduce((m, e) => Math.max(m, e.score), 0);
          setTopScore(maxScore);
        } else {
          setTopScore(null);
        }
      } catch (err) {
        setTopScore(null);
      } finally {
        setLoadingTopScore(false);
      }
    };

    fetchTopScore();
  }, []);

  // Fetch total game plays
  useEffect(() => {
    const loadTotalPlays = async () => {
      setLoadingTotalPlays(true);
      const plays = await fetchTotalPlays();
      setTotalPlays(plays);
      setLoadingTotalPlays(false);
    };

    loadTotalPlays();
  }, []);

  // Refresh total plays when component becomes visible (e.g., after returning from a game)
  useEffect(() => {
    const handleVisibilityChange = async () => {
      if (!document.hidden) {
        const plays = await fetchTotalPlays();
        if (plays !== null) {
          setTotalPlays(plays);
        }
      }
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);
    return () => document.removeEventListener('visibilitychange', handleVisibilityChange);
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center p-6 bg-[#021013]">
      {/* Decorative shapes removed to ensure flat background (no gradients/blurs) */}

      <main className="relative z-10 w-full max-w-3xl mx-auto">
        <div className="flex justify-between items-center mb-6">
          {/* Total plays counter */}
          <div className="text-white">
            <div className="text-xl text-white/70">Total Plays</div>
            <div className="text-xl font-bold">
              {loadingTotalPlays ? '...' : (totalPlays?.toLocaleString() ?? '0')}
            </div>
          </div>
          {/* Compact leaderboard card so trophy doesn't float alone */}
          <button
            aria-label="Open leaderboard"
            onClick={() => setShowLeaderboard(true)}
            className="inline-flex items-center gap-3 bg-white/4 hover:from-white/8 hover:to-white/6 text-white/95 px-3 py-2 rounded-xl transition transform hover:scale-105 shadow-sm"
            title="Leaderboard"
          >
            <div className="flex items-center justify-center w-16 h-16 bg-[#ffd166] text-black rounded-lg">
              <img src="/images/trophy.gif" alt="Trophy" className="w-12 h-12" />
            </div>

            <div className="hidden sm:flex flex-col leading-tight text-left">
              <span className="text-2xl text-white/90 font-semibold">Leaderboard</span>
              <span className="text-xl text-white/60">
                Top score: {loadingTopScore ? '…' : (topScore ?? '—')}
              </span>
            </div>

            {/* chevron */}
            <svg
              className="w-4 h-4 text-white/80 ml-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
              aria-hidden
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        <section className="bg-[#06282a] border border-[#122e2a] rounded-2xl p-8 md:p-12 shadow-lg">
          <div className="flex flex-col md:flex-row items-center gap-10">
            <div className="flex-1 text-center md:text-left">
              <h1 className="font-heading text-4xl md:text-5xl font-extrabold mb-6 text-[#86f6b1]">
                DigitRush
              </h1>
              <p className="mt-4 text-gray-200 text-lg max-w-xl lg:max-w-2xl font-body">
                Train your mental math, race the clock, and climb the leaderboard. Quick rounds —
                big fun. Ready to beat your high score?
              </p>

              <div className="mt-6 flex flex-col items-center md:items-start gap-3">
                <button
                  onClick={onStart}
                  className="font-heading inline-flex items-center gap-3 bg-[#00a855] text-[#06282A] font-bold px-5 py-3 rounded-lg text-sm transition-transform transform hover:scale-105 shadow-md animate-heartbeat"
                >
                  <span>Start Playing</span>
                </button>

                {onDailyChallenge && (
                  <button
                    onClick={onDailyChallenge}
                    className="font-heading inline-flex items-center gap-3 bg-[#FFD166] hover:bg-[#ffb800] text-black font-bold px-5 py-3 rounded-lg text-sm transition-transform transform hover:scale-105 shadow-md"
                  >
                    <span>Daily Challenge</span>
                  </button>
                )}

                <button
                  onClick={() => setShowHow(true)}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white/6 hover:bg-white/10 text-white text-2xl transition"
                >
                  How to play?
                </button>
              </div>
            </div>
          </div>
          {/* Modal popup rendered at root of section */}
          {showHow && (
            <div
              className="fixed inset-0 z-50 flex items-center justify-center px-4"
              role="dialog"
              aria-modal="true"
              onClick={() => setShowHow(false)}
            >
              <div className="absolute inset-0 bg-black/40" />
              <div
                className="relative z-10 max-w-2xl w-full bg-[#062d2e] border-2 border-[#16a085] rounded-2xl p-4 sm:p-6 text-white shadow-xl max-h-[calc(100vh-6rem)]"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="flex justify-between items-start gap-4 custom">
                  {/* Use explicit responsive sizes + enforced class to ensure size increases */}
                  <h3 className="how-title text-3xl semi-bold">How to play</h3>
                  <button
                    onClick={() => setShowHow(false)}
                    aria-label="Close how to play"
                    className="ml-auto rounded-md p-2 bg-white/6 hover:bg-white/10"
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
                </div>

                <div className="mt-4 text-2xl leading-relaxed">
                  <ol className="list-decimal list-inside space-y-3">
                    <li>Solve as many problems as you can while the timer runs.</li>
                    <li>
                      Toggle Auto-submit mode to auto-submit answers (disables manual submission).
                    </li>
                    <li>Share your score with friends!</li>
                    <li>Press 'r' to restart ongoing game.</li>
                  </ol>
                </div>

                <div className="mt-6 flex justify-end">
                  <button
                    onClick={() => setShowHow(false)}
                    className="px-5 py-3 rounded-lg bg-[#00bf63] hover:bg-[#00a855] text-black font-semibold text-base"
                  >
                    Got it
                  </button>
                </div>
              </div>
            </div>
          )}
        </section>

        {/* Leaderboard modal */}
        {showLeaderboard && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center px-4"
            role="dialog"
            aria-modal="true"
            onClick={() => setShowLeaderboard(false)}
          >
            {/* Background overlay - clicking this closes the modal */}
            <div className="absolute inset-0 bg-black/40" />
            {/* Modal content */}
            <div
              className="relative z-10 max-w-3xl w-full text-white shadow-xl max-h-[calc(100vh-6rem)] overflow-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <Leaderboard onClose={() => setShowLeaderboard(false)} />
            </div>
          </div>
        )}

        <footer className="mt-6 text-center text-2xl text-white/70 hidden sm:block">
          Tip: press{' '}
          <span className="px-3 py-1 bg-white/6 rounded text-sm inline-block">Enter</span> to submit
          answers.
        </footer>
      </main>
    </div>
  );
};
