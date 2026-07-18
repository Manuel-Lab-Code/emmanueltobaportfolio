import { motion } from "framer-motion";
import { GitFork, Star, Users } from "lucide-react";
import { FiGithub } from "react-icons/fi";
import { Container } from "@/components/layout/Container";
import { SectionHeading } from "@/components/common/SectionHeading";
import { Reveal } from "@/components/common/Reveal";
import { AnimatedCounter } from "@/components/common/AnimatedCounter";
import { useGithubStats } from "@/hooks/useGithubStats";
import { profile } from "@/data/socials";

const LANG_COLORS: Record<string, string> = {
  JavaScript: "#EAB308",
  TypeScript: "#00F5D4",
  HTML: "#FF6B35",
  CSS: "#B388FF",
  Vue: "#00F5D4",
  Python: "#EAB308",
};

export function GithubStats() {
  const { stats, loading, isLive } = useGithubStats();
  const maxActivity = stats ? Math.max(...stats.monthlyActivity.map((m) => m.count), 1) : 1;
  const totalLangs = stats?.topLanguages.reduce((s, l) => s + l.count, 0) ?? 1;

  return (
    <section id="github-stats" className="section-pad relative overflow-hidden bg-bg-alt">
      <div className="pointer-events-none absolute -right-40 top-1/3 h-96 w-96 rounded-full bg-cyan/5 blur-[120px]" />

      <Container className="relative">
        <SectionHeading
          eyebrow="GitHub Activity"
          title="Live from GitHub."
          description="Pulled directly from the GitHub API in your browser right now."
        />

        <div className="mt-6 flex items-center gap-2">
          <span className={`relative flex h-2 w-2`}>
            {isLive && (
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan opacity-75" />
            )}
            <span className={`relative inline-flex h-2 w-2 rounded-full ${isLive ? "bg-cyan" : "bg-ink-muted"}`} />
          </span>
          <span className="font-mono text-xs text-ink-muted">
            {loading ? "Fetching live data..." : isLive ? "Live data from api.github.com" : "Showing cached snapshot"}
          </span>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-5 lg:grid-cols-3">
          <Reveal className="lg:col-span-1">
            <div className="glass flex h-full flex-col justify-between gap-6 rounded-3xl p-7">
              <div className="grid grid-cols-2 gap-5">
                <StatBlock icon={FiGithub} label="Repositories" value={stats?.publicRepos ?? 0} />
                <StatBlock icon={Users} label="Followers" value={stats?.followers ?? 0} />
                <StatBlock icon={Star} label="Total Stars" value={stats?.totalStars ?? 0} />
                <StatBlock icon={GitFork} label="Following" value={stats?.following ?? 0} />
              </div>
              <a
                href={profile.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-center gap-2 rounded-full border border-border py-3 text-sm font-medium text-ink transition-colors hover:border-cyan/50 hover:text-cyan"
              >
                <FiGithub size={15} />
                @{profile.handle}
              </a>
            </div>
          </Reveal>

          <Reveal delay={0.08} className="lg:col-span-1">
            <div className="glass h-full rounded-3xl p-7">
              <p className="mb-5 font-mono text-xs uppercase tracking-widest text-ink-muted">
                Top Languages
              </p>
              <div className="flex flex-col gap-4">
                {stats?.topLanguages.map((lang) => (
                  <div key={lang.name}>
                    <div className="mb-1.5 flex items-center justify-between text-sm">
                      <span className="text-ink-soft">{lang.name}</span>
                      <span className="font-mono text-xs text-ink-muted">
                        {Math.round((lang.count / totalLangs) * 100)}%
                      </span>
                    </div>
                    <div className="h-1.5 w-full overflow-hidden rounded-full bg-surface-2">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${(lang.count / totalLangs) * 100}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="h-full rounded-full"
                        style={{ background: LANG_COLORS[lang.name] ?? "var(--cyan)" }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.16} className="lg:col-span-1">
            <div className="glass flex h-full flex-col rounded-3xl p-7">
              <p className="mb-6 font-mono text-xs uppercase tracking-widest text-ink-muted">
                Repository Activity — Last 6 Months
              </p>
              <div className="flex h-40 items-end justify-between gap-2">
                {stats?.monthlyActivity.map((m) => (
                  <div key={m.label} className="flex h-full flex-1 flex-col items-center justify-end gap-2">
                    <motion.div
                      initial={{ height: 4 }}
                      whileInView={{
                        height: Math.max((m.count / maxActivity) * 128, 6),
                      }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.7, ease: "easeOut" }}
                      className="w-full max-w-8 rounded-t-md bg-gradient-to-t from-cyan/40 to-cyan"
                    />
                    <span className="font-mono text-[10px] text-ink-muted">{m.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}

function StatBlock({
  icon: Icon,
  label,
  value,
}: {
  icon: React.ComponentType<{ size?: number }>;
  label: string;
  value: number;
}) {
  return (
    <div>
      <Icon size={16} />
      <AnimatedCounter value={value} className="mt-2 block font-display text-2xl font-bold text-ink" />
      <p className="mt-0.5 text-xs text-ink-muted">{label}</p>
    </div>
  );
}
