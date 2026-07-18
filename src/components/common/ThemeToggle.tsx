import { motion } from "framer-motion";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "@/context/ThemeContext";
import { useCursor } from "@/context/CursorContext";

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const { setCursor, resetCursor } = useCursor();
  const isDark = theme === "dark";

  return (
    <button
      onClick={toggleTheme}
      onMouseEnter={() => setCursor("link")}
      onMouseLeave={resetCursor}
      aria-label="Toggle theme"
      className="relative flex h-9 w-16 items-center rounded-full border border-border bg-surface-2 px-1 transition-colors"
    >
      <motion.span
        layout
        transition={{ type: "spring", stiffness: 500, damping: 30 }}
        className="flex h-7 w-7 items-center justify-center rounded-full bg-cyan text-[#05070d]"
        style={{ marginLeft: isDark ? 0 : "auto" }}
      >
        {isDark ? <Moon size={13} /> : <Sun size={13} />}
      </motion.span>
    </button>
  );
}
