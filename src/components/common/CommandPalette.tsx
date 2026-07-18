import { useEffect, useMemo, useState } from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { AnimatePresence, motion } from "framer-motion";
import {
  Search,
  Home,
  User,
  Sparkles,
  FolderGit2,
  Briefcase,
  Mail,
  Sun,
  Moon,
  FileText,
} from "lucide-react";
import { FiGithub } from "react-icons/fi";
import { useSmoothScrollTo } from "@/context/LenisContext";
import { useTheme } from "@/context/ThemeContext";
import { profile } from "@/data/socials";

interface Command {
  id: string;
  label: string;
  group: "Navigate" | "Actions";
  icon: React.ComponentType<{ size?: number }>;
  action: () => void;
  keywords?: string;
}

export function CommandPalette() {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const scrollTo = useSmoothScrollTo();
  const { toggleTheme, theme } = useTheme();

  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setOpen((prev) => !prev);
      }
    }
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const commands: Command[] = useMemo(
    () => [
      { id: "home", label: "Go to Home", group: "Navigate", icon: Home, action: () => scrollTo("#home") },
      { id: "about", label: "Go to About", group: "Navigate", icon: User, action: () => scrollTo("#about") },
      { id: "skills", label: "Go to Skills", group: "Navigate", icon: Sparkles, action: () => scrollTo("#skills") },
      { id: "projects", label: "Go to Projects", group: "Navigate", icon: FolderGit2, action: () => scrollTo("#projects") },
      { id: "experience", label: "Go to Experience", group: "Navigate", icon: Briefcase, action: () => scrollTo("#experience") },
      { id: "contact", label: "Go to Contact", group: "Navigate", icon: Mail, action: () => scrollTo("#contact") },
      {
        id: "theme",
        label: theme === "dark" ? "Switch to Light Mode" : "Switch to Dark Mode",
        group: "Actions",
        icon: theme === "dark" ? Sun : Moon,
        action: toggleTheme,
      },
      {
        id: "github",
        label: "Open GitHub Profile",
        group: "Actions",
        icon: FiGithub,
        action: () => window.open(profile.githubUrl, "_blank"),
      },
      {
        id: "resume",
        label: "Download Resume",
        group: "Actions",
        icon: FileText,
        action: () => window.open(profile.resumeUrl, "_blank"),
      },
      {
        id: "email",
        label: "Email Emmanuel",
        group: "Actions",
        icon: Mail,
        action: () => window.open(`mailto:${profile.email}`, "_blank"),
      },
    ],
    [scrollTo, theme, toggleTheme]
  );

  const filtered = commands.filter((cmd) =>
    (cmd.label + (cmd.keywords ?? "")).toLowerCase().includes(query.toLowerCase())
  );

  function runCommand(cmd: Command) {
    cmd.action();
    setOpen(false);
    setQuery("");
  }

  return (
    <Dialog.Root open={open} onOpenChange={setOpen}>
      <AnimatePresence>
        {open && (
          <Dialog.Portal forceMount>
            <Dialog.Overlay asChild forceMount>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 z-[110] bg-black/60 backdrop-blur-sm"
              />
            </Dialog.Overlay>
            <Dialog.Content asChild forceMount aria-describedby={undefined}>
              <motion.div
                initial={{ opacity: 0, y: -16, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -16, scale: 0.98 }}
                transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
                className="glass fixed left-1/2 top-[18vh] z-[111] w-[92vw] max-w-lg -translate-x-1/2 overflow-hidden rounded-2xl border border-border shadow-2xl"
              >
                <Dialog.Title className="sr-only">Command Palette</Dialog.Title>
                <div className="flex items-center gap-3 border-b border-border px-4 py-3">
                  <Search size={16} className="text-ink-muted" />
                  <input
                    autoFocus
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    placeholder="Type a command or search..."
                    className="w-full bg-transparent text-sm text-ink placeholder:text-ink-muted focus:outline-none"
                  />
                  <kbd className="rounded border border-border px-1.5 py-0.5 font-mono text-[10px] text-ink-muted">
                    ESC
                  </kbd>
                </div>
                <div className="max-h-80 overflow-y-auto p-2">
                  {(["Navigate", "Actions"] as const).map((group) => {
                    const items = filtered.filter((c) => c.group === group);
                    if (items.length === 0) return null;
                    return (
                      <div key={group} className="mb-2">
                        <p className="px-3 py-1.5 font-mono text-[10px] uppercase tracking-widest text-ink-muted">
                          {group}
                        </p>
                        {items.map((cmd) => (
                          <button
                            key={cmd.id}
                            onClick={() => runCommand(cmd)}
                            className="flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-left text-sm text-ink-soft transition-colors hover:bg-surface-2 hover:text-ink"
                          >
                            <cmd.icon size={15} />
                            {cmd.label}
                          </button>
                        ))}
                      </div>
                    );
                  })}
                  {filtered.length === 0 && (
                    <p className="px-3 py-6 text-center text-sm text-ink-muted">
                      No results found.
                    </p>
                  )}
                </div>
              </motion.div>
            </Dialog.Content>
          </Dialog.Portal>
        )}
      </AnimatePresence>
    </Dialog.Root>
  );
}
