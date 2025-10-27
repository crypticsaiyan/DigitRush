import { context, reddit } from '@devvit/web/server';

export const createPost = async () => {
  const { subredditName } = context;
  if (!subredditName) {
    throw new Error('subredditName is required');
  }

  return await reddit.submitCustomPost({
    splash: {
      // Splash Screen Configuration
      appDisplayName: 'DigitRush',
      backgroundUri: 'default-splash.png',
      buttonLabel: 'Tap to Start',
      description: 'Test your math skills in 60 seconds!',
      entryUri: 'index.html',
      heading: 'DigitRush - Math Quiz Challenge',
      appIconUri: 'default-icon.png',
    },
    postData: {
      gameState: 'initial',
      score: 0,
    },
    subredditName: subredditName,
    title: 'DigitRush - Math Quiz Challenge',
  });
};
