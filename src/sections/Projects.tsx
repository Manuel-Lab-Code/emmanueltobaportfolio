import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Search, X } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { SectionHeading } from "@/components/common/SectionHeading";
import { ProjectCard } from "@/components/common/ProjectCard";
import { ProjectModal } from "@/components/common/ProjectModal";
import { projects, projectCategories, type Project } from "@/data/projects";
import { cn } from "@/utils/cn";

export function Projects() {
  const [category, setCategory] = useState<string>("All");
  const [query, setQuery] = useState("");
  const [activeProject, setActiveProject] = useState<Project | null>(null);

  const filtered = useMemo(() => {
    return projects.filter((p) => {
      const matchesCategory = category === "All" || p.category === category;
      const q = query.trim().toLowerCase();
      const matchesQuery =
        q.length === 0 ||
        p.title.toLowerCase().includes(q) ||
        p.tagline.toLowerCase().includes(q) ||
        p.tech.some((t) => t.toLowerCase().includes(q));
      return matchesCategory && matchesQuery;
    });
  }, [category, query]);

  return (
    <section id="projects" className="section-pad relative bg-bg-alt">
      <Container>
        <SectionHeading
          eyebrow="Selected Work"
          title="Real projects, real users."
          description="Pulled straight from my GitHub — production apps, client sites, and focused practice builds."
        />

        <div className="mt-10 flex flex-col gap-4 sm:mt-14 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-wrap gap-2">
            {projectCategories.map((c) => (
              <button
                key={c}
                onClick={() => setCategory(c)}
                className={cn(
                  "rounded-full border px-4 py-2 text-xs font-medium transition-colors sm:text-sm",
                  category === c
                    ? "border-cyan bg-cyan/10 text-cyan"
                    : "border-border text-ink-muted hover:text-ink"
                )}
              >
                {c}
              </button>
            ))}
          </div>

          <div className="glass flex w-full items-center gap-2 rounded-full px-4 py-2.5 sm:w-72">
            <Search size={15} className="text-ink-muted" />
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search projects or tech..."
              className="w-full bg-transparent text-sm text-ink placeholder:text-ink-muted focus:outline-none"
            />
            {query && (
              <button onClick={() => setQuery("")} aria-label="Clear search">
                <X size={14} className="text-ink-muted" />
              </button>
            )}
          </div>
        </div>

        <motion.div
          layout
          className="mt-10 grid grid-cols-1 gap-5 sm:mt-12 sm:grid-cols-2 lg:grid-cols-3"
        >
          <AnimatePresence mode="popLayout">
            {filtered.map((project, i) => (
              <ProjectCard
                key={project.id}
                project={project}
                onOpen={() => setActiveProject(project)}
                large={project.featured && i === 0}
              />
            ))}
          </AnimatePresence>
        </motion.div>

        {filtered.length === 0 && (
          <div className="mt-16 text-center text-ink-muted">
            No projects match your search. Try a different filter.
          </div>
        )}
      </Container>

      <ProjectModal project={activeProject} onClose={() => setActiveProject(null)} />
    </section>
  );
}
