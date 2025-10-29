import { useDailyChallenge } from '../hooks/useDailyChallenge';
import { DailyChallengeMenu } from './DailyChallengeMenu';
import { DailyChallengePlay } from './DailyChallengePlay';
// Results view removed — completed summary now appears in the menu

interface DailyChallengeProps {
  onBack: () => void;
}

export const DailyChallenge = ({ onBack }: DailyChallengeProps) => {
  const challenge = useDailyChallenge();

  switch (challenge.state) {
    case 'menu':
      return <DailyChallengeMenu challenge={challenge} onBack={onBack} />;
    case 'playing':
      return <DailyChallengePlay challenge={challenge} />;
    default:
      return <DailyChallengeMenu challenge={challenge} onBack={onBack} />;
  }
};
