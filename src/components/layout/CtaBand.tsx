import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

type Props = {
  eyebrow?: string;
  title: string;
  href: string;
  ctaLabel: string;
  external?: boolean;
};

export default function CtaBand({ eyebrow, title, href, ctaLabel, external }: Props) {
  return (
    <section className="relative py-36 md:py-52 border-t hairline overflow-hidden">
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(700px 320px at 50% 100%, rgba(184,146,90,0.11), transparent 60%)",
        }}
      />
      <div className="container-editorial relative text-center">
        {eyebrow && (
          <p className="text-[10px] uppercase tracking-[0.35em] text-wheat mb-8">{eyebrow}</p>
        )}
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.9, ease: [0.19, 1, 0.22, 1] }}
          className="font-serif text-display-md text-cream max-w-[22ch] mx-auto text-balance leading-[1.02]"
        >
          {title}
        </motion.h2>
        <div className="mt-14 md:mt-20 flex justify-center">
          <a
            href={href}
            {...(external ? { target: "_blank", rel: "noreferrer" } : {})}
            className="group inline-flex items-center gap-3 text-ink bg-wheat px-8 py-4 text-[11px] uppercase tracking-[0.24em] hover:bg-wheatLight transition-colors duration-300"
          >
            {ctaLabel}
            <ArrowUpRight size={16} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
          </a>
        </div>
      </div>
    </section>
  );
}
