import { motion } from "framer-motion";

type Step = { title: string; body: string };

export default function StepList({
  eyebrow,
  heading,
  steps,
}: {
  eyebrow: string;
  heading: string;
  steps: Step[];
}) {
  return (
    <section className="py-32 md:py-48 bg-obsidian border-t hairline">
      <div className="container-editorial">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-14 mb-20 md:mb-28 items-end">
          <div className="md:col-span-4">
            <p className="text-[10px] uppercase tracking-[0.35em] text-bone mb-6">{eyebrow}</p>
          </div>
          <div className="md:col-span-8">
            <h2 className="font-serif text-display-md text-cream max-w-[16ch] text-balance">
              {heading}
            </h2>
          </div>
        </div>

        <ol className="divide-y hairline border-t hairline">
          {steps.map((s, i) => (
            <motion.li
              key={s.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, delay: i * 0.06, ease: [0.19, 1, 0.22, 1] }}
              className="group grid grid-cols-12 gap-6 md:gap-10 py-8 md:py-12 items-baseline"
            >
              <div className="col-span-2 md:col-span-1 font-serif italic text-mist text-lg md:text-xl">
                {String(i + 1).padStart(2, "0")}
              </div>
              <div className="col-span-10 md:col-span-3">
                <p className="font-serif text-2xl md:text-3xl text-cream group-hover:text-cream/70 transition-colors duration-500">
                  {s.title}
                </p>
              </div>
              <div className="col-span-12 md:col-span-8 md:col-start-5 text-mist text-base md:text-lg leading-[1.6] max-w-[52ch]">
                {s.body}
              </div>
            </motion.li>
          ))}
        </ol>
      </div>
    </section>
  );
}
