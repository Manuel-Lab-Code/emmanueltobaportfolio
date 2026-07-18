export interface ExperienceItem {
  id: string;
  role: string;
  org: string;
  period: string;
  location: string;
  summary: string;
  achievements: string[];
  tech: string[];
}

export const experience: ExperienceItem[] = [
  {
    id: "imadious",
    role: "Full Stack Developer (Freelance)",
    org: "iMadious School Systems",
    period: "2025 — Present",
    location: "Remote · Lagos, NG",
    summary:
      "Designing and building a multi-tenant school management platform from the ground up — architecture, auth, and admin tooling for multiple institutions on shared infrastructure.",
    achievements: [
      "Shipped a production JWT-based auth system with per-school data isolation",
      "Built a developer control panel for provisioning new schools",
      "Deployed and maintained a live Node.js/Express/MongoDB backend",
    ],
    tech: ["Node.js", "Express", "MongoDB", "JWT"],
  },
  {
    id: "freelance-web",
    role: "Frontend Developer (Freelance)",
    org: "Independent Clients",
    period: "2024 — 2025",
    location: "Lagos, Nigeria",
    summary:
      "Delivered marketing sites, ecommerce storefronts and academic portals for local businesses and schools, taking each from design to deployment.",
    achievements: [
      "Built and shipped a React ecommerce storefront deployed on Vercel",
      "Delivered a food-delivery brand site for a Lagos-based business",
      "Built a student academic results portal used by real students",
    ],
    tech: ["React", "JavaScript", "CSS3", "Vercel"],
  },
  {
    id: "foundations",
    role: "Self-Taught Developer",
    org: "JavaScript & Web Fundamentals",
    period: "2023",
    location: "Lagos, Nigeria",
    summary:
      "Built the fundamentals — vanilla JavaScript, DOM manipulation, and UI logic — through focused practice projects before moving into React and full-stack work.",
    achievements: [
      "Built a suite of interactive utilities (to-do app, stopwatch, guessing game)",
      "Developed a public-safety registration form for a real community initiative",
      "Established a daily coding practice that led into React development",
    ],
    tech: ["JavaScript", "HTML5", "CSS3"],
  },
];

export const counters = [
  { label: "Years Coding", value: 3, suffix: "+" },
  { label: "Projects Shipped", value: 10, suffix: "+" },
  { label: "Technologies Used", value: 20, suffix: "+" },
  { label: "Client Focus", value: 100, suffix: "%" },
];

export const philosophy = [
  {
    title: "Ship real things",
    body: "Every project on this site is live, in production, or built for a real user — not a tutorial clone.",
  },
  {
    title: "Clarity over cleverness",
    body: "Code should read like it was written for the next person. Simple, direct solutions beat clever ones.",
  },
  {
    title: "Design is part of the job",
    body: "Frontend engineering and UI craft aren't separate disciplines — the best interfaces are engineered and designed together.",
  },
];
