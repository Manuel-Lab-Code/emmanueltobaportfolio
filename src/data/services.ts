import type { LucideIcon } from "lucide-react";
import {
  Code2,
  LayoutTemplate,
  Rocket,
  Palette,
  Gauge,
  Plug,
  Smartphone,
  Sparkles,
} from "lucide-react";

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
  accent: string;
}

export const services: Service[] = [
  {
    id: "frontend-development",
    title: "Frontend Development",
    description:
      "Production-grade React & TypeScript applications with clean architecture, built to scale from MVP to real users.",
    icon: Code2,
    accent: "var(--cyan)",
  },
  {
    id: "landing-pages",
    title: "Landing Pages",
    description:
      "High-converting, fast-loading landing pages engineered to turn visitors into customers or sign-ups.",
    icon: LayoutTemplate,
    accent: "var(--gold)",
  },
  {
    id: "react-apps",
    title: "React Applications",
    description:
      "Full-featured single-page and multi-page apps with state management, routing, and real backend integration.",
    icon: Rocket,
    accent: "var(--lavender)",
  },
  {
    id: "ui-ux",
    title: "UI / UX Design",
    description:
      "Interface design that balances aesthetics with usability — wireframes, prototypes and polished visual systems.",
    icon: Palette,
    accent: "var(--coral)",
  },
  {
    id: "performance",
    title: "Performance Optimization",
    description:
      "Auditing and tuning load times, bundle size and rendering performance so your app feels instant.",
    icon: Gauge,
    accent: "var(--cyan)",
  },
  {
    id: "animations",
    title: "Web Animations",
    description:
      "Purposeful motion design with Framer Motion and GSAP that adds polish without hurting performance.",
    icon: Sparkles,
    accent: "var(--lavender)",
  },
  {
    id: "api-integration",
    title: "API Integration",
    description:
      "Connecting frontends to REST APIs, auth providers and third-party services with robust error handling.",
    icon: Plug,
    accent: "var(--gold)",
  },
  {
    id: "responsive",
    title: "Responsive Websites",
    description:
      "Pixel-perfect experiences across mobile, tablet, desktop and beyond — built mobile-first, tested everywhere.",
    icon: Smartphone,
    accent: "var(--coral)",
  },
];
