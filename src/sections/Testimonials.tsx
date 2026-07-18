import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote, Star } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { SectionHeading } from "@/components/common/SectionHeading";
import { Reveal } from "@/components/common/Reveal";
import { testimonials } from "@/data/testimonials";
import { cn } from "@/utils/cn";

export function Testimonials() {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    const timer = setInterval(() => {
      setDirection(1);
      setIndex((i) => (i + 1) % testimonials.length);
    }, 5500);
    return () => clearInterval(timer);
  }, [paused]);

  function go(next: number) {
    setDirection(next > index ? 1 : -1);
    setIndex((next + testimonials.length) % testimonials.length);
  }

  const current = testimonials[index];

  return (
    <section
      id="testimonials"
      className="section-pad relative"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <Container>
        <SectionHeading
          eyebrow="Testimonials"
          title="Kind words from collaborators."
          align="center"
        />

        <Reveal delay={0.1} className="mx-auto mt-14 max-w-2xl">
          <div className="relative min-h-[19rem] sm:min-h-[16rem]">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={current.id}
                custom={direction}
                initial={{ opacity: 0, x: direction * 40 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -direction * 40 }}
                transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                className="glass noise absolute inset-0 flex flex-col items-center rounded-3xl p-8 text-center sm:p-10"
              >
                <Quote className="text-cyan/50" size={28} />
                <p className="mt-5 text-lg leading-relaxed text-ink-soft sm:text-xl">
                  "{current.quote}"
                </p>
                <div className="mt-6 flex items-center gap-1">
                  {Array.from({ length: current.rating }).map((_, i) => (
                    <Star key={i} size={14} className="fill-gold text-gold" />
                  ))}
                </div>
                <div className="mt-4 flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-full bg-surface-2 font-display text-sm font-semibold text-cyan">
                    {current.initials}
                  </div>
                  <div className="text-left">
                    <p className="text-sm font-semibold text-ink">{current.name}</p>
                    <p className="text-xs text-ink-muted">{current.role}</p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="mt-8 flex items-center justify-center gap-4">
            <button
              onClick={() => go(index - 1)}
              aria-label="Previous testimonial"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-ink transition-colors hover:border-cyan/50 hover:text-cyan"
            >
              <ChevronLeft size={16} />
            </button>
            <div className="flex items-center gap-2">
              {testimonials.map((t, i) => (
                <button
                  key={t.id}
                  onClick={() => go(i)}
                  aria-label={`Go to testimonial ${i + 1}`}
                  className={cn(
                    "h-1.5 rounded-full transition-all",
                    i === index ? "w-6 bg-cyan" : "w-1.5 bg-border"
                  )}
                />
              ))}
            </div>
            <button
              onClick={() => go(index + 1)}
              aria-label="Next testimonial"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-ink transition-colors hover:border-cyan/50 hover:text-cyan"
            >
              <ChevronRight size={16} />
            </button>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
