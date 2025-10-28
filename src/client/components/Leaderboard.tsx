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

  const getMedalContent = (rank: number) => {
    if (rank === 1) return <img src="/images/gold.png" alt="Gold Medal" className="w-8 h-8" />;
    if (rank === 2) return <img src="/images/silver.png" alt="Silver Medal" className="w-8 h-8" />;
    if (rank === 3) return <img src="/images/bronze.png" alt="Bronze Medal" className="w-8 h-8" />;
    return <span>{rank}.</span>;
  };

  return (
    <div className={compact ? 'w-full' : 'bg-[#06282a] border border-[#122e2a] rounded-2xl p-4 sm:p-6 md:p-8 w-full shadow-lg'}>
      {/* Header */}
      <div className="mb-6 flex items-center justify-between">
        <h2 className="text-2xl sm:text-3xl font-bold text-[#86f6b1] flex items-center gap-3">
          <img src="/images/trophy.gif" alt="Trophy" className="w-10 h-10 sm:w-12 sm:h-12" />
          <span className="text-2xl md:text-3xl">Leaderboard</span>
        </h2>
        {!compact && (
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
            <span className="text-sm text-gray-400 hidden sm:inline">Live</span>
          </div>
        )}
      </div>

        {loading ? (
          <div className="text-center py-12">
            <div className="animate-spin rounded-full h-16 w-16 border-4 border-gray-600 border-t-[#00bf63] mx-auto mb-4"></div>
            <p className="text-gray-300 font-medium">Loading leaderboard...</p>
          </div>
        ) : leaderboard && leaderboard.entries.length > 0 ? (
          <>
            {/* Current User Stats */}
            {leaderboard.userRank && leaderboard.userScore !== null && (
              <div className="bg-gradient-to-br from-[#062d2e] to-[#0a3a3b] border-2 border-[#16a085] rounded-xl p-5 mb-6 shadow-md">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-[#86f6b1] font-semibold mb-1 uppercase tracking-wide">Your Ranking</p>
                    <div className="flex items-center gap-3">
                      <span className="text-3xl font-bold text-[#86f6b1]">#{leaderboard.userRank}</span>
                      <div className="h-8 w-px bg-[#16a085]"></div>
                      <span className="text-2xl font-bold text-white">{leaderboard.userScore}</span>
                      <span className="text-sm text-gray-400">pts</span>
                    </div>
                  </div>
                  <div className="text-5xl opacity-20">👤</div>
                </div>
              </div>
            )}

            {/* Leaderboard List */}
            <div className="space-y-3 max-h-96 overflow-auto pr-2 scrollbar-thin">
              {leaderboard.entries.map((entry: LeaderboardEntry, index: number) => (
                <div
                  key={entry.username}
                  className={`group flex items-center justify-between p-4 rounded-xl transition-all duration-200 hover:scale-[1.02] ${
                    entry.rank === 1
                      ? 'bg-gradient-to-r from-yellow-500/20 to-yellow-600/20 border-2 border-yellow-500 shadow-lg shadow-yellow-500/20'
                      : entry.rank === 2
                      ? 'bg-gradient-to-r from-gray-400/20 to-gray-500/20 border-2 border-gray-400 shadow-md shadow-gray-400/10'
                      : entry.rank === 3
                      ? 'bg-gradient-to-r from-orange-600/20 to-orange-700/20 border-2 border-orange-500 shadow-md shadow-orange-500/10'
                      : 'bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20'
                  }`}
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  <div className="flex items-center gap-4">
                    <div className={`flex items-center justify-center w-12 h-12 rounded-lg font-bold text-2xl ${
                      entry.rank === 1
                        ? 'bg-yellow-500/30'
                        : entry.rank === 2
                        ? 'bg-gray-400/30'
                        : entry.rank === 3
                        ? 'bg-orange-500/30'
                        : 'bg-white/10 text-gray-400'
                    }`}>
                      {getMedalContent(entry.rank)}
                    </div>
                    <div>
                      <p className={`font-bold text-lg ${
                        entry.rank === 1
                          ? 'text-yellow-300'
                          : entry.rank === 2
                          ? 'text-gray-300'
                          : entry.rank === 3
                          ? 'text-orange-300'
                          : 'text-gray-200'
                      }`}>{entry.username}</p>
                      {entry.rank <= 3 && (
                        <p className="text-xs text-gray-400 font-medium mt-0.5">
                          {entry.rank === 1 ? 'Champion' : entry.rank === 2 ? 'Runner-up' : 'Third Place'}
                        </p>
                      )}
                    </div>
                  </div>
                  <div className="text-right">
                    <span className={`inline-flex items-center px-4 py-2 rounded-lg text-base font-bold shadow-md ${
                      entry.rank === 1
                        ? 'bg-yellow-500 text-black'
                        : entry.rank === 2
                        ? 'bg-gray-400 text-black'
                        : entry.rank === 3
                        ? 'bg-orange-500 text-white'
                        : 'bg-[#00bf63] text-black'
                    }`}>
                      {entry.score}
                    </span>
                    <p className="text-xs text-gray-400 mt-1.5 font-medium">points</p>
                  </div>
                </div>
              ))}
            </div>
          </>
        ) : (
          <div className="text-center py-16">
            <div className="text-6xl mb-4 opacity-50">🏆</div>
            <p className="text-xl text-gray-300 mb-2 font-semibold">No scores yet!</p>
            <p className="text-sm text-gray-400">Be the first to play and set a high score.</p>
          </div>
        )}
    </div>
  );
};
