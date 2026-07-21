import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { TESTIMONIALS, type Testimonial } from "../../data/testimonials";

/**
 * Testimonial directly under a sector page header.
 * Per Malachi 2026-07-20: header, then proof immediately underneath.
 * Opens on the sector's own quote; arrows browse the full set (JP 2026-07-20).
 */
export default function SectorQuote({
  sector,
}: {
  sector: Testimonial["sector"];
}) {
  const start = Math.max(
    0,
    TESTIMONIALS.findIndex((t) => t.sector === sector),
  );
  const [index, setIndex] = useState(start);
  const t = TESTIMONIALS[index];

  const step = (dir: 1 | -1) =>
    setIndex((i) => (i + dir + TESTIMONIALS.length) % TESTIMONIALS.length);

  return (
    <section aria-label="Testimonial" className="border-t hairline">
      <div className="container-editorial py-20 md:py-28">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-14 items-start">
          <div className="md:col-span-3 flex md:flex-col justify-between gap-6">
            <p className="text-[10px] uppercase tracking-[0.35em] text-bone">
              From the room
            </p>
            <div className="flex items-center gap-4">
              <button
                onClick={() => step(-1)}
                aria-label="Previous testimonial"
                className="text-cream/50 hover:text-cream transition-colors text-lg leading-none"
              >
                &larr;
              </button>
              <span className="text-[10px] uppercase tracking-[0.28em] text-mist tabular-nums">
                {index + 1} / {TESTIMONIALS.length}
              </span>
              <button
                onClick={() => step(1)}
                aria-label="Next testimonial"
                className="text-cream/50 hover:text-cream transition-colors text-lg leading-none"
              >
                &rarr;
              </button>
            </div>
          </div>
          <div className="md:col-span-9 min-h-[180px] md:min-h-[220px]">
            <AnimatePresence mode="wait">
              <motion.blockquote
                key={index}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.6, ease: [0.19, 1, 0.22, 1] }}
              >
                <p className="font-serif text-xl md:text-3xl text-cream leading-[1.25] tracking-tight text-balance max-w-[40ch]">
                  <span className="italic text-cream/60">&ldquo;</span>
                  {t.quote}
                  <span className="italic text-cream/60">&rdquo;</span>
                </p>
                <footer className="mt-6 md:mt-8 flex flex-wrap items-baseline gap-x-4 gap-y-1">
                  {t.name &&
                    (t.href ? (
                      <a
                        href={t.href}
                        target="_blank"
                        rel="noreferrer noopener"
                        className="not-italic text-[11px] uppercase tracking-[0.28em] text-cream border-b border-cream/40 hover:border-cream transition-colors pb-0.5"
                      >
                        {t.name}
                      </a>
                    ) : (
                      <cite className="not-italic text-[11px] uppercase tracking-[0.28em] text-cream/90">
                        {t.name}
                      </cite>
                    ))}
                  {t.role && (
                    <span className="font-serif italic text-mist text-base">
                      ~{t.role}
                    </span>
                  )}
                </footer>
              </motion.blockquote>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
