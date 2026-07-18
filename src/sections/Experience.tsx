import { motion } from "framer-motion";
import { Container } from "@/components/layout/Container";
import { SectionHeading } from "@/components/common/SectionHeading";
import { Reveal } from "@/components/common/Reveal";
import { experience } from "@/data/experience";

export function Experience() {
  return (
    <section id="experience" className="section-pad relative">
      <Container>
        <SectionHeading
          eyebrow="Experience"
          title="How I got here."
          description="Freelance engagements and self-directed projects that shaped how I build."
        />

        <div className="relative mt-16 pl-10 sm:pl-14">
          <div className="absolute bottom-0 left-[19px] top-2 w-px bg-gradient-to-b from-cyan via-lavender to-transparent sm:left-[27px]" />

          <div className="flex flex-col gap-12">
            {experience.map((item, i) => (
              <Reveal key={item.id} delay={i * 0.1}>
                <div className="relative">
                  <div className="absolute -left-10 top-1 flex h-10 w-10 items-center justify-center rounded-full border border-border bg-surface font-display text-sm font-bold text-cyan sm:-left-14 sm:h-14 sm:w-14 sm:text-base">
                    {item.org[0]}
                  </div>

                  <motion.div
                    whileHover={{ y: -4 }}
                    transition={{ type: "spring", stiffness: 300, damping: 24 }}
                    className="glass rounded-2xl p-6 sm:p-7"
                  >
                    <div className="flex flex-wrap items-start justify-between gap-3">
                      <div>
                        <h3 className="font-display text-xl font-semibold text-ink">
                          {item.role}
                        </h3>
                        <p className="mt-1 text-sm font-medium text-cyan">{item.org}</p>
                      </div>
                      <div className="text-right">
                        <p className="font-mono text-xs text-ink-muted">{item.period}</p>
                        <p className="mt-1 text-xs text-ink-muted">{item.location}</p>
                      </div>
                    </div>

                    <p className="mt-4 text-sm leading-relaxed text-ink-soft">
                      {item.summary}
                    </p>

                    <ul className="mt-4 space-y-2">
                      {item.achievements.map((a) => (
                        <li key={a} className="flex gap-2 text-sm text-ink-muted">
                          <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-cyan" />
                          {a}
                        </li>
                      ))}
                    </ul>

                    <div className="mt-5 flex flex-wrap gap-2">
                      {item.tech.map((t) => (
                        <span
                          key={t}
                          className="rounded-full border border-border px-2.5 py-1 font-mono text-[10px] text-ink-soft"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
