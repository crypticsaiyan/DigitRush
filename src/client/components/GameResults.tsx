import { useMathGame } from '../hooks/useMathGame';
import { Leaderboard } from './Leaderboard';

interface GameResultsProps {
  game: ReturnType<typeof useMathGame>;
}

export const GameResults = ({ game }: GameResultsProps) => {
  const getScoreMessage = () => {
    if (game.currentScore === 0) return "Don't give up! Try again! 💪";
    if (game.currentScore <= 5) return "Good start! Keep practicing! 📚";
    if (game.currentScore <= 10) return "Nice work! You're getting better! 👍";
    if (game.currentScore <= 15) return "Great job! Math wizard in training! 🧙‍♂️";
    if (game.currentScore <= 20) return "Excellent! You're a math star! ⭐";
    return "Outstanding! Math genius level! 🏆";
  };

  const getScoreColor = () => {
    // Use the app's accent heading color for consistency across screens
    return 'text-[#86f6b1]';
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-6 bg-gradient-to-br from-black via-[#071019] to-[#021013]">
      <main className="w-full max-w-5xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-6 items-stretch">
          {/* Results Card - hero style */}
          <section className="flex-1 bg-white/5 backdrop-blur-md border border-white/6 rounded-2xl p-6 md:p-8 shadow-lg">
            <div className="text-center">
              <h1 className="font-heading text-3xl md:text-4xl text-[#86f6b1] font-extrabold">⏰ Time's Up!</h1>
              <p className="mt-3 text-gray-300">Here's how you did:</p>
            </div>

            <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="md:col-span-1">
                {game.isNewHighScore && (
                  <div className="bg-[#16a085]/20 border-2 border-[#16a085] rounded-lg p-4 mb-4 animate-pulse">
                    <h2 className="text-lg font-bold text-[#86f6b1] mb-1">🎉 NEW HIGH SCORE! 🎉</h2>
                    <p className="text-white/80">Congratulations!</p>
                  </div>
                )}

                <div className="bg-gray-700 border border-gray-600 rounded-lg p-6 mb-4 text-center">
                  <h3 className="text-lg font-semibold text-gray-200 mb-2">Your Score</h3>
                  <p className={`text-5xl md:text-6xl font-bold mb-2 ${getScoreColor()}`}>{game.currentScore}</p>
                  <p className="text-gray-300">problems solved</p>
                </div>

                <p className="text-lg font-medium text-gray-200">{getScoreMessage()}</p>
              </div>

              <div className="md:col-span-1 space-y-4">
                <div className="bg-[#062d2e] border border-[#16a085] rounded-lg p-4">
                  <h3 className="text-lg font-semibold text-[#86f6b1] mb-1">🏆 High Score</h3>
                  <p className="text-2xl font-bold text-[#86f6b1]">{game.highScore}</p>
                </div>

                <div className="bg-white/6 border border-white/10 rounded-lg p-4">
                  <h3 className="text-lg font-semibold text-gray-200 mb-2">📊 Performance</h3>
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <p className="text-gray-400">Problems / min</p>
                      <p className="font-bold text-gray-200">{game.currentScore}</p>
                    </div>
                    <div>
                      <p className="text-gray-400">Accuracy</p>
                      <p className="font-bold text-gray-200">{game.currentScore > 0 ? '100%' : '0%'}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-6 flex flex-col sm:flex-row gap-3">
              <button
                onClick={game.startGame}
                disabled={game.loading}
                className="flex-1 inline-flex items-center justify-center gap-2 bg-[#00bf63] hover:bg-[#00a855] text-black font-bold px-6 py-3 rounded-lg text-sm transition-transform transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {game.loading ? 'Starting...' : '🔄 Play Again'}
              </button>

              <button
                onClick={game.resetToMenu}
                className="flex-1 inline-flex items-center justify-center gap-2 bg-white/6 hover:bg-white/10 text-white font-semibold px-6 py-3 rounded-lg text-sm"
              >
                🏠 Back to Menu
              </button>
            </div>

            <div className="mt-6 text-center text-sm text-gray-400">
              <p>Keep practicing to improve your math skills! 🚀</p>
            </div>
          </section>

          {/* Leaderboard side card (stacked on small screens) */}
          <aside className="w-full lg:w-80">
            <div className="bg-white/5 backdrop-blur-md border border-white/6 rounded-2xl p-4 shadow-lg h-full">
              <h3 className="text-lg font-semibold text-gray-200 mb-3">🏆 Leaderboard</h3>
              <Leaderboard />
            </div>
          </aside>
        </div>
      </main>
    </div>
  );
};
