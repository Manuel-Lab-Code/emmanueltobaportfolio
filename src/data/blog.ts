export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  tag: string;
}

/** Placeholder posts — wire up to a real CMS / MDX source later. */
export const blogPosts: BlogPost[] = [
  {
    id: "p1",
    title: "Building a Multi-Tenant Backend with Express & MongoDB",
    excerpt:
      "Notes on designing per-school data isolation, JWT-scoped auth, and a developer control panel for a real production system.",
    date: "2026-02-10",
    readTime: "6 min read",
    tag: "Backend",
  },
  {
    id: "p2",
    title: "Animating React Apps Without Killing Performance",
    excerpt:
      "How I use Framer Motion and GSAP together — where each one earns its place, and where restraint matters more than motion.",
    date: "2026-01-22",
    readTime: "5 min read",
    tag: "Frontend",
  },
  {
    id: "p3",
    title: "From Vanilla JS to React: What Actually Changed",
    excerpt:
      "A practical look at the mental model shift from DOM-driven scripts to component-driven UI — and what to unlearn.",
    date: "2025-12-15",
    readTime: "4 min read",
    tag: "Career",
  },
];
