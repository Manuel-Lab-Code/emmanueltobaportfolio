import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

export function PageLoader() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          className="fixed inset-0 z-[200] flex flex-col items-center justify-center gap-6 bg-bg"
          exit={{
            clipPath: "inset(0 0 100% 0)",
            transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] },
          }}
        >
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="font-display text-2xl font-semibold tracking-tight text-ink"
          >
            Emmanuel<span className="text-cyan">.</span>
          </motion.div>
          <div className="h-[2px] w-40 overflow-hidden rounded-full bg-surface-2">
            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: "0%" }}
              transition={{ duration: 1, ease: [0.76, 0, 0.24, 1] }}
              className="h-full w-full bg-gradient-to-r from-cyan via-lavender to-coral"
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
