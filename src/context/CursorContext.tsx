import { createContext, useContext, useState, type ReactNode } from "react";

export type CursorVariant = "default" | "link" | "view" | "drag" | "text";

interface CursorContextValue {
  variant: CursorVariant;
  label: string;
  setCursor: (variant: CursorVariant, label?: string) => void;
  resetCursor: () => void;
}

const CursorContext = createContext<CursorContextValue | null>(null);

export function CursorProvider({ children }: { children: ReactNode }) {
  const [variant, setVariant] = useState<CursorVariant>("default");
  const [label, setLabel] = useState("");

  const setCursor = (next: CursorVariant, nextLabel = "") => {
    setVariant(next);
    setLabel(nextLabel);
  };

  const resetCursor = () => {
    setVariant("default");
    setLabel("");
  };

  return (
    <CursorContext.Provider value={{ variant, label, setCursor, resetCursor }}>
      {children}
    </CursorContext.Provider>
  );
}

export function useCursor() {
  const ctx = useContext(CursorContext);
  if (!ctx) throw new Error("useCursor must be used within CursorProvider");
  return ctx;
}
