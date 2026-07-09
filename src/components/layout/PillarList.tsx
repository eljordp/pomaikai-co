import { motion } from "framer-motion";
import type { ReactNode } from "react";

type Pillar = {
  index: string;
  title: string;
  body: string;
  meta?: string;
  icon?: ReactNode;
};

/**
 * Editorial stacked list, NOT a card grid.
 * Each row is a full-width hairline-separated entry with a large serif title.
 */
export default function PillarList({
  eyebrow,
  heading,
  pillars,
}: {
  eyebrow: string;
  heading: ReactNode;
  pillars: Pillar[];
}) {
  return (
    <section className="py-32 md:py-48 border-t hairline">
      <div className="container-editorial">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-14 mb-20 md:mb-28">
          <div className="md:col-span-4">
            <p className="text-[10px] uppercase tracking-[0.35em] text-wheat mb-6">{eyebrow}</p>
          </div>
          <div className="md:col-span-8">
            <h2 className="font-serif text-display-md text-cream max-w-[18ch] text-balance leading-[1.02]">
              {heading}
            </h2>
          </div>
        </div>

        <div className="border-t hairline">
          {pillars.map((p, i) => (
            <motion.article
              key={p.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.75, delay: i * 0.05, ease: [0.19, 1, 0.22, 1] }}
              className="group grid grid-cols-12 gap-6 md:gap-10 py-12 md:py-16 border-b hairline hover:bg-obsidian/40 transition-colors duration-500"
            >
              <div className="col-span-2 md:col-span-1 pt-2">
                <span className="font-serif italic text-mist text-lg">{p.index}</span>
              </div>
              <div className="col-span-10 md:col-span-4">
                <h3 className="font-serif text-3xl md:text-5xl text-cream leading-[1.02] tracking-tight group-hover:text-wheat transition-colors duration-500">
                  {p.title}
                </h3>
                {p.meta && (
                  <p className="mt-4 text-[10px] uppercase tracking-[0.3em] text-wheatLight/80">
                    {p.meta}
                  </p>
                )}
              </div>
              <div className="col-span-12 md:col-span-6 md:col-start-7 text-mist text-lg leading-[1.55] max-w-[52ch] flex flex-col justify-end">
                <p className="text-pretty">{p.body}</p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
