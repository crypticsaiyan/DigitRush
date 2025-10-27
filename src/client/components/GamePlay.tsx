import { useState, useEffect, useRef } from 'react';
import { useMathGame } from '../hooks/useMathGame';

interface GamePlayProps {
  game: ReturnType<typeof useMathGame>;
}

export const GamePlay = ({ game }: GamePlayProps) => {
  const [userAnswer, setUserAnswer] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [lastProblemId, setLastProblemId] = useState<string | null>(null);
  const [feedback, setFeedback] = useState<{ type: 'correct' | 'incorrect' | null; message: string }>({
    type: null,
    message: ''
  });
  const inputRef = useRef<HTMLInputElement>(null);

  // Focus input when component mounts or new problem appears
  useEffect(() => {
    console.log('Current problem changed:', game.currentProblem);
    
    // If problem ID changed, we have a new problem - re-enable input
    if (game.currentProblem && game.currentProblem.id !== lastProblemId) {
      setIsSubmitting(false);
      setLastProblemId(game.currentProblem.id);
      if (inputRef.current) {
        inputRef.current.focus();
      }
    }
  }, [game.currentProblem, lastProblemId]);

  // Clear feedback after a short delay
  useEffect(() => {
    if (feedback.type) {
      const timer = setTimeout(() => {
        setFeedback({ type: null, message: '' });
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [feedback.type]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!userAnswer.trim() || !game.currentProblem || isSubmitting) return;
    
    const answer = parseInt(userAnswer);
    if (isNaN(answer)) return;

    // Disable input immediately
    setIsSubmitting(true);
    
    const isCorrect = answer === game.currentProblem.answer;
    setFeedback({
      type: isCorrect ? 'correct' : 'incorrect',
      message: isCorrect ? '✅ Correct!' : `❌ Wrong! Answer was ${game.currentProblem.answer}`
    });

    // Clear the input
    setUserAnswer('');
    
    // Submit answer - input will be re-enabled when new problem arrives
    await game.submitAnswer(answer);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !isSubmitting) {
      handleSubmit(e as any);
    }
  };

  // Progress bar percentage
  const progressPercentage = (game.timeRemaining / 60) * 100;

  if (!game.currentProblem) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading next problem...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4">
      <div className="bg-white rounded-2xl shadow-xl p-6 max-w-md w-full">
        {/* Header with score and timer */}
        <div className="flex justify-between items-center mb-6">
          <div className="text-center">
            <p className="text-sm text-gray-600">Score</p>
            <p className="text-2xl font-bold text-indigo-600">{game.currentScore}</p>
          </div>
          <div className="text-center">
            <p className="text-sm text-gray-600">Time</p>
            <p className={`text-2xl font-bold ${game.timeRemaining <= 10 ? 'text-red-500' : 'text-green-500'}`}>
              {game.timeRemaining}s
            </p>
          </div>
        </div>

        {/* Progress bar */}
        <div className="w-full bg-gray-200 rounded-full h-2 mb-6">
          <div 
            className={`h-2 rounded-full transition-all duration-1000 ${
              game.timeRemaining <= 10 ? 'bg-red-500' : 'bg-green-500'
            }`}
            style={{ width: `${progressPercentage}%` }}
          ></div>
        </div>

        {/* Math Problem */}
        <div className="text-center mb-6">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            {game.currentProblem.question} = ?
          </h2>
          
          {/* Operation type indicator */}
          <div className="inline-block bg-indigo-100 text-indigo-800 px-3 py-1 rounded-full text-sm font-medium mb-4">
            {game.currentProblem.operation.charAt(0).toUpperCase() + game.currentProblem.operation.slice(1)}
          </div>
        </div>

        {/* Answer Input */}
        <form onSubmit={handleSubmit} className="mb-4">
          <div className="flex gap-2">
            <input
              ref={inputRef}
              type="number"
              value={userAnswer}
              onChange={(e) => setUserAnswer(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder={isSubmitting ? "Loading..." : "Your answer..."}
              disabled={isSubmitting}
              className="flex-1 px-4 py-3 text-xl text-center border-2 border-gray-300 rounded-lg focus:border-indigo-500 focus:outline-none disabled:bg-gray-100 disabled:cursor-not-allowed"
              autoComplete="off"
            />
            <button
              type="submit"
              disabled={!userAnswer.trim() || isSubmitting}
              className="px-6 py-3 bg-indigo-500 hover:bg-indigo-600 text-white font-bold rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? '⏳' : '✓'}
            </button>
          </div>
        </form>

        {/* Feedback */}
        {feedback.type && (
          <div className={`text-center p-3 rounded-lg mb-4 ${
            feedback.type === 'correct' 
              ? 'bg-green-100 text-green-800' 
              : 'bg-red-100 text-red-800'
          }`}>
            <p className="font-medium">{feedback.message}</p>
          </div>
        )}

        {/* Instructions */}
        <div className="text-center text-sm text-gray-500">
          <p>Type your answer and press Enter or click ✓</p>
        </div>
      </div>
    </div>
  );
};
