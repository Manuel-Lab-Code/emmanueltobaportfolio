import { useEffect, useState } from "react";
import { fetchGithubStats, FALLBACK_STATS, type GithubStats } from "@/services/github";

export function useGithubStats() {
  const [stats, setStats] = useState<GithubStats | null>(null);
  const [loading, setLoading] = useState(true);
  const [isLive, setIsLive] = useState(false);

  useEffect(() => {
    let cancelled = false;
    fetchGithubStats().then((result) => {
      if (cancelled) return;
      if (result) {
        setStats(result);
        setIsLive(true);
      } else {
        setStats(FALLBACK_STATS);
        setIsLive(false);
      }
      setLoading(false);
    });
    return () => {
      cancelled = true;
    };
  }, []);

  return { stats, loading, isLive };
}
