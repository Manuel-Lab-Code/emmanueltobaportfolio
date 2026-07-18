import { ArrowUpRight } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { Magnetic } from "@/components/common/Magnetic";
import { navItems } from "@/data/nav";
import { socials, profile } from "@/data/socials";
import { useSmoothScrollTo } from "@/context/LenisContext";
import { useCursor } from "@/context/CursorContext";

export function Footer() {
  const scrollTo = useSmoothScrollTo();
  const { setCursor, resetCursor } = useCursor();
  const year = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden border-t border-border bg-bg-alt">
      <div className="pointer-events-none absolute inset-x-0 -top-1/2 h-full">
        <div className="mx-auto h-full max-w-4xl bg-[radial-gradient(ellipse_at_center,rgba(0,245,212,0.08),transparent_70%)]" />
      </div>

      <Container className="relative section-pad">
        <div className="flex flex-col items-start justify-between gap-10 border-b border-border pb-12 md:flex-row md:items-end">
          <div>
            <p className="mb-3 font-mono text-xs uppercase tracking-[0.2em] text-cyan">
              Let&apos;s build something
            </p>
            <button
              onClick={() => scrollTo("#contact")}
              onMouseEnter={() => setCursor("view", "Say hi")}
              onMouseLeave={resetCursor}
              className="text-left font-display text-4xl font-semibold leading-[1.05] tracking-tight text-ink sm:text-5xl md:text-6xl"
            >
              Got a project in mind?{" "}
              <span className="text-gradient">Let&apos;s talk.</span>
            </button>
          </div>
          <Magnetic>
            <a
              href={`mailto:${profile.email}`}
              onMouseEnter={() => setCursor("link")}
              onMouseLeave={resetCursor}
              className="glow-cyan flex items-center gap-2 rounded-full bg-cyan px-6 py-3.5 font-display text-sm font-semibold text-[#05070d]"
            >
              {profile.email}
              <ArrowUpRight size={16} />
            </a>
          </Magnetic>
        </div>

        <div className="flex flex-col gap-8 pt-10 md:flex-row md:items-center md:justify-between">
          <button
            onClick={() => scrollTo("#home")}
            className="font-display text-2xl font-semibold tracking-tight text-ink"
          >
            Emmanuel<span className="text-cyan">.</span>
          </button>

          <ul className="flex flex-wrap gap-x-6 gap-y-2">
            {navItems.map((item) => (
              <li key={item.href}>
                <button
                  onClick={() => scrollTo(item.href, -80)}
                  className="text-sm text-ink-muted transition-colors hover:text-ink"
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-3">
            {socials.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noreferrer"
                aria-label={social.label}
                onMouseEnter={() => setCursor("link")}
                onMouseLeave={resetCursor}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-ink-muted transition-colors hover:border-cyan/50 hover:text-cyan"
              >
                <social.icon size={16} />
              </a>
            ))}
          </div>
        </div>

        <div className="mt-10 flex flex-col-reverse items-center justify-between gap-4 border-t border-border pt-6 text-xs text-ink-muted sm:flex-row">
          <p>© {year} Emmanuel Toba. All rights reserved.</p>
          <p className="font-mono">Built with React, TypeScript &amp; Framer Motion.</p>
        </div>
      </Container>
    </footer>
  );
}
