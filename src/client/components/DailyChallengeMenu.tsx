import { useState, useEffect } from 'react';
import { useDailyChallenge } from '../hooks/useDailyChallenge';
import { DailyChallengeLeaderboard } from './DailyChallengeLeaderboard';
import { ALLOW_DAILY_RETRIES_FOR_TESTING } from '../../shared/constants';

interface DailyChallengeMenuProps {
  challenge: ReturnType<typeof useDailyChallenge>;
  onBack: () => void;
}

export const DailyChallengeMenu = ({ challenge, onBack }: DailyChallengeMenuProps) => {
  const [showLeaderboard, setShowLeaderboard] = useState(false);

  // Close leaderboard modal on Escape key
  useEffect(() => {
    if (!showLeaderboard) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setShowLeaderboard(false);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [showLeaderboard]);

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

  if (challenge.loading) {
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

  if (!challenge.challengeInfo) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#021013]">
        <div className="text-center">
          <p className="text-white text-2xl mb-4">Failed to load daily challenge</p>
          <button
            onClick={onBack}
            className="px-4 py-2 bg-[#00bf63] hover:bg-[#00a855] text-black font-bold rounded-lg"
          >
            Back to Menu
          </button>
        </div>
      </div>
    );
  }

  const { challengeInfo } = challenge;
  const today = new Date().toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <div className="min-h-screen flex items-center justify-center p-6 bg-[#021013]">
      <main className="relative z-10 w-full max-w-3xl mx-auto">
        <div className="flex justify-between items-center mb-6">
          {/* Back button */}
          <button
            onClick={onBack}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white/6 hover:bg-white/10 text-white text-2xl transition"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
            Back
          </button>

          {/* Compact leaderboard card matching StartPage */}
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
              <span className="text-2xl text-white/90 font-semibold">Daily Leaderboard</span>
              <span className="text-xl text-white/60">Today's fastest</span>
            </div>

            <svg
              className="w-4 h-4 text-white/80 ml-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        <section className="bg-[#06282a] border border-[#122e2a] rounded-2xl p-8 md:p-12 shadow-lg">
          <div className="text-center mb-8">
            <h1 className="font-heading text-4xl md:text-5xl font-extrabold mb-4 text-[#86f6b1] chall">
              Daily Challenge
            </h1>
            <p className="text-2xl text-gray-200 mb-2">{today}</p>
            <p className="text-xl text-gray-300">
              5 problems • One attempt per day • Fastest solver wins!
            </p>
          </div>

          {challengeInfo.hasAttempted ? (
            <div className="text-center">
              <div className="bg-gradient-to-br from-[#062d2e] to-[#0a3a3b] border-2 border-[#16a085] rounded-xl p-6 mb-6">
                <h2 className="text-2xl font-bold text-[#86f6b1] mb-4">Challenge Completed!</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xl">
                  <div>
                    <p className="text-gray-400">Your Score</p>
                    <p className="text-3xl font-bold text-white">{challengeInfo.userScore}/5</p>
                  </div>
                  <div>
                    <p className="text-gray-400">Completion Time</p>
                    <p className="text-3xl font-bold text-white">
                      {challengeInfo.userTime ? formatTime(challengeInfo.userTime) : 'N/A'}
                    </p>
                  </div>
                </div>
              </div>
              <p className="text-xl text-gray-300 mb-6">Come back tomorrow for a new challenge!</p>
              {/* If testing flag is enabled, show a Play Again button here so devs can replay */}
              {ALLOW_DAILY_RETRIES_FOR_TESTING && (
                <div className="flex items-center justify-center gap-4">
                  <button
                    onClick={challenge.startChallenge}
                    disabled={challenge.loading}
                    className="inline-flex items-center gap-2 px-6 py-3 bg-[#00bf63] hover:bg-[#00a855] text-black font-bold text-xl rounded-lg transition disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {challenge.loading ? 'Starting...' : 'Play Again'}
                  </button>
                </div>
              )}
            </div>
          ) : (
            <div className="text-center">
              <div className="mb-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                  <div className="bg-white/5 rounded-lg p-4">
                    <div className="text-3xl mb-2">🎯</div>
                    <h3 className="text-xl font-bold text-white mb-2">5 Problems</h3>
                    <p className="text-gray-300">Mixed math operations</p>
                  </div>
                  <div className="bg-white/5 rounded-lg p-4">
                    <div className="text-3xl mb-2">⏱️</div>
                    <h3 className="text-xl font-bold text-white mb-2">Speed Matters</h3>
                    <p className="text-gray-300">Fastest solver wins</p>
                  </div>
                  <div className="bg-white/5 rounded-lg p-4">
                    <div className="text-3xl mb-2">🏆</div>
                    <h3 className="text-xl font-bold text-white mb-2">One Chance</h3>
                    <p className="text-gray-300">One attempt per day</p>
                  </div>
                </div>
              </div>

              <button
                onClick={challenge.startChallenge}
                disabled={challenge.loading}
                className="font-heading inline-flex items-center gap-3 bg-[#00bf63] hover:bg-[#00a855] text-[#06282A] font-bold px-8 py-4 rounded-lg text-xl transition-transform transform hover:scale-105 shadow-md disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <span>{challenge.loading ? 'Starting...' : 'Start Daily Challenge'}</span>
              </button>
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
