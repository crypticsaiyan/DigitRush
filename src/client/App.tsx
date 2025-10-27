import React from 'react';
import { useMathGame } from './hooks/useMathGame';
import { StartPage, GameMenu, GamePlay, GameResults } from './components';

export const App: React.FC = () => {
  const game = useMathGame();

  if (game.loading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading Math Quiz...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {game.gameState === 'start' && <StartPage onStart={game.goToMenu} username={game.username} />}
      {game.gameState === 'menu' && <GameMenu game={game} />}
      {game.gameState === 'playing' && <GamePlay game={game} />}
      {game.gameState === 'finished' && <GameResults game={game} />}
    </div>
  );
};
