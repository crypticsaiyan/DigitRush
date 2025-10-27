interface StartPageProps {
  onStart: () => void;
  username: string | null;
}

export const StartPage = ({ onStart, username }: StartPageProps) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 flex items-center justify-center p-4">
      <div className="max-w-2xl w-full">
        {/* Main Card */}
        <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 text-center transform hover:scale-105 transition-transform duration-300">
          {/* Game Icon/Logo */}
          <div className="mb-6">
            <div className="inline-block bg-gradient-to-br from-indigo-500 to-purple-600 rounded-full p-6 mb-4 animate-bounce">
              <span className="text-6xl">🧮</span>
            </div>
          </div>

          {/* Title */}
          <h1 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
            DigitRush
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-600 mb-8">
            Test Your Math Skills in 60 Seconds!
          </p>

          {/* Welcome Message */}
          {username && (
            <div className="bg-gradient-to-r from-indigo-100 to-purple-100 rounded-xl p-4 mb-8">
              <p className="text-lg text-indigo-900">
                Welcome back, <span className="font-bold">{username}</span>! 👋
              </p>
            </div>
          )}

          {/* Features */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8 text-left">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-4">
              <div className="flex items-center gap-3">
                <span className="text-3xl">⚡</span>
                <div>
                  <h3 className="font-bold text-gray-800">Fast-Paced</h3>
                  <p className="text-sm text-gray-600">60 seconds of action</p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-4">
              <div className="flex items-center gap-3">
                <span className="text-3xl">🎯</span>
                <div>
                  <h3 className="font-bold text-gray-800">Challenge</h3>
                  <p className="text-sm text-gray-600">Multiple operations</p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-yellow-50 to-yellow-100 rounded-xl p-4">
              <div className="flex items-center gap-3">
                <span className="text-3xl">🏆</span>
                <div>
                  <h3 className="font-bold text-gray-800">Compete</h3>
                  <p className="text-sm text-gray-600">Climb the leaderboard</p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl p-4">
              <div className="flex items-center gap-3">
                <span className="text-3xl">📊</span>
                <div>
                  <h3 className="font-bold text-gray-800">Track Progress</h3>
                  <p className="text-sm text-gray-600">Beat your high score</p>
                </div>
              </div>
            </div>
          </div>

          {/* Game Rules Preview */}
          <div className="bg-gray-50 rounded-xl p-6 mb-8 text-left">
            <h3 className="text-lg font-bold text-gray-800 mb-3 text-center">📋 Quick Rules</h3>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-start gap-2">
                <span className="text-indigo-600 font-bold">•</span>
                <span>Solve as many math problems as you can in 60 seconds</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-indigo-600 font-bold">•</span>
                <span>Addition & Subtraction: 2-digit numbers</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-indigo-600 font-bold">•</span>
                <span>Multiplication: 2-digit × 1-digit</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-indigo-600 font-bold">•</span>
                <span>Division: Simple whole numbers</span>
              </li>
            </ul>
          </div>

          {/* Start Button */}
          <button
            onClick={onStart}
            className="w-full bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white font-bold py-5 px-8 rounded-2xl text-xl transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
          >
            🚀 Start Playing
          </button>

          {/* Motivational Text */}
          <p className="mt-6 text-sm text-gray-500">
            Ready to challenge your brain? Let's go! 💪
          </p>
        </div>

        {/* Footer Info */}
        <div className="mt-6 text-center text-sm text-gray-600">
          <p>Powered by Reddit Devvit • Built for Math Enthusiasts</p>
        </div>
      </div>
    </div>
  );
};
