import type { IconType } from "react-icons";
import {
  SiReact,
  SiTypescript,
  SiJavascript,
  SiHtml5,
  SiCss,
  SiTailwindcss,
  SiRedux,
  SiVuedotjs,
  SiNextdotjs,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiPostgresql,
  SiMysql,
  SiFirebase,
  SiVercel,
  SiNetlify,
  SiRender,
  SiGit,
  SiGithub,
  SiFigma,
  SiFramer,
  SiGreensock,
  SiVite,
  SiPostman,
  SiJsonwebtokens,
  SiEslint,
} from "react-icons/si";

export interface Skill {
  name: string;
  icon: IconType;
  level: number;
}

export interface SkillGroup {
  id: string;
  label: string;
  accent: string;
  skills: Skill[];
}

export const skillGroups: SkillGroup[] = [
  {
    id: "frontend",
    label: "Frontend",
    accent: "var(--cyan)",
    skills: [
      { name: "React", icon: SiReact, level: 95 },
      { name: "TypeScript", icon: SiTypescript, level: 88 },
      { name: "JavaScript", icon: SiJavascript, level: 96 },
      { name: "Next.js", icon: SiNextdotjs, level: 80 },
      { name: "Vue.js", icon: SiVuedotjs, level: 72 },
      { name: "Redux", icon: SiRedux, level: 78 },
      { name: "HTML5", icon: SiHtml5, level: 98 },
      { name: "CSS3", icon: SiCss, level: 96 },
    ],
  },
  {
    id: "backend",
    label: "Backend",
    accent: "var(--lavender)",
    skills: [
      { name: "Node.js", icon: SiNodedotjs, level: 85 },
      { name: "Express", icon: SiExpress, level: 84 },
      { name: "REST APIs", icon: SiPostman, level: 88 },
      { name: "JWT Auth", icon: SiJsonwebtokens, level: 82 },
    ],
  },
  {
    id: "database",
    label: "Database",
    accent: "var(--gold)",
    skills: [
      { name: "MongoDB", icon: SiMongodb, level: 84 },
      { name: "PostgreSQL", icon: SiPostgresql, level: 70 },
      { name: "MySQL", icon: SiMysql, level: 68 },
      { name: "Firebase", icon: SiFirebase, level: 76 },
    ],
  },
  {
    id: "cloud",
    label: "Cloud & DevOps",
    accent: "var(--coral)",
    skills: [
      { name: "Vercel", icon: SiVercel, level: 88 },
      { name: "Netlify", icon: SiNetlify, level: 84 },
      { name: "Render", icon: SiRender, level: 80 },
      { name: "Git / GitHub", icon: SiGithub, level: 92 },
    ],
  },
  {
    id: "design",
    label: "Design",
    accent: "var(--cyan)",
    skills: [
      { name: "Figma", icon: SiFigma, level: 78 },
      { name: "Tailwind CSS", icon: SiTailwindcss, level: 94 },
      { name: "Design Systems", icon: SiFigma, level: 75 },
    ],
  },
  {
    id: "tools",
    label: "Tools",
    accent: "var(--lavender)",
    skills: [
      { name: "Vite", icon: SiVite, level: 90 },
      { name: "Git", icon: SiGit, level: 90 },
      { name: "ESLint", icon: SiEslint, level: 82 },
      { name: "Postman", icon: SiPostman, level: 85 },
    ],
  },
  {
    id: "animation",
    label: "Animation",
    accent: "var(--gold)",
    skills: [
      { name: "Framer Motion", icon: SiFramer, level: 86 },
      { name: "GSAP", icon: SiGreensock, level: 74 },
    ],
  },
];
