import { motion } from "framer-motion";
import { SiReact, SiTypescript, SiNodedotjs, SiTailwindcss } from "react-icons/si";

const orbitIcons = [
  { Icon: SiReact, color: "#00F5D4", duration: 16, offset: 0 },
  { Icon: SiTypescript, color: "#B388FF", duration: 16, offset: 90 },
  { Icon: SiNodedotjs, color: "#EAB308", duration: 16, offset: 180 },
  { Icon: SiTailwindcss, color: "#FF6B35", duration: 16, offset: 270 },
];

export function AnimatedAvatar() {
  const avatarSrc = `${import.meta.env.BASE_URL}Assets/Profile.png`; // Replace this path with your own photo file in public/

  return (
    <div className="relative mx-auto flex aspect-square w-[min(22rem,80vw)] items-center justify-center sm:w-[min(26rem,80vw)]">
      <motion.div
        className="absolute inset-0 rounded-full border border-dashed border-border"
        animate={{ rotate: 360 }}
        transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
      />
      <motion.div
        className="absolute inset-8 rounded-full border border-border/70"
        animate={{ rotate: -360 }}
        transition={{ duration: 32, repeat: Infinity, ease: "linear" }}
      />

      <div className="glass noise relative flex h-64 w-64 items-center justify-center overflow-hidden rounded-full sm:h-72 sm:w-72">
        <div className="absolute inset-0 rounded-full bg-[conic-gradient(from_180deg,rgba(0,245,212,0.25),rgba(179,136,255,0.25),rgba(255,107,53,0.2),rgba(0,245,212,0.25))] blur-2xl" />
        <img
          src={avatarSrc}
          alt="Profile photo"
          className="relative h-full w-full rounded-full object-cover"
        />
      </div>

      {orbitIcons.map(({ Icon, color, duration, offset }, i) => (
        <motion.div
          key={i}
          className="absolute left-1/2 top-1/2 h-full w-full"
          style={{ marginLeft: "-50%", marginTop: "-50%" }}
          animate={{ rotate: 360 }}
          transition={{ duration, repeat: Infinity, ease: "linear", delay: -(offset / 360) * duration }}
        >
          <div
            className="glass flex h-11 w-11 items-center justify-center rounded-full"
            style={{
              position: "absolute",
              left: "50%",
              top: "0%",
              transform: "translate(-50%, -50%)",
              color,
            }}
          >
            <Icon size={18} />
          </div>
        </motion.div>
      ))}
    </div>
  );
}
