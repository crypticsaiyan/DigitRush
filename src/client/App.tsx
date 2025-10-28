import React from 'react';
import { useMathGame } from './hooks/useMathGame';
import { useAssetPreloader } from './hooks/useAssetPreloader';
import { StartPage, GamePlay, GameResults } from './components';

export const App: React.FC = () => {
  const assetLoader = useAssetPreloader();
  const game = useMathGame();

  // Debug logging
  console.log(
    'App render - assetLoader.isLoading:',
    assetLoader.isLoading,
    'game.loading:',
    game.loading
  );

  // Show loading screen while assets are loading or game data is loading
  if (assetLoader.isLoading || game.loading) {
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

  return (
    <div className="min-h-screen bg-black">
      {(game.gameState === 'start' || game.gameState === 'menu') && (
        <StartPage onStart={game.startGame} />
      )}
      {game.gameState === 'playing' && <GamePlay game={game} />}
      {game.gameState === 'finished' && <GameResults game={game} />}
    </div>
  );
};
