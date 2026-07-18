import type { ReactNode } from "react";
import { ThemeProvider } from "@/context/ThemeContext";
import { CursorProvider } from "@/context/CursorContext";
import { SmoothScrollProvider } from "@/context/LenisContext";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { CommandPalette } from "@/components/common/CommandPalette";
import { ScrollProgressBar } from "@/components/common/ScrollProgressBar";
import { ScrollToTop } from "@/components/common/ScrollToTop";
import { PageLoader } from "@/components/common/PageLoader";

export function RootLayout({ children }: { children: ReactNode }) {
  return (
    <ThemeProvider>
      <CursorProvider>
        <SmoothScrollProvider>
          <PageLoader />
          <ScrollProgressBar />
          <CommandPalette />
          <Navbar />
          <main className="relative">{children}</main>
          <Footer />
          <ScrollToTop />
        </SmoothScrollProvider>
      </CursorProvider>
    </ThemeProvider>
  );
}
