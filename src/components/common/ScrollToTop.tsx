import { AnimatePresence, motion } from "framer-motion";
import { ArrowUp } from "lucide-react";
import { useScrollProgress } from "@/hooks/useScrollProgress";
import { useSmoothScrollTo } from "@/context/LenisContext";
import { useCursor } from "@/context/CursorContext";

export function ScrollToTop() {
  const { progress } = useScrollProgress();
  const scrollTo = useSmoothScrollTo();
  const { setCursor, resetCursor } = useCursor();
  const visible = progress > 0.15;

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.6, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.6, y: 20 }}
          whileHover={{ y: -3 }}
          onMouseEnter={() => setCursor("link")}
          onMouseLeave={resetCursor}
          onClick={() => scrollTo(0)}
          aria-label="Scroll to top"
          className="glass fixed bottom-6 right-6 z-40 flex h-12 w-12 items-center justify-center rounded-full text-ink transition-colors hover:text-cyan sm:bottom-8 sm:right-8"
        >
          <ArrowUp size={18} />
        </motion.button>
      )}
    </AnimatePresence>
  );
}
