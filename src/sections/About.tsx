import { motion } from "framer-motion";
import { MapPin, Sparkles } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { SectionHeading } from "@/components/common/SectionHeading";
import { Reveal } from "@/components/common/Reveal";
import { AnimatedCounter } from "@/components/common/AnimatedCounter";
import { counters, philosophy } from "@/data/experience";
import { profile } from "@/data/socials";

export function About() {
  return (
    <section id="about" className="section-pad relative bg-bg-alt">
      <Container>
        <SectionHeading
          eyebrow="About Me"
          title="Engineering interfaces people actually enjoy using."
        />

        <div className="mt-16 grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <Reveal>
              <div className="glass noise relative overflow-hidden rounded-3xl p-8 sm:p-10">
                <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-cyan/10 blur-3xl" />
                <p className="flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-cyan">
                  <MapPin size={13} />
                  {profile.location}
                </p>
                <p className="mt-4 text-lg leading-relaxed text-ink-soft sm:text-xl">
                  I'm a full-stack developer who leans frontend — I care about
                  the pixel-level details as much as the architecture
                  underneath them. Every project on this page was built for a
                  real user: students checking grades, a business taking
                  orders, or a founder validating an idea.
                </p>
                <p className="mt-4 text-base leading-relaxed text-ink-muted">
                  I started with vanilla JavaScript, moved into React and
                  Node.js, and now build multi-tenant platforms with proper
                  auth, data isolation, and admin tooling — not just landing
                  pages. I'm based in Lagos, Nigeria, and work with clients
                  and teams worldwide.
                </p>
              </div>
            </Reveal>

            <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-4">
              {counters.map((counter, i) => (
                <Reveal key={counter.label} delay={0.1 + i * 0.06}>
                  <div className="glass rounded-2xl px-4 py-6 text-center">
                    <AnimatedCounter
                      value={counter.value}
                      suffix={counter.suffix}
                      className="block font-display text-3xl font-bold text-gradient sm:text-4xl"
                    />
                    <p className="mt-2 text-xs text-ink-muted">{counter.label}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-4 lg:col-span-5">
            {philosophy.map((item, i) => (
              <Reveal key={item.title} delay={0.1 + i * 0.08}>
                <motion.div
                  whileHover={{ x: 6 }}
                  transition={{ type: "spring", stiffness: 300, damping: 24 }}
                  className="glass group relative overflow-hidden rounded-2xl p-6"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-surface-2 text-cyan transition-colors group-hover:bg-cyan group-hover:text-[#05070d]">
                      <Sparkles size={16} />
                    </div>
                    <div>
                      <h3 className="font-display text-lg font-semibold text-ink">
                        {item.title}
                      </h3>
                      <p className="mt-1.5 text-sm leading-relaxed text-ink-muted">
                        {item.body}
                      </p>
                    </div>
                  </div>
                </motion.div>
              </Reveal>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
