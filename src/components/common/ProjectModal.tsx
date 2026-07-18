import * as Dialog from "@radix-ui/react-dialog";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, Check, X } from "lucide-react";
import { FiGithub } from "react-icons/fi";
import type { Project } from "@/data/projects";
import { useCursor } from "@/context/CursorContext";

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export function ProjectModal({ project, onClose }: ProjectModalProps) {
  const { setCursor, resetCursor } = useCursor();

  return (
    <Dialog.Root open={!!project} onOpenChange={(open) => !open && onClose()}>
      <AnimatePresence>
        {project && (
          <Dialog.Portal forceMount>
            <Dialog.Overlay asChild forceMount>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 z-[110] bg-black/70 backdrop-blur-sm"
              />
            </Dialog.Overlay>
            <Dialog.Content asChild forceMount aria-describedby={undefined}>
              <motion.div
                initial={{ opacity: 0, y: 24, scale: 0.97 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 24, scale: 0.97 }}
                transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                className="glass fixed left-1/2 top-1/2 z-[111] max-h-[86vh] w-[92vw] max-w-2xl -translate-x-1/2 -translate-y-1/2 overflow-y-auto rounded-3xl border border-border p-0"
              >
                <div
                  className="relative flex h-40 items-end p-6 sm:h-48"
                  style={{
                    backgroundImage: `linear-gradient(135deg, ${project.gradient[0]}, ${project.gradient[1]})`,
                  }}
                >
                  <Dialog.Close
                    onMouseEnter={() => setCursor("link")}
                    onMouseLeave={resetCursor}
                    aria-label="Close"
                    className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full bg-black/30 text-white backdrop-blur-sm"
                  >
                    <X size={16} />
                  </Dialog.Close>
                  <div>
                    <Dialog.Title className="font-display text-2xl font-bold text-white sm:text-3xl">
                      {project.title}
                    </Dialog.Title>
                    <p className="mt-1 text-sm text-white/80">{project.tagline}</p>
                  </div>
                </div>

                <div className="p-6 sm:p-8">
                  <div className="flex flex-wrap items-center gap-4 text-xs text-ink-muted">
                    <span>{project.role}</span>
                    <span className="h-1 w-1 rounded-full bg-ink-muted" />
                    <span>{project.year}</span>
                    <span className="h-1 w-1 rounded-full bg-ink-muted" />
                    <span>{project.category}</span>
                  </div>

                  <p className="mt-5 leading-relaxed text-ink-soft">{project.description}</p>

                  <div className="mt-6">
                    <p className="mb-3 font-mono text-xs uppercase tracking-widest text-cyan">
                      Highlights
                    </p>
                    <ul className="space-y-2.5">
                      {project.highlights.map((h) => (
                        <li key={h} className="flex items-start gap-2.5 text-sm text-ink-soft">
                          <Check size={15} className="mt-0.5 shrink-0 text-cyan" />
                          {h}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-6 flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-full border border-border px-3 py-1 font-mono text-xs text-ink-soft"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="mt-8 flex flex-wrap gap-3">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                      onMouseEnter={() => setCursor("link")}
                      onMouseLeave={resetCursor}
                      className="flex items-center gap-2 rounded-full border border-border px-5 py-2.5 text-sm font-medium text-ink transition-colors hover:border-cyan/50 hover:text-cyan"
                    >
                      <FiGithub size={15} />
                      View Code
                    </a>
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noreferrer"
                        onMouseEnter={() => setCursor("link")}
                        onMouseLeave={resetCursor}
                        className="glow-cyan flex items-center gap-2 rounded-full bg-cyan px-5 py-2.5 text-sm font-semibold text-[#05070d]"
                      >
                        Live Demo
                        <ArrowUpRight size={15} />
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            </Dialog.Content>
          </Dialog.Portal>
        )}
      </AnimatePresence>
    </Dialog.Root>
  );
}
