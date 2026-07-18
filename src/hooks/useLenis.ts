import { useEffect, useRef } from "react";
import type Lenis from "lenis";

export function useLenisInstance() {
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    lenisRef.current = null;
    return () => {
      lenisRef.current = null;
    };
  }, []);

  return lenisRef;
}
