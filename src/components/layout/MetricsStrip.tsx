import { motion } from "framer-motion";

type Metric = { value: string; label: string };

/**
 * Honest metrics only. No fabricated stats (no "217% ROI" nonsense).
 */
const DEFAULT_METRICS: Metric[] = [
  { value: "50+", label: "Sites Shipped" },
  { value: "Founder-Led", label: "Ecosystem" },
  { value: "Big Island", label: "Based" },
  { value: "1 Roof", label: "Every Lever" },
];

export default function MetricsStrip({ metrics = DEFAULT_METRICS }: { metrics?: Metric[] }) {
  return (
    <section className="border-t border-b hairline">
      <div className="container-editorial">
        <div className="grid grid-cols-2 md:grid-cols-4">
          {metrics.map((m, i) => (
            <motion.div
              key={m.label}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.05, ease: [0.19, 1, 0.22, 1] }}
              className="py-12 md:py-20 px-6 md:px-10 border-r hairline last:border-r-0 [&:nth-child(2)]:border-r-0 md:[&:nth-child(2)]:border-r"
            >
              <p className="font-serif text-4xl md:text-6xl text-cream leading-[0.95] tracking-tight">
                {m.value}
              </p>
              <p className="mt-4 md:mt-6 text-[10px] uppercase tracking-[0.3em] text-mist">
                {m.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
