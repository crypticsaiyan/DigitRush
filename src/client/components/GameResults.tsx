import { useMathGame } from '../hooks/useMathGame';
import { Leaderboard } from './Leaderboard';

interface GameResultsProps {
  game: ReturnType<typeof useMathGame>;
}

export const GameResults = ({ game }: GameResultsProps) => {
  const getScoreColor = () => {
    // Use the app's accent heading color for consistency across screens
    return 'text-[#86f6b1]';
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-6 bg-[#021013]">
      <main className="w-full max-w-5xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-6 items-stretch">
          {/* Results Card - hero style */}
          <section className="flex-1 bg-[#06282a] border border-[#122e2a] rounded-2xl p-6 md:p-8 shadow-lg">
            <div className="text-center">
              <h1 className="font-heading text-3xl md:text-4xl text-[#86f6b1] font-extrabold flex flex-col items-center justify-center gap-6">
                Time's Up!
              </h1>
              <p className="mt-3 text-gray-300 text-2xl">Here's how you did:</p>
            </div>

            <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="md:col-span-1">
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

                <div className="bg-gray-700 border border-gray-600 rounded-lg p-6 mb-4 text-center">
                  <h3 className="text-2xl font-semibold text-gray-200 mb-2">Your Score</h3>
                  <p className={`text-5xl md:text-6xl font-bold mb-2 ${getScoreColor()}`}>
                    {game.currentScore}
                  </p>
                  <p className="text-gray-300">problems solved</p>
                </div>
              </div>

              <div className="md:col-span-1 space-y-4">
                <div className="bg-[#062d2e] border border-[#16a085] rounded-lg p-4">
                  <h3 className="text-lg font-semibold text-[#86f6b1] mb-1 flex items-center gap-2">
                    <img src="/images/trophy.gif" alt="Trophy" className="w-10" />
                    High Score
                  </h3>
                  <p className="text-2xl font-bold text-[#86f6b1]">{game.highScore}</p>
                </div>

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
                        {game.currentScore > 0 ? '100%' : '0%'}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-6 flex flex-col sm:flex-row gap-3">
              <button
                onClick={game.startGame}
                disabled={game.loading}
                className="font-heading flex-1 inline-flex items-center justify-center gap-2 bg-[#00bf63] hover:bg-[#00a855] text-ls font-bold px-6 py-3 rounded-lg text-[#0E2E31] transition-transform transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {game.loading ? 'Starting...' : 'Play Again'}
              </button>

              <button
                onClick={game.resetToMenu}
                className="flex-1 inline-flex items-center justify-center gap-2 bg-white/6 hover:bg-white/10 text-white font-semibold px-6 py-3 rounded-lg text-2xl"
              >
                Back to Menu
              </button>
            </div>
          </section>

          {/* Leaderboard side card (stacked on small screens) */}
          <aside className="w-full lg:w-80">
            <div className="bg-[#06282a] border border-[#122e2a] rounded-2xl p-4 shadow-lg h-full">
              <h3 className="text-lg font-semibold text-gray-200 mb-3 flex items-center gap-2">
                <img src="/images/trophy.gif" alt="Trophy" className="w-6 h-6" />
                Leaderboard
              </h3>
              <Leaderboard />
            </div>
          </aside>
        </div>
      </main>
    </div>
  );
};
