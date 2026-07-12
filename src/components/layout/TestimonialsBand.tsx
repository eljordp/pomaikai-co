import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { TESTIMONIALS } from "../../data/testimonials";

/**
 * Rotating testimonials band — one quote at a time, large serif, restrained.
 * Auto-rotates every 8s. Same pattern JP built on the original poika/Pomaika'i site.
 *
 * PLACEHOLDER CONTENT: TESTIMONIALS in `src/data/testimonials.ts` are honest
 * placeholders until Malachi ships 7 real quotes with names + consent.
 */
export default function TestimonialsBand() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = window.setInterval(() => {
      setIndex((i) => (i + 1) % TESTIMONIALS.length);
    }, 8000);
    return () => window.clearInterval(id);
  }, []);

  const current = TESTIMONIALS[index];

  return (
    <section
      aria-label="Testimonials"
      className="relative border-t hairline overflow-hidden"
    >
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(900px 400px at 50% 20%, rgba(232,226,211,0.04), transparent 60%)",
        }}
      />
      <div className="container-editorial relative py-24 md:py-40">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-14 items-start">
          <div className="md:col-span-3">
            <p className="text-[10px] uppercase tracking-[0.35em] text-bone">
              The Room · Testimonials
            </p>
          </div>
          <div className="md:col-span-9 min-h-[220px] md:min-h-[280px] relative">
            <AnimatePresence mode="wait">
              <motion.blockquote
                key={index}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.9, ease: [0.19, 1, 0.22, 1] }}
              >
                <p className="font-serif text-2xl md:text-4xl lg:text-5xl text-cream leading-[1.15] tracking-tight text-balance max-w-[26ch]">
                  <span className="italic text-cream/60">&ldquo;</span>
                  {current.quote}
                  <span className="italic text-cream/60">&rdquo;</span>
                </p>
                {(current.name || current.role) && (
                  <footer className="mt-8 md:mt-10 flex flex-wrap items-baseline gap-x-4 gap-y-1">
                    {current.name && (
                      <cite className="not-italic text-[11px] uppercase tracking-[0.28em] text-cream/90">
                        {current.name}
                      </cite>
                    )}
                    {current.role && (
                      <span className="font-serif italic text-mist text-base md:text-lg">
                        {current.role}
                      </span>
                    )}
                  </footer>
                )}
              </motion.blockquote>
            </AnimatePresence>

            {/* Progress dots — small, restrained */}
            <div className="mt-12 md:mt-14 flex items-center gap-2">
              {TESTIMONIALS.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setIndex(i)}
                  aria-label={`Show testimonial ${i + 1}`}
                  className={`h-px transition-all duration-500 ${
                    i === index
                      ? "w-10 bg-cream"
                      : "w-6 bg-cream/25 hover:bg-cream/50"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
