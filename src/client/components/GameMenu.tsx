import { useMathGame } from '../hooks/useMathGame';
import { Leaderboard } from './Leaderboard';

interface GameMenuProps {
  game: ReturnType<typeof useMathGame>;
}

export const GameMenu = ({ game }: GameMenuProps) => {
  return (
    <div className="flex flex-col lg:flex-row items-start justify-center min-h-screen p-4 gap-6">
      {/* Main Menu Card */}
      <div className="bg-white rounded-2xl shadow-xl p-8 max-w-md w-full text-center">
        {/* Game Title */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-indigo-600 mb-2">🧮 Math Quiz</h1>
          <p className="text-gray-600">Test your math skills in 60 seconds!</p>
        </div>

        {/* Welcome Message */}
        {game.username && (
          <div className="mb-6">
            <h2 className="text-xl font-semibold text-gray-800">
              Welcome, {game.username}! 👋
            </h2>
          </div>
        )}

        {/* High Score */}
        <div className="bg-gradient-to-r from-yellow-100 to-orange-100 rounded-lg p-4 mb-6">
          <h3 className="text-lg font-semibold text-orange-800 mb-1">🏆 High Score</h3>
          <p className="text-2xl font-bold text-orange-600">{game.highScore}</p>
        </div>

        {/* Game Rules */}
        <div className="bg-gray-50 rounded-lg p-4 mb-6 text-left">
          <h3 className="text-lg font-semibold text-gray-800 mb-2">📋 How to Play</h3>
          <ul className="text-sm text-gray-600 space-y-1">
            <li>• Solve math problems as fast as you can</li>
            <li>• You have 60 seconds to answer</li>
            <li>• Addition & subtraction: 2-digit numbers</li>
            <li>• Multiplication: 2-digit × 1-digit</li>
            <li>• Division: Simple whole numbers</li>
          </ul>
        </div>

        {/* Start Button */}
        <button
          onClick={game.startGame}
          disabled={game.loading}
          className="w-full bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white font-bold py-4 px-6 rounded-xl text-lg transition-all duration-200 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
        >
          {game.loading ? 'Starting...' : '🚀 Start Game'}
        </button>
      </div>

      {/* Leaderboard Card */}
      <div className="bg-white rounded-2xl shadow-xl p-6 max-w-md w-full">
        <Leaderboard />
      </div>
    </div>
  );
};
