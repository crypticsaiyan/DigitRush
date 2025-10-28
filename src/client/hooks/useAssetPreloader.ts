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
      
      // Timeout fallback to prevent infinite loading
      const timeoutId = setTimeout(() => {
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
          
          setState((prev) => ({ ...prev, progress }));
        };

        // Preload images
        const imagePromises = imageAssets.map((src) => {
          return new Promise<void>((resolve) => {
            const img = new Image();
            img.onload = () => {
              updateProgress();
              resolve();
            };
            img.onerror = (_error) => {
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
                updateProgress();
                resolve();
              }).catch((_error) => {
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
                updateProgress();
                resolve();
              };

              link.onerror = () => {
                updateProgress();
                resolve();
              };
              
              document.head.appendChild(link);
            }
          });
        });

        // Wait for all assets to load
        await Promise.all([...imagePromises, ...fontPromises]);

  clearTimeout(timeoutId); // Clear timeout since we finished successfully
        
        // Small delay to ensure smooth transition
        setTimeout(() => {
          setState({
            isLoading: false,
            progress: 100,
            error: null,
          });
        }, 300);
      } catch (error) {
        setState({
          isLoading: false,
          progress: 100,
          error: 'Failed to load some assets',
        });
        clearTimeout(timeoutId);
      }
    };

    preloadAssets();
  }, []);

  return state;
};
