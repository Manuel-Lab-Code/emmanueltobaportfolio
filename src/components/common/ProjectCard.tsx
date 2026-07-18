import { motion } from "framer-motion";
import { ArrowUpRight, Star, GitCommitHorizontal, Maximize2 } from "lucide-react";
import { FiGithub } from "react-icons/fi";
import type { Project } from "@/data/projects";
import { useCursor } from "@/context/CursorContext";
import { cn } from "@/utils/cn";

interface ProjectCardProps {
  project: Project;
  onOpen: () => void;
  large?: boolean;
}

export function ProjectCard({ project, onOpen, large }: ProjectCardProps) {
  const { setCursor, resetCursor } = useCursor();

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -12 }}
      transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
      className={cn(
        "group glass relative flex flex-col overflow-hidden rounded-3xl",
        large && "lg:col-span-2"
      )}
    >
      <button
        onClick={onOpen}
        onMouseEnter={() => setCursor("view", "View")}
        onMouseLeave={resetCursor}
        className={cn(
          "relative flex items-end overflow-hidden text-left",
          large ? "h-56 sm:h-64" : "h-44 sm:h-48"
        )}
        style={{
          backgroundImage: `linear-gradient(135deg, ${project.gradient[0]}, ${project.gradient[1]})`,
        }}
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.25),transparent_55%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
        <motion.div
          className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/25 to-transparent"
          animate={{ translateX: ["-100%", "180%"] }}
          transition={{ duration: 2.4, repeat: Infinity, repeatDelay: 2, ease: "easeInOut" }}
        />
        <span className="relative m-5 select-none font-display text-4xl font-bold text-white/25 sm:text-5xl">
          {project.title
            .split(" ")
            .map((w) => w[0])
            .slice(0, 2)
            .join("")}
        </span>

        <div className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full bg-black/25 text-white opacity-0 backdrop-blur-sm transition-opacity duration-300 group-hover:opacity-100">
          <Maximize2 size={14} />
        </div>

        {project.featured && (
          <span className="absolute left-4 top-4 rounded-full bg-black/30 px-3 py-1 font-mono text-[10px] uppercase tracking-widest text-white backdrop-blur-sm">
            Featured
          </span>
        )}
      </button>

      <div className="flex flex-1 flex-col p-6">
        <div className="flex items-start justify-between gap-3">
          <div>
            <p className="font-mono text-[11px] uppercase tracking-widest text-cyan">
              {project.category}
            </p>
            <h3 className="mt-1 font-display text-xl font-semibold text-ink">
              {project.title}
            </h3>
          </div>
          <span className="whitespace-nowrap font-mono text-xs text-ink-muted">{project.year}</span>
        </div>

        <p className="mt-3 line-clamp-2 text-sm text-ink-muted">{project.tagline}</p>

        <div className="mt-4 flex flex-wrap gap-1.5">
          {project.tech.slice(0, 4).map((tech) => (
            <span
              key={tech}
              className="rounded-full border border-border px-2.5 py-1 font-mono text-[10px] text-ink-soft"
            >
              {tech}
            </span>
          ))}
          {project.tech.length > 4 && (
            <span className="rounded-full border border-border px-2.5 py-1 font-mono text-[10px] text-ink-muted">
              +{project.tech.length - 4}
            </span>
          )}
        </div>

        <div className="mt-6 flex items-center justify-between border-t border-border pt-4">
          <div className="flex items-center gap-4 text-xs text-ink-muted">
            <span className="flex items-center gap-1">
              <Star size={12} /> {project.stars}
            </span>
            <span className="flex items-center gap-1">
              <GitCommitHorizontal size={12} /> {project.commits}
            </span>
          </div>
          <div className="flex items-center gap-2">
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noreferrer"
              onMouseEnter={() => setCursor("link")}
              onMouseLeave={resetCursor}
              aria-label="View source on GitHub"
              className="flex h-8 w-8 items-center justify-center rounded-full border border-border text-ink-soft transition-colors hover:border-cyan/50 hover:text-cyan"
            >
              <FiGithub size={13} />
            </a>
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noreferrer"
                onMouseEnter={() => setCursor("link")}
                onMouseLeave={resetCursor}
                aria-label="View live demo"
                className="flex h-8 w-8 items-center justify-center rounded-full border border-border text-ink-soft transition-colors hover:border-cyan/50 hover:text-cyan"
              >
                <ArrowUpRight size={13} />
              </a>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
