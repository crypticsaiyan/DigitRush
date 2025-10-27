import React from 'react';
import { useMathGame } from './hooks/useMathGame';
import { StartPage, GamePlay, GameResults } from './components';

export const App: React.FC = () => {
  const game = useMathGame();

  if (game.loading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-black">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-500 mx-auto mb-4"></div>
          <p className="text-gray-300">Loading Math Quiz...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black">
      {game.gameState === 'start' && <StartPage onStart={game.startGame} />}
      {game.gameState === 'playing' && <GamePlay game={game} />}
      {game.gameState === 'finished' && <GameResults game={game} />}
    </div>
  );
};
