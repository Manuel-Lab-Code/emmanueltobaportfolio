import { createContext, useContext, type ReactNode } from "react";
import type Lenis from "lenis";
import { useLenisInstance } from "@/hooks/useLenis";

const LenisContext = createContext<React.RefObject<Lenis | null> | null>(
  null
);

export function SmoothScrollProvider({ children }: { children: ReactNode }) {
  const lenisRef = useLenisInstance();
  return (
    <LenisContext.Provider value={lenisRef}>{children}</LenisContext.Provider>
  );
}

export function useSmoothScrollTo() {
  const lenisRef = useContext(LenisContext);
  return (target: string | number, offset = 0) => {
    const lenis = lenisRef?.current;
    if (lenis) {
      lenis.scrollTo(target, { offset, duration: 0 });
      return;
    }

    if (typeof target === "string") {
      const element = document.querySelector<HTMLElement>(target);
      if (!element) return;

      const top = element.getBoundingClientRect().top + window.scrollY + offset;
      window.scrollTo({ top, behavior: "auto" });
      return;
    }

    window.scrollTo({ top: target + offset, behavior: "auto" });
  };
}
