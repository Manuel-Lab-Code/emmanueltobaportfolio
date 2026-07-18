import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring, AnimatePresence } from "framer-motion";
import { useCursor } from "@/context/CursorContext";
import { useIsTouchDevice } from "@/hooks/useMediaQuery";

export function CustomCursor() {
  const isTouch = useIsTouchDevice();
  const { variant, label } = useCursor();
  const [visible, setVisible] = useState(false);

  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const springX = useSpring(x, { stiffness: 500, damping: 40, mass: 0.4 });
  const springY = useSpring(y, { stiffness: 500, damping: 40, mass: 0.4 });

  useEffect(() => {
    if (isTouch) return;
    document.body.classList.add("custom-cursor-active");

    function handleMove(e: MouseEvent) {
      x.set(e.clientX);
      y.set(e.clientY);
      if (!visible) setVisible(true);
    }
    function handleLeave() {
      setVisible(false);
    }

    window.addEventListener("mousemove", handleMove);
    document.documentElement.addEventListener("mouseleave", handleLeave);
    return () => {
      document.body.classList.remove("custom-cursor-active");
      window.removeEventListener("mousemove", handleMove);
      document.documentElement.removeEventListener("mouseleave", handleLeave);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isTouch]);

  if (isTouch) return null;

  const scale = variant === "view" || variant === "drag" ? 2.6 : variant === "link" ? 1.8 : 1;

  return (
    <motion.div
      className="pointer-events-none fixed left-0 top-0 z-[100] hidden lg:block"
      style={{ x: springX, y: springY, translateX: "-50%", translateY: "-50%" }}
      animate={{ opacity: visible ? 1 : 0 }}
    >
      <motion.div
        animate={{ scale }}
        transition={{ type: "spring", stiffness: 300, damping: 22 }}
        className="flex items-center justify-center rounded-full"
        style={{
          width: 16,
          height: 16,
          background:
            variant === "view" || variant === "drag"
              ? "color-mix(in oklab, var(--cyan) 85%, transparent)"
              : "var(--cyan)",
          mixBlendMode: "difference",
        }}
      >
        <AnimatePresence>
          {label && (
            <motion.span
              initial={{ opacity: 0, scale: 0.6 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.6 }}
              className="whitespace-nowrap font-mono text-[9px] font-medium uppercase tracking-wide text-[#05070d]"
            >
              {label}
            </motion.span>
          )}
        </AnimatePresence>
      </motion.div>
    </motion.div>
  );
}
