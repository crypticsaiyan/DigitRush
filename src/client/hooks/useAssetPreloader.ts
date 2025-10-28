import { useState, useEffect } from 'react';

interface AssetPreloaderState {
  isLoading: boolean;
  progress: number;
  error: string | null;
}

export const useAssetPreloader = () => {
  const [state, setState] = useState<AssetPreloaderState>({
    isLoading: true,
    progress: 0,
    error: null,
  });

  useEffect(() => {
    const preloadAssets = async () => {
      console.log('Starting asset preloading...');
      
      // Timeout fallback to prevent infinite loading
      const timeoutId = setTimeout(() => {
        console.log('Asset preloading timeout - proceeding anyway');
        setState({
          isLoading: false,
          progress: 100,
          error: null,
        });
      }, 5000); // 5 second timeout
      
      try {
        // Define all assets to preload - using correct Vite public folder paths
        const imageAssets = [
          'snoo.png',
          'images/bronze.png',
          'images/gold.png',
          'images/partypopper.png',
          'images/scroll.png',
          'images/silver.png',
          'images/trophy.gif',
        ];

        const fontAssets = [
          { url: 'fonts/editundo.ttf', family: 'editundo' },
          { url: 'fonts/FFFFORWA.TTF', family: 'fffforwa' },
          { url: 'fonts/MedodicaRegular.otf', family: 'medodicaregular' },
        ];

        const allAssets = [...imageAssets, ...fontAssets];
        let loadedCount = 0;

        const updateProgress = () => {
          loadedCount++;
          const progress = Math.round((loadedCount / allAssets.length) * 100);
          console.log(`Asset loading progress: ${progress}% (${loadedCount}/${allAssets.length})`);
          setState((prev) => ({ ...prev, progress }));
        };

        // Preload images
        const imagePromises = imageAssets.map((src) => {
          return new Promise<void>((resolve) => {
            const img = new Image();
            img.onload = () => {
              console.log(`Successfully loaded image: ${src}`);
              updateProgress();
              resolve();
            };
            img.onerror = (error) => {
              console.warn(`Failed to load image: ${src}`, error);
              updateProgress(); // Still count as "loaded" to prevent hanging
              resolve();
            };
            img.src = src;
          });
        });

        // Preload fonts using Font Loading API
        const fontPromises = fontAssets.map(({ url, family }) => {
          return new Promise<void>((resolve) => {
            if (typeof FontFace !== 'undefined' && 'fonts' in document) {
              // Use modern Font Loading API
              const fontFace = new FontFace(family, `url(${url})`);
              fontFace.load().then(() => {
                (document.fonts as any).add(fontFace);
                console.log(`Successfully loaded font: ${family}`);
                updateProgress();
                resolve();
              }).catch((error) => {
                console.warn(`Failed to load font: ${family}`, error);
                updateProgress();
                resolve();
              });
            } else {
              // Fallback for older browsers - preload via link tag
              const link = document.createElement('link');
              link.rel = 'preload';
              link.as = 'font';
              link.type = 'font/truetype';
              link.crossOrigin = 'anonymous';
              link.href = url;
              
              link.onload = () => {
                console.log(`Successfully preloaded font: ${family}`);
                updateProgress();
                resolve();
              };
              
              link.onerror = () => {
                console.warn(`Failed to preload font: ${family}`);
                updateProgress();
                resolve();
              };
              
              document.head.appendChild(link);
            }
          });
        });

        // Wait for all assets to load
        await Promise.all([...imagePromises, ...fontPromises]);

        console.log('All assets loaded, finishing...');
        clearTimeout(timeoutId); // Clear timeout since we finished successfully
        
        // Small delay to ensure smooth transition
        setTimeout(() => {
          setState({
            isLoading: false,
            progress: 100,
            error: null,
          });
          console.log('Asset preloading complete');
        }, 300);
      } catch (error) {
        console.error('Error preloading assets:', error);
        clearTimeout(timeoutId);
        setState({
          isLoading: false,
          progress: 100,
          error: 'Failed to load some assets',
        });
      }
    };

    preloadAssets();
  }, []);

  return state;
};
