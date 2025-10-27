import { useState, useEffect } from 'react';
import type { LeaderboardResponse, LeaderboardEntry } from '../../shared/types/api';

interface LeaderboardProps {
  compact?: boolean;
}

export const Leaderboard = ({ compact = false }: LeaderboardProps) => {
  const [leaderboard, setLeaderboard] = useState<LeaderboardResponse | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchLeaderboard = async () => {
      try {
        const res = await fetch('/api/leaderboard');
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        const data: LeaderboardResponse = await res.json();
        setLeaderboard(data);
      } catch (err) {
        console.error('Failed to fetch leaderboard', err);
      } finally {
        setLoading(false);
      }
    };
    
    fetchLeaderboard();
  }, []);

  const getMedalEmoji = (rank: number) => {
    if (rank === 1) return '🥇';
    if (rank === 2) return '🥈';
    if (rank === 3) return '🥉';
    return `${rank}.`;
  };

  return (
    <div className={compact ? '' : 'bg-white rounded-2xl shadow-xl p-6 w-full'}>
      {/* Header */}
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-gray-800">🏆 Leaderboard</h2>
      </div>

        {loading ? (
          <div className="text-center py-8">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-600 mx-auto mb-4"></div>
            <p className="text-gray-600">Loading leaderboard...</p>
          </div>
        ) : leaderboard && leaderboard.entries.length > 0 ? (
          <>
            {/* Current User Stats */}
            {leaderboard.userRank && leaderboard.userScore !== null && (
              <div className="bg-gradient-to-r from-indigo-100 to-purple-100 rounded-lg p-4 mb-4">
                <p className="text-sm text-indigo-800 mb-1">Your Ranking</p>
                <div className="flex justify-between items-center">
                  <span className="text-lg font-bold text-indigo-900">
                    Rank #{leaderboard.userRank}
                  </span>
                  <span className="text-lg font-bold text-indigo-900">
                    {leaderboard.userScore} points
                  </span>
                </div>
              </div>
            )}

            {/* Leaderboard List */}
            <div className="space-y-2">
              {leaderboard.entries.map((entry: LeaderboardEntry) => (
                <div
                  key={entry.username}
                  className={`flex items-center justify-between p-3 rounded-lg ${
                    entry.rank <= 3
                      ? 'bg-gradient-to-r from-yellow-50 to-orange-50 border border-yellow-200'
                      : 'bg-gray-50'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <span className="text-xl font-bold w-8">
                      {getMedalEmoji(entry.rank)}
                    </span>
                    <div>
                      <p className="font-semibold text-gray-800">{entry.username}</p>
                      {entry.rank <= 3 && (
                        <p className="text-xs text-gray-500">
                          {entry.rank === 1 ? 'Champion' : entry.rank === 2 ? 'Runner-up' : 'Third Place'}
                        </p>
                      )}
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-lg font-bold text-indigo-600">{entry.score}</p>
                    <p className="text-xs text-gray-500">points</p>
                  </div>
                </div>
              ))}
            </div>
          </>
        ) : (
          <div className="text-center py-8">
            <p className="text-gray-600 mb-2">No scores yet!</p>
            <p className="text-sm text-gray-500">Be the first to play and set a score.</p>
          </div>
        )}
      </div>
  );
};
