import { useState, useEffect } from 'react';
import type { LeaderboardResponse, LeaderboardEntry } from '../../shared/types/api';

interface LeaderboardProps {
  compact?: boolean;
}

export const Leaderboard = ({ compact = false }: LeaderboardProps) => {
  const [leaderboard, setLeaderboard] = useState<LeaderboardResponse | null>(null);
  const [loading, setLoading] = useState(true);

  // Fallback Reddit default avatar based on rank (1..8 cycling)
  const defaultAvatar = (rank: number) =>
    `https://www.redditstatic.com/avatars/defaults/v2/avatar_default_${(rank % 8) + 1}.png`;

  useEffect(() => {
    const fetchLeaderboard = async () => {
      try {
        const res = await fetch('/api/leaderboard');
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        const data: LeaderboardResponse = await res.json();
        setLeaderboard(data);
      } catch (err) {
      } finally {
        setLoading(false);
      }
    };

    fetchLeaderboard();
  }, []);

  // kept for potential future use

  return (
    <div
      className={
        compact
          ? 'w-full'
          : 'bg-[#06282a] border border-[#122e2a] rounded-2xl p-4 sm:p-6 md:p-8 w-full sm:max-w-md md:max-w-lg lg:max-w-2xl xl:max-w-3xl mx-auto shadow-lg'
      }
    >
      {/* Header */}
      <div className="mb-6 flex items-center gap-3">
        {!compact && (
          <img src="/images/trophy.gif" alt="Trophy" className="w-10 h-10 sm:w-12 sm:h-12" />
        )}
        <h2 className="text-2xl sm:text-3xl font-bold text-[#86f6b1] flex items-center gap-3">
          <span className="text-3xl md:text-4xl text-white">Leaderboard</span>
          <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
        </h2>
      </div>

      {loading ? (
        <div className="py-12 flex flex-col items-center justify-center">
          <div
            className="h-10 w-10 rounded-full border-4 border-white/20 border-t-[#86f6b1] animate-spin"
            aria-label="Loading leaderboard"
            role="status"
          ></div>
          <p className="mt-4 text-gray-300 font-medium">Loading leaderboard...</p>
        </div>
      ) : leaderboard && leaderboard.entries.length > 0 ? (
        <>
          {/* Current User Stats */}
          {leaderboard.userRank && leaderboard.userScore !== null && (
            <div className="bg-gradient-to-br from-[#062d2e] to-[#0a3a3b] border-2 border-[#16a085] rounded-xl p-5 mb-6 shadow-md">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-lg text-[#86f6b1] font-semibold mb-1 uppercase tracking-wide">
                    Your Ranking
                  </p>
                  <div className="flex items-center gap-3">
                    <span className="text-3xl font-bold text-[#86f6b1]">
                      #{leaderboard.userRank}
                    </span>
                    <div className="h-8 w-px bg-[#16a085]"></div>
                    <span className="text-2xl font-bold text-white">{leaderboard.userScore}</span>
                    <span className="text-lg text-gray-400">pts</span>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="text-right flex flex-col items-end">
                    <p className="text-xl font-bold text-white leading-tight">
                      {leaderboard.userUsername || 'You'}
                    </p>
                    <div className="relative w-10 h-10 rounded-full overflow-hidden ring-2 ring-white">
                      <img
                        src={
                          leaderboard.userAvatarUrl ||
                          'https://www.redditstatic.com/avatars/defaults/v2/avatar_default_1.png'
                        }
                        alt={(leaderboard.userUsername || 'You') + "'s avatar"}
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          target.style.display = 'none';
                          const fallback = target.nextElementSibling as HTMLElement;
                          if (fallback) fallback.style.display = 'flex';
                        }}
                      />
                      <div className="absolute inset-0 hidden items-center justify-center bg-[#0b3a3b] text-white font-bold">
                        {(leaderboard.userUsername || 'You').substring(0, 2).toUpperCase()}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Leaderboard List (compact to fit top 10) */}
          <div className="space-y-1 pr-1">
            {leaderboard.entries.map((entry: LeaderboardEntry, index: number) => (
              <div
                key={entry.username}
                className={`group flex items-center justify-between p-2 rounded-xl transition-all duration-200 hover:scale-[1.01] ${
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
                <div className="flex items-center gap-3">
                  {/* User Avatar */}
                  <div
                    className={`relative w-8 h-8 rounded-full overflow-hidden ${
                      entry.rank === 1
                        ? 'ring-2 ring-yellow-400'
                        : entry.rank === 2
                          ? 'ring-2 ring-gray-400'
                          : entry.rank === 3
                            ? 'ring-2 ring-orange-400'
                            : 'ring-1 ring-[#00bf63]'
                    }`}
                  >
                    <img
                      src={entry.avatarUrl || defaultAvatar(entry.rank)}
                      alt={`${entry.username}'s avatar`}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        // Prevent infinite loop
                        if ((target as any)._fallbackApplied) {
                          // If even fallback fails, show initials block
                          target.style.display = 'none';
                          const fallback = target.nextElementSibling as HTMLElement;
                          if (fallback) fallback.style.display = 'flex';
                          return;
                        }
                        (target as any)._fallbackApplied = true;
                        target.src = defaultAvatar(entry.rank);
                      }}
                    />
                    <div
                      className={`absolute inset-0 hidden items-center justify-center font-bold text-xl ${
                        entry.rank === 1
                          ? 'bg-gradient-to-br from-yellow-400 to-yellow-600 text-black'
                          : entry.rank === 2
                            ? 'bg-gradient-to-br from-gray-300 to-gray-500 text-black'
                            : entry.rank === 3
                              ? 'bg-gradient-to-br from-orange-400 to-orange-600 text-white'
                              : 'bg-gradient-to-br from-[#00bf63] to-[#00a855] text-black'
                      }`}
                    >
                      {entry.username.substring(0, 2).toUpperCase()}
                    </div>
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <p
                        className={`font-bold text-xl leading-tight ${
                          entry.rank === 1
                            ? 'text-yellow-300'
                            : entry.rank === 2
                              ? 'text-gray-300'
                              : entry.rank === 3
                                ? 'text-orange-300'
                                : 'text-gray-200'
                        }`}
                      >
                        {entry.username}
                      </p>
                    </div>
                    {entry.rank <= 3 && (
                      <div className="flex items-center gap-2 mt-0.5">
                        <p className="text-lg leading-tight text-gray-400 font-medium">
                          {entry.rank === 1
                            ? 'Champion'
                            : entry.rank === 2
                              ? 'Runner-up'
                              : 'Third Place'}
                        </p>
                        {/* Small medal beside title */}
                        {entry.rank === 1 && (
                          <img src="/images/gold.png" alt="Gold Medal" className="w-4 h-4" />
                        )}
                        {entry.rank === 2 && (
                          <img src="/images/silver.png" alt="Silver Medal" className="w-4 h-4" />
                        )}
                        {entry.rank === 3 && (
                          <img src="/images/bronze.png" alt="Bronze Medal" className="w-4 h-4" />
                        )}
                      </div>
                    )}
                    {entry.rank > 3 && (
                      <p className="text-lg leading-tight text-gray-400 font-medium mt-0.5">Rank #{entry.rank}</p>
                    )}
                  </div>
                </div>
                <div className="text-right">
                  <span
                    className={`inline-flex items-center px-2 py-0.5 rounded-lg text-lg font-bold shadow-md ${
                      entry.rank === 1
                        ? 'bg-yellow-500 text-black'
                        : entry.rank === 2
                          ? 'bg-gray-400 text-black'
                          : entry.rank === 3
                            ? 'bg-orange-500 text-white'
                            : 'bg-[#00bf63] text-black'
                    }`}
                  >
                    {entry.score}
                  </span>
                  <p className="text-lg text-gray-400 mt-0 font-medium leading-tight">points</p>
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
