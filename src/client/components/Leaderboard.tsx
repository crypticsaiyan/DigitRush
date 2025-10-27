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
    <div className={compact ? 'w-full' : 'bg-white/5 backdrop-blur-md border border-white/6 rounded-2xl p-4 sm:p-6 w-full shadow-lg'}>
      {/* Header */}
      <div className="mb-4 flex items-center justify-between">
        <h2 className="text-xl sm:text-2xl font-bold text-[#86f6b1]">🏆 Leaderboard</h2>
        {!compact && (
          <span className="text-sm text-gray-400 hidden sm:inline">Live • Updated</span>
        )}
      </div>

        {loading ? (
          <div className="text-center py-8">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-500 mx-auto mb-4"></div>
            <p className="text-gray-300">Loading leaderboard...</p>
          </div>
        ) : leaderboard && leaderboard.entries.length > 0 ? (
          <>
            {/* Current User Stats */}
            {leaderboard.userRank && leaderboard.userScore !== null && (
              <div className="bg-[#062d2e] border border-[#16a085] rounded-lg p-4 mb-4">
                <p className="text-sm text-[#86f6b1] mb-1">Your Ranking</p>
                <div className="flex justify-between items-center">
                  <span className="text-lg font-bold text-[#86f6b1]">Rank #{leaderboard.userRank}</span>
                  <span className="text-lg font-bold text-[#86f6b1]">{leaderboard.userScore} points</span>
                </div>
              </div>
            )}

            {/* Leaderboard List */}
            <div className="space-y-2 max-h-80 overflow-auto">
              {leaderboard.entries.map((entry: LeaderboardEntry) => (
                <div
                  key={entry.username}
                  className={`flex items-center justify-between p-3 rounded-lg ${
                    // Use a neutral fill for all rows; color the border for top 3 only
                    entry.rank === 1
                      ? 'bg-white/6 border border-[#ffd166]'
                      : entry.rank <= 3
                      ? 'bg-white/6 border border-yellow-500'
                      : 'bg-white/6 border border-white/10'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <span className="text-xl font-bold w-8 text-gray-800">{getMedalEmoji(entry.rank)}</span>
                    <div>
                      <p className={`font-semibold ${
                        entry.rank === 1
                          ? 'text-[#ffd166]'
                          : entry.rank <= 3
                          ? 'text-yellow-200'
                          : 'text-gray-200'
                      }`}>{entry.username}</p>
                      {entry.rank <= 3 && (
                        <p className="text-xs text-gray-400">
                          {entry.rank === 1 ? 'Champion' : entry.rank === 2 ? 'Runner-up' : 'Third Place'}
                        </p>
                      )}
                    </div>
                  </div>
                  <div className="text-right flex flex-col items-end">
                    <span className={`${
                      entry.rank === 1
                        ? 'bg-[#ffd166]'
                        : entry.rank <= 3
                        ? 'bg-yellow-500'
                        : 'bg-[#86f6b1]'
                    } inline-flex items-center px-3 py-1 rounded-md text-sm font-semibold text-white`}>{entry.score}</span>
                    <p className="text-xs text-gray-400 mt-1">points</p>
                  </div>
                </div>
              ))}
            </div>
          </>
        ) : (
          <div className="text-center py-8">
            <p className="text-gray-300 mb-2">No scores yet!</p>
            <p className="text-sm text-gray-400">Be the first to play and set a score.</p>
          </div>
        )}
    </div>
  );
};
