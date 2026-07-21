import { motion } from "framer-motion";
import type { ReactNode } from "react";

type Props = {
  eyebrow: string;
  title: ReactNode;
  subtitle: string;
  /** Full-bleed header photo below the intro text. Files live in /public/headers. */
  image?: { src: string; alt: string };
  /** Muted looping header video (used by Partnerships). Takes precedence over image. */
  video?: string;
};

export default function PageIntro({ eyebrow, title, subtitle, image, video }: Props) {
  return (
    <section className="relative pt-40 md:pt-52 pb-24 md:pb-40 grain overflow-hidden">
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(1200px 500px at 20% 20%, rgba(232,226,211,0.05), transparent 60%), radial-gradient(900px 400px at 80% 60%, rgba(232,226,211,0.03), transparent 60%)",
        }}
      />
      <div className="container-editorial relative">
        <motion.p
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.19, 1, 0.22, 1] }}
          className="text-[10px] uppercase tracking-[0.35em] text-bone mb-8"
        >
          {eyebrow}
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.1, ease: [0.19, 1, 0.22, 1] }}
          className="font-serif text-display-lg text-cream max-w-[18ch] text-balance leading-[0.98]"
        >
          {title}
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.25, ease: [0.19, 1, 0.22, 1] }}
          className="mt-10 md:mt-14 max-w-2xl text-lg md:text-xl text-mist leading-[1.55] text-pretty"
        >
          {subtitle}
        </motion.p>
      </div>

      {(video || image) && (
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1, delay: 0.35, ease: [0.19, 1, 0.22, 1] }}
          className="container-editorial relative mt-16 md:mt-24"
        >
          <div className="overflow-hidden">
            {video ? (
              <video
                src={video}
                autoPlay
                muted
                loop
                playsInline
                className="w-full h-[46vh] md:h-[64vh] object-cover"
              />
            ) : (
              <img
                src={image!.src}
                alt={image!.alt}
                className="w-full h-[46vh] md:h-[64vh] object-cover"
              />
            )}
          </div>
        </motion.div>
      )}
    </section>
  );
}
