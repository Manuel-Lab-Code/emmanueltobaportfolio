import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Container } from "@/components/layout/Container";
import { SectionHeading } from "@/components/common/SectionHeading";
import { Reveal } from "@/components/common/Reveal";
import { skillGroups } from "@/data/skills";
import { cn } from "@/utils/cn";

const ORBIT_RADIUS = 42; // percentage of container

export function Skills() {
  const [activeGroup, setActiveGroup] = useState(skillGroups[0].id);
  const [hovered, setHovered] = useState<string | null>(null);
  const group = skillGroups.find((g) => g.id === activeGroup) ?? skillGroups[0];

  return (
    <section id="skills" className="section-pad relative overflow-hidden">
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[40rem] w-[40rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-lavender/5 blur-[140px]" />

      <Container className="relative">
        <SectionHeading
          eyebrow="Skills"
          title="A toolkit built for shipping."
          description="Grouped by discipline — hover any icon to see proficiency. Switch categories to see the orbit shift."
        />

        <div className="mt-12 flex flex-wrap justify-center gap-2 sm:mt-16">
          {skillGroups.map((g) => (
            <button
              key={g.id}
              onClick={() => setActiveGroup(g.id)}
              className={cn(
                "rounded-full border px-4 py-2 font-mono text-xs uppercase tracking-wide transition-colors sm:text-sm",
                activeGroup === g.id
                  ? "border-cyan bg-cyan/10 text-cyan"
                  : "border-border text-ink-muted hover:text-ink"
              )}
            >
              {g.label}
            </button>
          ))}
        </div>

        <Reveal delay={0.1}>
          <div className="relative mx-auto mt-16 aspect-square w-full max-w-[26rem] sm:max-w-[32rem]">
            <motion.div
              className="absolute inset-[8%] rounded-full border border-dashed border-border"
              animate={{ rotate: 360 }}
              transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
            />

            <div className="glass noise absolute left-1/2 top-1/2 flex h-28 w-28 -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center rounded-full text-center sm:h-36 sm:w-36">
              <span className="font-display text-2xl font-bold text-gradient sm:text-3xl">
                {group.skills.length}
              </span>
              <span className="mt-1 px-3 font-mono text-[10px] uppercase tracking-widest text-ink-muted">
                {group.label}
              </span>
            </div>

            <AnimatePresence mode="wait">
              <motion.div key={group.id} className="absolute inset-0">
                {group.skills.map((skill, i) => {
                  const angle = (360 / group.skills.length) * i - 90;
                  const rad = (angle * Math.PI) / 180;
                  const left = 50 + ORBIT_RADIUS * Math.cos(rad);
                  const top = 50 + ORBIT_RADIUS * Math.sin(rad);
                  const isHovered = hovered === skill.name;

                  return (
                    <motion.div
                      key={skill.name}
                      className="absolute z-10"
                      style={{ left: `${left}%`, top: `${top}%` }}
                      initial={{ opacity: 0, scale: 0.3 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.3 }}
                      transition={{ duration: 0.4, delay: i * 0.04, ease: [0.16, 1, 0.3, 1] }}
                    >
                      <motion.button
                        onMouseEnter={() => setHovered(skill.name)}
                        onMouseLeave={() => setHovered(null)}
                        whileHover={{ scale: 1.25 }}
                        animate={{ y: [0, -6, 0] }}
                        transition={{
                          y: { duration: 3 + (i % 3), repeat: Infinity, ease: "easeInOut", delay: i * 0.15 },
                        }}
                        className="glass flex h-12 w-12 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-2xl text-xl text-ink shadow-lg sm:h-16 sm:w-16 sm:text-2xl"
                        style={{
                          boxShadow: isHovered ? `0 0 24px -4px ${group.accent}` : undefined,
                          color: isHovered ? group.accent : undefined,
                        }}
                      >
                        <skill.icon />
                      </motion.button>

                      <AnimatePresence>
                        {isHovered && (
                          <motion.div
                            initial={{ opacity: 0, y: 4, scale: 0.9 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: 4, scale: 0.9 }}
                            className="glass absolute left-1/2 top-full z-20 mt-2 w-36 -translate-x-1/2 rounded-xl p-3 text-center"
                          >
                            <p className="text-xs font-semibold text-ink">{skill.name}</p>
                            <div className="mt-2 h-1.5 w-full overflow-hidden rounded-full bg-surface-2">
                              <motion.div
                                initial={{ width: 0 }}
                                animate={{ width: `${skill.level}%` }}
                                transition={{ duration: 0.6, ease: "easeOut" }}
                                className="h-full rounded-full"
                                style={{ background: group.accent }}
                              />
                            </div>
                            <p className="mt-1 font-mono text-[10px] text-ink-muted">{skill.level}%</p>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </motion.div>
                  );
                })}
              </motion.div>
            </AnimatePresence>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
