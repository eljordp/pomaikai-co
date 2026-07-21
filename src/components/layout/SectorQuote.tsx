import { motion } from "framer-motion";
import { testimonialFor, type Testimonial } from "../../data/testimonials";

/**
 * Single static testimonial directly under a sector page header.
 * Per Malachi 2026-07-20: header, then proof immediately underneath.
 * Quieter sibling of TestimonialsBand (which keeps rotating on Home).
 */
export default function SectorQuote({
  sector,
}: {
  sector: Testimonial["sector"];
}) {
  const t = testimonialFor(sector);
  if (!t) return null;

  return (
    <section aria-label="Testimonial" className="border-t hairline">
      <div className="container-editorial py-20 md:py-28">
        <motion.blockquote
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.9, ease: [0.19, 1, 0.22, 1] }}
          className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-14 items-start"
        >
          <div className="md:col-span-3">
            <p className="text-[10px] uppercase tracking-[0.35em] text-bone">
              From the room
            </p>
          </div>
          <div className="md:col-span-9">
            <p className="font-serif text-xl md:text-3xl text-cream leading-[1.25] tracking-tight text-balance max-w-[40ch]">
              <span className="italic text-cream/60">&ldquo;</span>
              {t.quote}
              <span className="italic text-cream/60">&rdquo;</span>
            </p>
            <footer className="mt-6 md:mt-8 flex flex-wrap items-baseline gap-x-4 gap-y-1">
              {t.name && (
                <cite className="not-italic text-[11px] uppercase tracking-[0.28em] text-cream/90">
                  {t.name}
                </cite>
              )}
              {t.role && (
                <span className="font-serif italic text-mist text-base">
                  ~{t.role}
                </span>
              )}
            </footer>
          </div>
        </motion.blockquote>
      </div>
    </section>
  );
}
