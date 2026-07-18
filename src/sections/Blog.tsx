import { motion } from "framer-motion";
import { ArrowUpRight, Calendar, Clock } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { SectionHeading } from "@/components/common/SectionHeading";
import { Reveal } from "@/components/common/Reveal";
import { blogPosts } from "@/data/blog";

export function Blog() {
  return (
    <section id="blog" className="section-pad relative">
      <Container>
        <SectionHeading
          eyebrow="Writing"
          title="Notes from the build."
          description="Occasional write-ups on what I'm building and learning."
        />

        <div className="mt-14 grid grid-cols-1 gap-5 md:grid-cols-3">
          {blogPosts.map((post, i) => (
            <Reveal key={post.id} delay={i * 0.08}>
              <motion.article
                whileHover={{ y: -6 }}
                transition={{ type: "spring", stiffness: 300, damping: 22 }}
                className="glass group flex h-full flex-col rounded-2xl p-6"
              >
                <span className="w-fit rounded-full border border-border px-3 py-1 font-mono text-[10px] uppercase tracking-widest text-cyan">
                  {post.tag}
                </span>
                <h3 className="mt-4 font-display text-lg font-semibold leading-snug text-ink">
                  {post.title}
                </h3>
                <p className="mt-2.5 flex-1 text-sm leading-relaxed text-ink-muted">
                  {post.excerpt}
                </p>
                <div className="mt-5 flex items-center justify-between border-t border-border pt-4 text-xs text-ink-muted">
                  <span className="flex items-center gap-1.5">
                    <Calendar size={12} />
                    {new Date(post.date).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Clock size={12} />
                    {post.readTime}
                  </span>
                </div>
                <div className="mt-4 flex items-center gap-1 font-mono text-xs text-ink-muted transition-colors group-hover:text-cyan">
                  Read more
                  <ArrowUpRight size={12} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>
              </motion.article>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
