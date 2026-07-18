import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { SectionHeading } from "@/components/common/SectionHeading";
import { Reveal } from "@/components/common/Reveal";
import { services } from "@/data/services";
import { useSmoothScrollTo } from "@/context/LenisContext";

export function Services() {
  const scrollTo = useSmoothScrollTo();

  return (
    <section id="services" className="section-pad relative bg-bg-alt">
      <Container>
        <SectionHeading
          eyebrow="Services"
          title="What I can build for you."
          description="Premium engineering, end to end — from a landing page that converts to a full-stack platform that scales."
        />

        <div className="mt-14 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service, i) => (
            <Reveal key={service.id} delay={(i % 4) * 0.06}>
              <motion.button
                onClick={() => scrollTo("#contact")}
                whileHover={{ y: -6 }}
                transition={{ type: "spring", stiffness: 300, damping: 22 }}
                className="glass group flex h-full w-full flex-col items-start rounded-2xl p-6 text-left"
              >
                <div
                  className="flex h-11 w-11 items-center justify-center rounded-xl transition-transform duration-300 group-hover:scale-110"
                  style={{ background: `color-mix(in oklab, ${service.accent} 16%, transparent)`, color: service.accent }}
                >
                  <service.icon size={20} />
                </div>
                <h3 className="mt-5 font-display text-base font-semibold text-ink">
                  {service.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-muted">
                  {service.description}
                </p>
                <span className="mt-4 flex items-center gap-1 font-mono text-xs text-ink-muted transition-colors group-hover:text-cyan">
                  Get started
                  <ArrowUpRight size={12} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </span>
              </motion.button>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
