import { motion } from "framer-motion";
import { Home } from "lucide-react";
import { Link } from "react-router-dom";
import { Container } from "@/components/layout/Container";
import { useCursor } from "@/context/CursorContext";

export function NotFound() {
  const { setCursor, resetCursor } = useCursor();

  return (
    <section className="relative flex min-h-[100svh] items-center overflow-hidden">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-1/2 h-[36rem] w-[36rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-lavender/10 blur-[120px]" />
      </div>

      <Container className="relative flex flex-col items-center gap-6 text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="font-display text-[clamp(6rem,20vw,12rem)] font-bold leading-none text-gradient"
        >
          404
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-display text-2xl font-semibold text-ink sm:text-3xl"
        >
          This page wandered off the grid.
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-md text-ink-muted"
        >
          The page you're looking for doesn't exist or has been moved. Let's
          get you back on track.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <Link
            to="/"
            onMouseEnter={() => setCursor("link")}
            onMouseLeave={resetCursor}
            className="glow-cyan inline-flex items-center gap-2 rounded-full bg-cyan px-6 py-3 font-display text-sm font-semibold text-[#05070d]"
          >
            <Home size={16} />
            Back to Home
          </Link>
        </motion.div>
      </Container>
    </section>
  );
}
