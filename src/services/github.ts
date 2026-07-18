const GITHUB_USERNAME = "Manuel-Lab-Code";
const API_BASE = "https://api.github.com";

export interface GithubStats {
  publicRepos: number;
  followers: number;
  following: number;
  totalStars: number;
  topLanguages: { name: string; count: number }[];
  monthlyActivity: { label: string; count: number }[];
  avatarUrl: string;
}

interface GithubUserResponse {
  public_repos: number;
  followers: number;
  following: number;
  avatar_url: string;
}

interface GithubRepoResponse {
  stargazers_count: number;
  language: string | null;
  fork: boolean;
  pushed_at: string;
}

function computeMonthlyActivity(repos: GithubRepoResponse[]) {
  const now = new Date();
  const months = Array.from({ length: 6 }, (_, i) => {
    const d = new Date(now.getFullYear(), now.getMonth() - (5 - i), 1);
    return { key: `${d.getFullYear()}-${d.getMonth()}`, label: d.toLocaleString("en-US", { month: "short" }) };
  });

  const counts = new Map(months.map((m) => [m.key, 0]));
  for (const repo of repos) {
    const d = new Date(repo.pushed_at);
    const key = `${d.getFullYear()}-${d.getMonth()}`;
    if (counts.has(key)) counts.set(key, (counts.get(key) ?? 0) + 1);
  }

  return months.map((m) => ({ label: m.label, count: counts.get(m.key) ?? 0 }));
}

export async function fetchGithubStats(): Promise<GithubStats | null> {
  try {
    const [userRes, reposRes] = await Promise.all([
      fetch(`${API_BASE}/users/${GITHUB_USERNAME}`),
      fetch(`${API_BASE}/users/${GITHUB_USERNAME}/repos?per_page=100`),
    ]);

    if (!userRes.ok || !reposRes.ok) return null;

    const user: GithubUserResponse = await userRes.json();
    const repos: GithubRepoResponse[] = await reposRes.json();

    const totalStars = repos.reduce((sum, r) => sum + (r.stargazers_count || 0), 0);

    const languageCounts = new Map<string, number>();
    for (const repo of repos) {
      if (repo.fork || !repo.language) continue;
      languageCounts.set(repo.language, (languageCounts.get(repo.language) || 0) + 1);
    }

    const topLanguages = Array.from(languageCounts.entries())
      .map(([name, count]) => ({ name, count }))
      .sort((a, b) => b.count - a.count)
      .slice(0, 6);

    return {
      publicRepos: user.public_repos,
      followers: user.followers,
      following: user.following,
      totalStars,
      topLanguages,
      monthlyActivity: computeMonthlyActivity(repos),
      avatarUrl: user.avatar_url,
    };
  } catch {
    return null;
  }
}

export const FALLBACK_STATS: GithubStats = {
  publicRepos: 30,
  followers: 12,
  following: 19,
  totalStars: 4,
  topLanguages: [
    { name: "HTML", count: 14 },
    { name: "JavaScript", count: 8 },
    { name: "CSS", count: 3 },
    { name: "Vue", count: 1 },
    { name: "TypeScript", count: 1 },
  ],
  monthlyActivity: [
    { label: "Feb", count: 1 },
    { label: "Mar", count: 0 },
    { label: "Apr", count: 2 },
    { label: "May", count: 1 },
    { label: "Jun", count: 3 },
    { label: "Jul", count: 4 },
  ],
  avatarUrl: `https://github.com/${GITHUB_USERNAME}.png`,
};
