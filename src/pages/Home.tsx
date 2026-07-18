import { Suspense, lazy } from "react";
import { Hero } from "@/sections/Hero";
import { About } from "@/sections/About";
import { Skills } from "@/sections/Skills";
import { Projects } from "@/sections/Projects";
import { Experience } from "@/sections/Experience";
import { Services } from "@/sections/Services";

const Testimonials = lazy(() =>
  import("@/sections/Testimonials").then((m) => ({ default: m.Testimonials }))
);
const GithubStats = lazy(() =>
  import("@/sections/GithubStats").then((m) => ({ default: m.GithubStats }))
);
const Blog = lazy(() => import("@/sections/Blog").then((m) => ({ default: m.Blog })));
const Contact = lazy(() =>
  import("@/sections/Contact").then((m) => ({ default: m.Contact }))
);

function SectionFallback() {
  return <div className="section-pad min-h-[20rem]" aria-hidden="true" />;
}

export function Home() {
  return (
    <>
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Services />
      <Suspense fallback={<SectionFallback />}>
        <Testimonials />
      </Suspense>
      <Suspense fallback={<SectionFallback />}>
        <GithubStats />
      </Suspense>
      <Suspense fallback={<SectionFallback />}>
        <Blog />
      </Suspense>
      <Suspense fallback={<SectionFallback />}>
        <Contact />
      </Suspense>
    </>
  );
}
