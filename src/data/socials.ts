import type { IconType } from "react-icons";
import { FiGithub, FiLinkedin, FiTwitter, FiMail } from "react-icons/fi";

export interface SocialLink {
  label: string;
  href: string;
  icon: IconType;
}

export const socials: SocialLink[] = [
  {
    label: "GitHub",
    href: "https://github.com/Manuel-Lab-Code",
    icon: FiGithub,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/Manuel216",
    icon: FiLinkedin,
  },
  {
    label: "Twitter",
    href: "https://twitter.com/Manuel_216",
    icon: FiTwitter,
  },
  {
    label: "Email",
    href: "mailto:emmanueltobalase@gmail.com",
    icon: FiMail,
  },
];

export const profile = {
  name: "Emmanuel Toba",
  handle: "Manuel-Lab-Code",
  roles: [
    "Frontend Developer",
    "React Developer",
    "UI Engineer",
    "Problem Solver",
  ],
  location: "Lagos, Nigeria",
  email: "emmanueltobalase@gmail.com",
  githubUrl: "https://github.com/Manuel-Lab-Code",
  bio: "Full-stack developer focused on React and Node.js, based in Lagos, Nigeria. I build fast, accessible, production-ready web applications — from multi-tenant platforms to conversion-focused client sites.",
  resumeUrl: "/resume.pdf",
};
