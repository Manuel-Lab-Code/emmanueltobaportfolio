import { cn } from "@/utils/cn";

export function AuroraBackground({ className }: { className?: string }) {
  return (
    <div className={cn("pointer-events-none absolute inset-0 overflow-hidden", className)} aria-hidden="true">
      <div className="absolute -left-[10%] -top-[15%] h-[42rem] w-[42rem] animate-aurora rounded-full bg-cyan/20 blur-[110px]" />
      <div
        className="absolute -right-[10%] top-[5%] h-[36rem] w-[36rem] animate-aurora rounded-full bg-lavender/20 blur-[110px]"
        style={{ animationDelay: "-7s" }}
      />
      <div
        className="absolute bottom-[-20%] left-[20%] h-[34rem] w-[34rem] animate-aurora rounded-full bg-coral/10 blur-[120px]"
        style={{ animationDelay: "-14s" }}
      />
      <div className="noise absolute inset-0" />
    </div>
  );
}
