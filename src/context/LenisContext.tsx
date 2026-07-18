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
      lenis.scrollTo(target, { offset, duration: 1.2 });
    } else if (typeof target === "string") {
      document.querySelector(target)?.scrollIntoView({ behavior: "smooth" });
    }
  };
}
