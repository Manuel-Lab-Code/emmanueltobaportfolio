import { useState } from "react";
import { useForm } from "react-hook-form";
import { AnimatePresence, motion } from "framer-motion";
import { CheckCircle2, Loader2, Mail, MapPin, Send } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { SectionHeading } from "@/components/common/SectionHeading";
import { Reveal } from "@/components/common/Reveal";
import { Magnetic } from "@/components/common/Magnetic";
import { socials, profile } from "@/data/socials";
import { sendContactMessage, isEmailJsConfigured } from "@/services/email";
import { useCursor } from "@/context/CursorContext";
import { cn } from "@/utils/cn";

interface ContactForm {
  name: string;
  email: string;
  subject: string;
  message: string;
}

type Status = "idle" | "loading" | "success" | "error";

export function Contact() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactForm>();
  const [status, setStatus] = useState<Status>("idle");
  const { setCursor, resetCursor } = useCursor();

  async function onSubmit(data: ContactForm) {
    setStatus("loading");
    try {
      if (isEmailJsConfigured) {
        await sendContactMessage(data);
      } else {
        const mailto = `mailto:${profile.email}?subject=${encodeURIComponent(
          data.subject
        )}&body=${encodeURIComponent(`${data.message}\n\n— ${data.name} (${data.email})`)}`;
        window.open(mailto, "_blank");
      }
      setStatus("success");
      reset();
      setTimeout(() => setStatus("idle"), 4000);
    } catch {
      setStatus("error");
      setTimeout(() => setStatus("idle"), 4000);
    }
  }

  return (
    <section id="contact" className="section-pad relative overflow-hidden bg-bg-alt">
      <div className="pointer-events-none absolute left-1/2 top-0 h-96 w-[48rem] -translate-x-1/2 rounded-full bg-cyan/10 blur-[140px]" />

      <Container className="relative">
        <SectionHeading
          eyebrow="Contact"
          title="Let's build something exceptional."
          description="Have a project, a role, or just want to say hi? My inbox is open."
        />

        <div className="mt-14 grid gap-8 lg:grid-cols-12">
          <Reveal className="lg:col-span-5">
            <div className="glass noise flex h-full flex-col justify-between rounded-3xl p-8">
              <div>
                <h3 className="font-display text-2xl font-semibold text-ink">
                  Available for freelance &amp; full-time roles
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-ink-muted">
                  I typically respond within 24 hours. Whether you're a
                  startup founder, a recruiter, or a fellow developer — reach
                  out.
                </p>
              </div>

              <div className="mt-8 flex flex-col gap-4">
                <a
                  href={`mailto:${profile.email}`}
                  onMouseEnter={() => setCursor("link")}
                  onMouseLeave={resetCursor}
                  className="flex items-center gap-3 text-sm text-ink-soft transition-colors hover:text-cyan"
                >
                  <Mail size={16} className="text-cyan" />
                  {profile.email}
                </a>
                <p className="flex items-center gap-3 text-sm text-ink-soft">
                  <MapPin size={16} className="text-cyan" />
                  {profile.location}
                </p>
              </div>

              <div className="mt-8 flex items-center gap-3">
                {socials.map((social) => (
                  <Magnetic key={social.label}>
                    <a
                      href={social.href}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={social.label}
                      onMouseEnter={() => setCursor("link")}
                      onMouseLeave={resetCursor}
                      className="flex h-11 w-11 items-center justify-center rounded-full border border-border text-ink-muted transition-colors hover:border-cyan/50 hover:text-cyan"
                    >
                      <social.icon size={16} />
                    </a>
                  </Magnetic>
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.1} className="lg:col-span-7">
            <form onSubmit={handleSubmit(onSubmit)} className="glass relative overflow-hidden rounded-3xl p-8">
              <AnimatePresence>
                {status === "success" && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="glass absolute inset-0 z-10 flex flex-col items-center justify-center gap-3 rounded-3xl"
                  >
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: "spring", stiffness: 260, damping: 18 }}
                    >
                      <CheckCircle2 size={44} className="text-cyan" />
                    </motion.div>
                    <p className="font-display text-lg font-semibold text-ink">Message sent!</p>
                    <p className="text-sm text-ink-muted">I&apos;ll get back to you shortly.</p>
                  </motion.div>
                )}
              </AnimatePresence>

              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                <Field label="Name" error={errors.name?.message}>
                  <input
                    {...register("name", { required: "Please enter your name" })}
                    placeholder="John Doe"
                    className={inputClass}
                  />
                </Field>
                <Field label="Email" error={errors.email?.message}>
                  <input
                    type="email"
                    {...register("email", {
                      required: "Please enter your email",
                      pattern: { value: /^\S+@\S+\.\S+$/, message: "Enter a valid email" },
                    })}
                    placeholder="john@company.com"
                    className={inputClass}
                  />
                </Field>
              </div>

              <div className="mt-5">
                <Field label="Subject" error={errors.subject?.message}>
                  <input
                    {...register("subject", { required: "Please add a subject" })}
                    placeholder="Project inquiry"
                    className={inputClass}
                  />
                </Field>
              </div>

              <div className="mt-5">
                <Field label="Message" error={errors.message?.message}>
                  <textarea
                    {...register("message", { required: "Please write a message" })}
                    rows={5}
                    placeholder="Tell me about your project..."
                    className={cn(inputClass, "resize-none")}
                  />
                </Field>
              </div>

              <Magnetic className="mt-6 inline-block">
                <button
                  type="submit"
                  disabled={status === "loading"}
                  onMouseEnter={() => setCursor("link")}
                  onMouseLeave={resetCursor}
                  className="glow-cyan flex items-center gap-2 rounded-full bg-cyan px-7 py-3.5 font-display text-sm font-semibold text-[#05070d] disabled:opacity-70"
                >
                  {status === "loading" ? (
                    <>
                      <Loader2 size={16} className="animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message
                      <Send size={15} />
                    </>
                  )}
                </button>
              </Magnetic>
              {status === "error" && (
                <p className="mt-3 text-sm text-coral">
                  Something went wrong. Please email me directly instead.
                </p>
              )}
            </form>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}

const inputClass =
  "w-full rounded-xl border border-border bg-surface-2 px-4 py-3 text-sm text-ink placeholder:text-ink-muted transition-colors focus:border-cyan focus:outline-none";

function Field({
  label,
  error,
  children,
}: {
  label: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-xs font-medium text-ink-muted">{label}</span>
      {children}
      {error && <span className="mt-1.5 block text-xs text-coral">{error}</span>}
    </label>
  );
}
