import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Command, Menu, X } from "lucide-react";
import { navItems } from "@/data/nav";
import { useActiveSection } from "@/hooks/useActiveSection";
import { useScrollProgress } from "@/hooks/useScrollProgress";
import { useSmoothScrollTo } from "@/context/LenisContext";
import { useCursor } from "@/context/CursorContext";
import { ThemeToggle } from "@/components/common/ThemeToggle";
import { Magnetic } from "@/components/common/Magnetic";
import { cn } from "@/utils/cn";

export function Navbar() {
  const { scrolled } = useScrollProgress();
  const activeId = useActiveSection(navItems.map((item) => item.href.slice(1)));
  const scrollTo = useSmoothScrollTo();
  const { setCursor, resetCursor } = useCursor();
  const [mobileOpen, setMobileOpen] = useState(false);

  function handleNavClick(href: string) {
    scrollTo(href, -80);
    setMobileOpen(false);
  }

  return (
    <>
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="fixed inset-x-0 top-0 z-50 flex justify-center"
      >
        <nav
          className={cn(
            "mt-3 flex w-[min(96%,1100px)] items-center justify-between rounded-full border border-transparent px-4 py-2.5 transition-all duration-500 sm:mt-4",
            scrolled ? "glass border-border shadow-lg" : "bg-transparent"
          )}
        >
          <button
            onClick={() => handleNavClick("#home")}
            onMouseEnter={() => setCursor("link")}
            onMouseLeave={resetCursor}
            className="font-display text-lg font-semibold tracking-tight text-ink"
          >
            Emmanuel<span className="text-cyan">.</span>
          </button>

          <ul className="hidden items-center gap-1 lg:flex">
            {navItems.map((item) => {
              const isActive = activeId === item.href.slice(1);
              return (
                <li key={item.href} className="relative">
                  <button
                    onClick={() => handleNavClick(item.href)}
                    onMouseEnter={() => setCursor("link")}
                    onMouseLeave={resetCursor}
                    className={cn(
                      "relative rounded-full px-4 py-2 text-sm font-medium transition-colors",
                      isActive ? "text-ink" : "text-ink-muted hover:text-ink"
                    )}
                  >
                    {isActive && (
                      <motion.span
                        layoutId="nav-active"
                        className="absolute inset-0 rounded-full bg-surface-2"
                        transition={{ type: "spring", stiffness: 400, damping: 32 }}
                      />
                    )}
                    <span className="relative z-10">{item.label}</span>
                    {isActive && (
                      <motion.span
                        layoutId="nav-dot"
                        className="absolute -bottom-0.5 left-1/2 h-1 w-1 -translate-x-1/2 rounded-full bg-cyan"
                      />
                    )}
                  </button>
                </li>
              );
            })}
          </ul>

          <div className="flex items-center gap-2">
            <button
              onClick={() => window.dispatchEvent(new KeyboardEvent("keydown", { key: "k", ctrlKey: true }))}
              onMouseEnter={() => setCursor("link")}
              onMouseLeave={resetCursor}
              className="hidden items-center gap-1.5 rounded-full border border-border px-3 py-1.5 font-mono text-xs text-ink-muted transition-colors hover:text-ink sm:flex"
            >
              <Command size={12} />K
            </button>
            <ThemeToggle />
            <Magnetic className="hidden sm:block">
              <button
                onClick={() => handleNavClick("#contact")}
                onMouseEnter={() => setCursor("link")}
                onMouseLeave={resetCursor}
                className="rounded-full bg-cyan px-5 py-2 text-sm font-semibold text-[#05070d] transition-shadow hover:shadow-[0_0_24px_-2px_rgba(0,245,212,0.8)]"
              >
                Hire Me
              </button>
            </Magnetic>
            <button
              onClick={() => setMobileOpen(true)}
              aria-label="Open menu"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-border text-ink lg:hidden"
            >
              <Menu size={16} />
            </button>
          </div>
        </nav>
      </motion.header>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] bg-bg/95 backdrop-blur-xl lg:hidden"
          >
            <div className="flex justify-end p-6">
              <button
                onClick={() => setMobileOpen(false)}
                aria-label="Close menu"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-ink"
              >
                <X size={18} />
              </button>
            </div>
            <motion.ul
              initial="hidden"
              animate="visible"
              variants={{ visible: { transition: { staggerChildren: 0.06 } } }}
              className="flex flex-col items-center gap-6 px-6 pt-8"
            >
              {navItems.map((item) => (
                <motion.li
                  key={item.href}
                  variants={{
                    hidden: { opacity: 0, y: 16 },
                    visible: { opacity: 1, y: 0 },
                  }}
                >
                  <button
                    onClick={() => handleNavClick(item.href)}
                    className={cn(
                      "font-display text-3xl font-medium",
                      activeId === item.href.slice(1) ? "text-cyan" : "text-ink"
                    )}
                  >
                    {item.label}
                  </button>
                </motion.li>
              ))}
              <motion.li variants={{ hidden: { opacity: 0, y: 16 }, visible: { opacity: 1, y: 0 } }}>
                <button
                  onClick={() => handleNavClick("#contact")}
                  className="mt-4 rounded-full bg-cyan px-8 py-3 font-display text-base font-semibold text-[#05070d]"
                >
                  Hire Me
                </button>
              </motion.li>
            </motion.ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
