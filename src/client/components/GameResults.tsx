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
    if (game.currentScore <= 5) return "text-orange-600";
    if (game.currentScore <= 10) return "text-blue-600";
    if (game.currentScore <= 15) return "text-purple-600";
    if (game.currentScore <= 20) return "text-green-600";
    return "text-yellow-600";
  };

  return (
    <div className="flex flex-col lg:flex-row items-start justify-center min-h-screen p-4 gap-6">
      {/* Results Card */}
      <div className="bg-white rounded-2xl shadow-xl p-8 max-w-md w-full text-center">
        {/* Game Over Header */}
        <div className="mb-6">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">⏰ Time's Up!</h1>
          <p className="text-gray-600">Here's how you did:</p>
        </div>

        {/* New High Score Celebration */}
        {game.isNewHighScore && (
          <div className="bg-gradient-to-r from-yellow-100 to-orange-100 border-2 border-yellow-300 rounded-lg p-4 mb-6 animate-pulse">
            <h2 className="text-xl font-bold text-orange-800 mb-1">🎉 NEW HIGH SCORE! 🎉</h2>
            <p className="text-orange-600">Congratulations!</p>
          </div>
        )}

        {/* Score Display */}
        <div className="mb-6">
          <div className="bg-gray-50 rounded-lg p-6 mb-4">
            <h3 className="text-lg font-semibold text-gray-700 mb-2">Your Score</h3>
            <p className={`text-5xl font-bold mb-2 ${getScoreColor()}`}>
              {game.currentScore}
            </p>
            <p className="text-gray-600">problems solved</p>
          </div>
          
          <p className="text-lg font-medium text-gray-700 mb-4">
            {getScoreMessage()}
          </p>
        </div>

        {/* High Score Display */}
        <div className="bg-gradient-to-r from-indigo-100 to-purple-100 rounded-lg p-4 mb-6">
          <h3 className="text-lg font-semibold text-indigo-800 mb-1">🏆 High Score</h3>
          <p className="text-2xl font-bold text-indigo-600">{game.highScore}</p>
        </div>

        {/* Performance Stats */}
        <div className="bg-gray-50 rounded-lg p-4 mb-6">
          <h3 className="text-lg font-semibold text-gray-700 mb-2">📊 Performance</h3>
          <div className="grid grid-cols-2 gap-4 text-sm">
            <div>
              <p className="text-gray-600">Problems/min</p>
              <p className="font-bold text-gray-800">{game.currentScore}</p>
            </div>
            <div>
              <p className="text-gray-600">Accuracy</p>
              <p className="font-bold text-gray-800">
                {game.currentScore > 0 ? '100%' : '0%'}
              </p>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="space-y-3">
          <button
            onClick={game.startGame}
            disabled={game.loading}
            className="w-full bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white font-bold py-3 px-6 rounded-xl transition-all duration-200 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
          >
            {game.loading ? 'Starting...' : '🔄 Play Again'}
          </button>
          
          <button
            onClick={game.resetToMenu}
            className="w-full bg-gray-500 hover:bg-gray-600 text-white font-bold py-3 px-6 rounded-xl transition-all duration-200"
          >
            🏠 Back to Menu
          </button>
        </div>

        {/* Encouragement */}
        <div className="mt-6 text-sm text-gray-500">
          <p>Keep practicing to improve your math skills! 🚀</p>
        </div>
      </div>

      {/* Leaderboard Card */}
      <div className="bg-white rounded-2xl shadow-xl p-6 max-w-md w-full">
        <Leaderboard />
      </div>
    </div>
  );
};
