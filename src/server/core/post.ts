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
  description: 'Test your math skills in 30 seconds!',
  // 'entry' is the expected property name for the web entry path
  entry: 'index.html',Make Kiro experts ask, “Why didn’t I think of that?” We’re looking for creative solutions that significantly improved your development. Think: clever automations, efficiency gains, reduction of cognitive load. Bonus points for solutions others can adopt
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
