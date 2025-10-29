import React, { useState } from 'react';
import { useMathGame } from './hooks/useMathGame';
import { useAssetPreloader } from './hooks/useAssetPreloader';
import { StartPage, GamePlay, GameResults } from './components';
import { DailyChallenge } from './components/DailyChallenge';

export const App: React.FC = () => {
  const assetLoader = useAssetPreloader();
  const game = useMathGame();
  const [appState, setAppState] = useState<'main' | 'daily-challenge'>('main');

  // Debug logging removed in production

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

  if (appState === 'daily-challenge') {
    return (
      <div className="min-h-screen bg-black">
        <DailyChallenge onBack={() => setAppState('main')} />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black">
      {(game.gameState === 'start' || game.gameState === 'menu') && (
        <StartPage 
          onStart={game.startGame} 
          onDailyChallenge={() => setAppState('daily-challenge')}
        />
      )}
      {game.gameState === 'playing' && <GamePlay game={game} />}
      {game.gameState === 'finished' && <GameResults game={game} />}
    </div>
  );
};
