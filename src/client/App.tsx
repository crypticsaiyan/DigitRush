import React from 'react';
import { useMathGame } from './hooks/useMathGame';
import { StartPage, GamePlay, GameResults } from './components';

export const App: React.FC = () => {
  const game = useMathGame();

  if (game.loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-black">
        <div className="text-center">
          <div className="loader-container">
            <div className="loader text-white mb-4"></div>
          </div>
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
