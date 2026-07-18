export interface Project {
  id: string;
  title: string;
  tagline: string;
  description: string;
  role: string;
  year: string;
  category: "Full Stack" | "Frontend" | "E-Commerce" | "Utility";
  tech: string[];
  githubUrl: string;
  liveUrl?: string;
  stars: number;
  commits: number;
  featured?: boolean;
  gradient: [string, string];
  highlights: string[];
}

export const projects: Project[] = [
  {
    id: "school-management-system",
    title: "iMadious School Management System",
    tagline: "Multi-tenant SaaS backend for schools",
    description:
      "A production-grade, multi-tenant school management platform that lets many schools run on shared infrastructure with fully isolated data. Built around a three-tier role system with JWT-scoped access and a developer control panel for provisioning new institutions.",
    role: "Full Stack Developer",
    year: "2025",
    category: "Full Stack",
    tech: ["Node.js", "Express", "MongoDB", "JWT", "REST API"],
    githubUrl: "https://github.com/Manuel-Lab-Code/-iMadious-School-Management-System",
    liveUrl: "https://imadious-school-management-system.onrender.com/",
    stars: 5,
    commits: 24,
    featured: true,
    gradient: ["#00F5D4", "#111827"],
    highlights: [
      "Multi-school data isolation on shared infrastructure",
      "Developer / School Admin / Student-Teacher role hierarchy",
      "JWT auth with schoolId-scoped tokens + OTP email verification",
      "Rate limiting, input validation and bcrypt password hashing",
    ],
  },
  {
    id: "Paymentpoint",
   title: "PaymentPoint",
   tagline: "Secure, Fast & Seamless Payment Processing for Businesses",
    description:
    "PaymentPoint is a fintech platform that enables businesses to securely accept online payments through multiple payment methods. It provides real-time transaction processing, flexible settlement options, payment tracking, analytics, and developer APIs for seamless integration into web and mobile applications.",
    role: "Frontend Developer",
    year: "2024",
    category: "Frontend",
    tech: ["HTML5", "CSS3", "JavaScript"],
    githubUrl: "",
    liveUrl: "https://paymentpoint.co/",
    stars: 3,
    commits: 3,
    gradient: ["#EAB308", "#070B17"],
    highlights: [
       "Payment Gateway Integration",
      "Multiple Payment Methods",
      "Real-Time Transaction Processing",
      "Secure Payment Infrastructure",
      "Transaction Tracking & Analytics",
      "Flexible Settlement Options",
      "Developer API & Documentation",
      "Business Payment Management"
    ],
  },
  {
  id: "NectPoint",
  title: "NectPoint",
  tagline: "Transforming Ideas into Innovative Digital Solutions",
  description: "NectPoint is a technology company that delivers custom software development, web and mobile applications, UI/UX design, and digital transformation solutions. The platform showcases the company's services, portfolio, expertise, and provides a streamlined channel for businesses to request consultations and collaborate on technology projects.",
    role: "Frontend Developer",
    year: "2024",
    category: "Frontend",
    tech: ["React", "Next.js", "Tailwind CSS"],
    githubUrl: "",
    liveUrl: "https://www.nectpoint.com/",
    stars: 4,
    commits: 1,
    gradient: ["#FF6B35", "#EAB308"],
    highlights: [
      "Custom Software Development",
      "Responsive Web Applications",
      "Mobile App Development",
      "UI/UX Design",
      "Digital Transformation Solutions",
      "Project Portfolio Showcase",
      "Lead Generation & Contact System",
      "Scalable Business Solutions"
    ],
  },
  {
    id: "rescue-card-form",
    title: "MinMeg",
    tagline: "Empowering Global Mineral Trade Across Borders",
    description:
   "Allows visitors to quickly evaluate the developer’s experience and coding standards.",
    role: "Full-Stack Developer",
    year: "2023",
    category: "Utility",
    tech: ["React", "Tailwind CSS", "Vite", "Framer Motion"],
    githubUrl: "",
    liveUrl: "https://d-minmeg.vercel.app/",
    stars: 3,
    commits: 4,
    gradient: ["#00F5D4", "#B388FF"],
    highlights: [
      "Single Page Application (SPA) with reusable React components",
      "Streamlines transactions and enhances collaboration in the mining industry.",
      "Presents technical skills, frameworks, programming languages, and development tools in an organized, visual format.",
    ],
  },

  {
  id: "INEM-Nigeria",
   title: "INEM Nigeria",
   tagline: "Delivering Reliable Engineering, Procurement & Industrial Solutions",
    description:
    "INEM Nigeria is a corporate website for an engineering and industrial services company, showcasing its expertise in engineering, procurement, project management, equipment supply, and industrial support services. The platform enables clients to explore services, company capabilities, completed projects, and submit business inquiries.",
    role: "Frontend Developer",
    year: "2026",
    category: "Frontend",
    tech: [ "React.js",
  "TypeScript",
  "Next.js",
  "Tailwind CSS",
  "Framer Motion",
  "Node.js",
  "Git",
  "Vercel"],
    githubUrl: "Private Repository",
    liveUrl: "https://www.inemnigeria.com.ng",
    stars: 5,
    commits: 3,
    gradient: ["#FF6B35", "#EAB308"],
    highlights: [
      "Engineering Services",
      "Procurement Solutions",
      "Industrial Project Management",
      "Corporate Profile",
      "Project Portfolio",
      "Business Inquiry System",
      "Responsive Website",
      "Professional Company Branding"
    ],
  },
];

export const projectCategories = [
  "All",
  ...Array.from(new Set(projects.map((p) => p.category))),
] as const;

export const allTechTags = Array.from(
  new Set(projects.flatMap((p) => p.tech))
).sort();
