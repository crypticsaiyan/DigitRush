import { useState, useEffect } from 'react';
import type {
  DailyChallengeLeaderboardResponse,
  DailyChallengeLeaderboardEntry,
} from '../../shared/types/api';

interface DailyChallengeLeaderboardProps {
  onClose?: () => void;
  refreshTrigger?: number; // Optional prop to trigger refresh
}

export const DailyChallengeLeaderboard = ({ onClose, refreshTrigger }: DailyChallengeLeaderboardProps) => {
  const [entries, setEntries] = useState<DailyChallengeLeaderboardEntry[]>([]);
  const [userRank, setUserRank] = useState<number | null>(null);
  const [userScore, setUserScore] = useState<number | null>(null);
  const [userTime, setUserTime] = useState<number | null>(null);
  const [userUsername, setUserUsername] = useState<string | null>(null);
  const [userAvatarUrl, setUserAvatarUrl] = useState<string | null | undefined>(null);
  const [date, setDate] = useState<string>('');
  const [loading, setLoading] = useState(true);

  // Fallback Reddit default avatar based on rank (1..8 cycling)
  const defaultAvatar = (rank: number) =>
    `https://www.redditstatic.com/avatars/defaults/v2/avatar_default_${(rank % 8) + 1}.png`;

  const formatTime = (ms: number) => {
    const seconds = Math.floor(ms / 1000);
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`;
  };

  const formatDate = (dateStr: string) => {
    const date = new Date(dateStr);
    return date.toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  const fetchLeaderboard = async () => {
    setLoading(true);
    try {
      // Get today's date in client's timezone
      const today = new Date();
      const year = today.getFullYear();
      const month = String(today.getMonth() + 1).padStart(2, '0');
      const day = String(today.getDate()).padStart(2, '0');
      const todayDate = `${year}-${month}-${day}`;

      console.log('[CLIENT] Fetching daily leaderboard for date:', todayDate);
      const res = await fetch(`/api/daily-challenge/leaderboard?date=${todayDate}`);
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      const data: DailyChallengeLeaderboardResponse = await res.json();
      
      console.log('[CLIENT] Daily leaderboard response:', data);

      setEntries(data.entries || []);
      setUserRank(data.userRank ?? null);
      setUserScore(data.userScore ?? null);
      setUserTime(data.userTime ?? null);
      setUserUsername(data.userUsername ?? null);
      setUserAvatarUrl(data.userAvatarUrl ?? null);
      setDate(data.date);
    } catch (err) {
      console.error('Failed to fetch daily challenge leaderboard:', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchLeaderboard();
  }, [refreshTrigger]); // Now depends on refreshTrigger

  // Also fetch when component mounts (in case refreshTrigger is 0)
  useEffect(() => {
    if (refreshTrigger === undefined) {
      fetchLeaderboard();
    }
  }, []);

  return (
    <div className="bg-[#06282a] border border-[#122e2a] rounded-2xl w-full sm:max-w-md md:max-w-lg lg:max-w-2xl xl:max-w-3xl mx-auto shadow-lg flex flex-col h-[80vh] max-h-[600px] relative">
      {/* Fixed Header */}
      <div className="p-4 sm:p-6 md:p-8 pb-4 flex-shrink-0">
        <div className="flex items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <img src="/images/trophy.gif" alt="Trophy" className="w-12 h-12 sm:w-14 sm:h-14" />
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-[#86f6b1] flex items-center gap-3">
                <span className="text-3xl md:text-4xl text-white">Daily Challenge</span>
                <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
              </h2>
              <p className="text-lg text-gray-300">{date ? formatDate(date) : 'Today'}</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={fetchLeaderboard}
              disabled={loading}
              aria-label="Refresh leaderboard"
              className="rounded-full p-1.5 sm:p-2 md:p-2 lg:p-2 bg-white/10 hover:bg-white/20 transition-all duration-200 hover:scale-110 active:scale-95 flex-shrink-0 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <svg
                className={`w-4 h-4 sm:w-4 sm:h-4 md:w-5 md:h-5 lg:w-5 lg:h-5 text-white ${loading ? 'animate-spin' : ''}`}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2.5}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
              </svg>
            </button>
            {onClose && (
              <button
                onClick={onClose}
                aria-label="Close leaderboard"
                className="rounded-full p-1.5 sm:p-2 md:p-2 lg:p-2 bg-white/10 hover:bg-white/20 transition-all duration-200 hover:scale-110 active:scale-95 flex-shrink-0"
              >
                <svg
                  className="w-4 h-4 sm:w-4 sm:h-4 md:w-5 md:h-5 lg:w-5 lg:h-5 text-white"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2.5}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            )}
          </div>
        </div>
      </div>

      {loading ? (
        <div className="flex-1 flex flex-col items-center justify-center">
          <div
            className="h-10 w-10 rounded-full border-4 border-white/20 border-t-[#86f6b1] animate-spin"
            aria-label="Loading leaderboard"
            role="status"
          ></div>
          <p className="mt-4 text-gray-300 font-medium">Loading leaderboard...</p>
        </div>
      ) : entries && entries.length > 0 ? (
        <>
          {/* Fixed Current User Stats */}
          {userScore !== null && userTime !== null && (
            <div className="px-4 sm:px-6 md:px-8 pb-4 flex-shrink-0">
              <div className="bg-gradient-to-br from-[#062d2e] to-[#0a3a3b] border-2 border-[#16a085] rounded-xl p-5 shadow-md">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-lg text-[#86f6b1] font-semibold mb-1 uppercase tracking-wide">
                      Your Ranking
                    </p>
                    <div className="flex items-center gap-3">
                      <span className="text-3xl font-bold text-[#86f6b1]">#{userRank || 'N/A'}</span>
                      <div className="h-8 w-px bg-[#16a085]"></div>
                      <span className="text-2xl font-bold text-white">{userScore}/5</span>
                      <div className="h-8 w-px bg-[#16a085]"></div>
                      <span className="text-xl font-bold text-white">{formatTime(userTime)}</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="text-right flex flex-col items-end">
                      <p className="text-xl font-bold text-white leading-tight">
                        {userUsername || 'You'}
                      </p>
                      <div className="relative w-10 h-10 rounded-full overflow-hidden ring-2 ring-white">
                        <img
                          src={
                            userAvatarUrl ||
                            'https://www.redditstatic.com/avatars/defaults/v2/avatar_default_1.png'
                          }
                          alt={(userUsername || 'You') + "'s avatar"}
                          className="w-full h-full object-cover"
                          onError={(e) => {
                            const target = e.target as HTMLImageElement;
                            target.style.display = 'none';
                            const fallback = target.nextElementSibling as HTMLElement;
                            if (fallback) fallback.style.display = 'flex';
                          }}
                        />
                        <div className="absolute inset-0 hidden items-center justify-center bg-[#0b3a3b] text-white font-bold">
                          {(userUsername || 'You').substring(0, 2).toUpperCase()}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Scrollable Leaderboard List */}
          <div className="flex-1 overflow-y-auto px-4 sm:px-6 md:px-8 pb-4">
            <div className="space-y-1 pr-1">
              {entries.map((entry: DailyChallengeLeaderboardEntry, index: number) => (
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
                          if ((target as any)._fallbackApplied) {
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
                      <div className="flex items-center gap-2 mt-0.5">
                        <p className="text-lg leading-tight text-gray-400 font-medium">
                          Rank #{entry.rank} • {entry.score}/5 • {formatTime(entry.completionTime)}
                        </p>
                        {/* Medal beside info */}
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
                      {formatTime(entry.completionTime)}
                    </span>
                    <p className="text-lg text-gray-400 mt-0 font-medium leading-tight">
                      {entry.score === 5 ? 'Perfect!' : `${entry.score}/5 correct`}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </>
      ) : (
        <div className="flex-1 flex flex-col items-center justify-center">
          <div className="flex justify-center mb-4">
            <img src="/images/trophy.gif" alt="Trophy" className="w-20 h-20 opacity-50" />
          </div>
          <p className="text-xl text-gray-300 mb-2 font-semibold">No attempts yet!</p>
          <p className="text-sm text-gray-400">Be the first to complete today's challenge.</p>
        </div>
      )}
    </div>
  );
};
