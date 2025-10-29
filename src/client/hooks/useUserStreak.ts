import { useState, useEffect } from 'react';
import type { UserStreakResponse } from '../../shared/types/api';

export const useUserStreak = () => {
  const [streak, setStreak] = useState<number>(0);
  const [lastPlayDate, setLastPlayDate] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchStreak = async () => {
    try {
      setLoading(true);
      setError(null);
      const res = await fetch('/api/user/streak');
      if (!res.ok) {
        throw new Error(`HTTP ${res.status}`);
      }
      const data: UserStreakResponse = await res.json();
      setStreak(data.currentStreak);
      setLastPlayDate(data.lastPlayDate);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to fetch streak');
      setStreak(0);
      setLastPlayDate(null);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchStreak();
  }, []);

  // Refresh streak when component becomes visible (e.g., after returning from a game)
  useEffect(() => {
    const handleVisibilityChange = () => {
      if (!document.hidden) {
        fetchStreak();
      }
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);
    return () => document.removeEventListener('visibilitychange', handleVisibilityChange);
  }, []);

  return {
    streak,
    lastPlayDate,
    loading,
    error,
    refetch: fetchStreak,
  };
};
