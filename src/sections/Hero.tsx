import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import type { MouseEvent } from "react";
import { ArrowUpRight, Download, Mail } from "lucide-react";
import { FiGithub } from "react-icons/fi";
import { AuroraBackground } from "@/components/common/AuroraBackground";
import { ParticleField } from "@/components/common/ParticleField";
import { AnimatedAvatar } from "@/components/common/AnimatedAvatar";
import { Typewriter } from "@/components/common/Typewriter";
import { Magnetic } from "@/components/common/Magnetic";
import { Container } from "@/components/layout/Container";
import { useSmoothScrollTo } from "@/context/LenisContext";
import { useCursor } from "@/context/CursorContext";
import { profile } from "@/data/socials";

export function Hero() {
  const scrollTo = useSmoothScrollTo();
  const { setCursor, resetCursor } = useCursor();

  const mvX = useMotionValue(0);
  const mvY = useMotionValue(0);
  const springX = useSpring(mvX, { stiffness: 60, damping: 20 });
  const springY = useSpring(mvY, { stiffness: 60, damping: 20 });
  const rotateX = useTransform(springY, [-0.5, 0.5], [6, -6]);
  const rotateY = useTransform(springX, [-0.5, 0.5], [-6, 6]);

  function handleMouseMove(e: MouseEvent<HTMLDivElement>) {
    const rect = e.currentTarget.getBoundingClientRect();
    mvX.set((e.clientX - rect.left) / rect.width - 0.5);
    mvY.set((e.clientY - rect.top) / rect.height - 0.5);
  }

  return (
    <section
      id="home"
      onMouseMove={handleMouseMove}
      className="relative flex min-h-[100svh] items-center overflow-hidden pt-28"
    >
      <AuroraBackground />
      <ParticleField />

      <Container className="relative grid items-center gap-16 py-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-8">
        <div>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-5 flex items-center gap-2 font-mono text-sm text-cyan"
          >
            <span className="h-px w-8 bg-cyan" />
            Hi, my name is
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-display text-[clamp(2.75rem,7vw,5.5rem)] font-bold leading-[0.98] tracking-tight text-ink"
          >
            Emmanuel
            <br />
            <span className="text-gradient">Tobalase.</span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="mt-4 h-10 font-display text-xl font-medium text-ink-soft sm:text-2xl"
          >
            <Typewriter
              words={["Frontend Developer", "React Developer", "UI Engineer", "Problem Solver"]}
              className="text-cyan"
            />
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.35 }}
            className="mt-6 max-w-lg text-base leading-relaxed text-ink-muted sm:text-lg"
          >
            {profile.bio}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.45 }}
            className="mt-10 flex flex-wrap items-center gap-4"
          >
            <Magnetic>
              <button
                onClick={() => scrollTo("#contact")}
                onMouseEnter={() => setCursor("link")}
                onMouseLeave={resetCursor}
                className="glow-cyan flex items-center gap-2 rounded-full bg-cyan px-7 py-3.5 font-display text-sm font-semibold text-[#05070d]"
              >
                Hire Me
                <ArrowUpRight size={16} />
              </button>
            </Magnetic>
            <Magnetic>
              <a
                href={profile.resumeUrl}
                target="public/Emmanuel_Tobalase_Resume.pdf"
                rel="noreferrer"
                onMouseEnter={() => setCursor("link")}
                onMouseLeave={resetCursor}
                className="glass flex items-center gap-2 rounded-full px-7 py-3.5 font-display text-sm font-semibold text-ink"
              >
                Resume
                <Download size={15} />
              </a>
            </Magnetic>
            <Magnetic>
              <a
                href={profile.githubUrl}
                target="_blank"
                rel="noreferrer"
                onMouseEnter={() => setCursor("link")}
                onMouseLeave={resetCursor}
                className="flex h-[3.25rem] w-[3.25rem] items-center justify-center rounded-full border border-border text-ink transition-colors hover:border-cyan/50 hover:text-cyan"
                aria-label="GitHub"
              >
                <FiGithub size={18} />
              </a>
            </Magnetic>
            <Magnetic>
              <a
                href={`mailto:${profile.email}`}
                target="_blank"
                rel="noreferrer"
                onMouseEnter={() => setCursor("link")}
                onMouseLeave={resetCursor}
                aria-label="Email"
                className="flex h-[3.25rem] w-[3.25rem] items-center justify-center rounded-full border border-border text-ink transition-colors hover:border-cyan/50 hover:text-cyan"
              >
                <Mail size={18} />
              </a>
            </Magnetic>
          </motion.div>
        </div>

        <motion.div
          style={{ rotateX, rotateY }}
          className="[transform-style:preserve-3d]"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
        >
          <AnimatedAvatar />
        </motion.div>
      </Container>

      <button
        onClick={() => scrollTo("#about")}
        className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 text-ink-muted sm:flex"
        aria-label="Scroll to About"
      >
        <span className="font-mono text-[10px] uppercase tracking-[0.3em]">Scroll</span>
      </button>
    </section>
  );
}
