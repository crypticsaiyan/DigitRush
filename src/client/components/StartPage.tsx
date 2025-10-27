import { useState, useEffect } from 'react';
import { Leaderboard } from './Leaderboard';

interface StartPageProps {
  onStart: () => void;
}

export const StartPage = ({ onStart }: StartPageProps) => {
  const [showHow, setShowHow] = useState(false);
  const [showLeaderboard, setShowLeaderboard] = useState(false);

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

  return (
    <div className="min-h-screen flex items-center justify-center p-6 bg-gradient-to-br from-black via-[#071019] to-[#021013]">
      {/* Subtle background shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -left-32 -top-24 w-96 h-96 bg-gradient-to-tr from-[#0b3b2a] to-[#06383b] opacity-30 rounded-full blur-3xl transform rotate-12" />
        <div className="absolute -right-32 -bottom-24 w-80 h-80 bg-gradient-to-bl from-[#1a1a2e] to-[#40235a] opacity-20 rounded-full blur-3xl" />
      </div>

      <main className="relative z-10 w-full max-w-3xl mx-auto">
        <div className="flex justify-end mb-6">
          {/* Compact leaderboard card so trophy doesn't float alone */}
          <button
            aria-label="Open leaderboard"
            onClick={() => setShowLeaderboard(true)}
            className="inline-flex items-center gap-3 bg-gradient-to-r from-white/6 to-white/4 hover:from-white/8 hover:to-white/6 text-white/95 px-3 py-2 rounded-xl transition transform hover:scale-105 shadow-sm"
            title="Leaderboard"
          >
            <div className="flex items-center justify-center w-9 h-9 bg-[#ffd166] text-black rounded-lg text-lg">
              🏆
            </div>

            <div className="hidden sm:flex flex-col leading-tight text-left">
              <span className="text-2xl text-white/90 font-semibold">Leaderboard</span>
              <span className="text-xl text-white/60">Top score: —</span>
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

        <section className="bg-white/5 backdrop-blur-md border border-white/6 rounded-2xl p-8 md:p-12 shadow-lg">
          <div className="flex flex-col md:flex-row items-center gap-10">
            <div className="flex-1 text-center md:text-left">
              <h1 className="font-heading text-4xl md:text-5xl font-extrabold mb-6 text-[#86f6b1]">
                DigitRush
              </h1>
              <p className="mt-4 text-gray-200 text-lg max-w-2xl font-body">
                Train your mental math, race the clock, and climb the leaderboard. Quick rounds —
                big fun. Ready to beat your high score?
              </p>

              <div className="mt-6 flex flex-col items-center md:items-start gap-3">
                <button
                  onClick={onStart}
                  className="font-heading inline-flex items-center gap-3 bg-[#00bf63] hover:bg-[#00a855] text-black font-bold px-6 py-3 rounded-lg text-xs transition-transform transform hover:scale-105 shadow-md"
                >
                  <span>Start Playing</span>
                </button>

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
              <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" />
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
                    <li>Correct answers increase your score and streak.</li>
                    <li>Check the leaderboard and challenge friends.</li>
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
            <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" />
            <div
              className="relative z-10 max-w-3xl w-full bg-[#062d2e] border-2 border-[#16a085] rounded-2xl p-4 sm:p-6 text-white shadow-xl max-h-[calc(100vh-6rem)] overflow-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-start justify-between">
                <h3 className="text-2xl font-semibold">🏆 Leaderboard</h3>
                <button
                  onClick={() => setShowLeaderboard(false)}
                  aria-label="Close leaderboard"
                  className="ml-4 rounded-md p-2 bg-white/6 hover:bg-white/10"
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

              <div className="mt-4">
                <Leaderboard />
              </div>
            </div>
          </div>
        )}

        <footer className="mt-6 text-center text-2xl text-white/70 hidden sm:block">
          Tip: press <span className="px-3 py-1 bg-white/6 rounded text-sm inline-block">Enter</span> to submit answers.
        </footer>
      </main>
    </div>
  );
};
