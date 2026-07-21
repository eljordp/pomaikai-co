import PageTransition from "../components/layout/PageTransition";
import PageIntro from "../components/layout/PageIntro";
import CtaBand from "../components/layout/CtaBand";
import { motion } from "framer-motion";

/**
 * PARTNERSHIPS — new page 2026-07-17.
 * Three tiers as hairline-divided editorial rows. Not a card grid.
 */

type Tier = {
  name: string;
  price: string;
  body: string;
  best: string;
};

const TIERS: Tier[] = [
  {
    name: "Build.",
    price: "Starting at $500/month",
    body: "Foundation. Strategic guidance. Essential growth systems. Ongoing support.",
    best: "Founders establishing systems.",
  },
  {
    name: "Grow.",
    price: "Starting at $1,000/month",
    body: "Momentum. Expanded strategy, implementation, and tools designed to create consistent momentum.",
    best: "Founders past product-market fit.",
  },
  {
    name: "Scale.",
    price: "Starting at $2,500/month",
    body: "Scalable systems. Implementation, marketing, AI, and long-term business growth.",
    best: "Founders scaling ops.",
  },
];

const SERVICES = [
  "Business Strategy",
  "Brand Development",
  "Website Design",
  "AI Integration",
  "Content Creation",
  "Marketing",
  "SEO",
  "CRM & Automation",
  "Executive Coaching",
  "Leadership Development",
  "Strategic Advisory",
  "Capital Guidance",
];

export default function Partnerships() {
  return (
    <PageTransition>
      <PageIntro
        eyebrow="Partnerships"
        title={
          <>
            Partnerships that <span className="italic text-cream">meet you</span> where you are.
          </>
        }
        subtitle="Three tiers. One ecosystem. All customized."
        video="/headers/partnerships.mp4"
      />

      {/* TIER ROWS */}
      <section className="py-24 md:py-32 border-t hairline">
        <div className="container-editorial">
          <div className="border-t hairline">
            {TIERS.map((t, i) => (
              <motion.article
                key={t.name}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.75, delay: i * 0.05, ease: [0.19, 1, 0.22, 1] }}
                className="grid grid-cols-12 gap-6 md:gap-10 py-14 md:py-20 border-b hairline hover:bg-obsidian/40 transition-colors duration-500"
              >
                <div className="col-span-2 md:col-span-1 pt-3">
                  <span className="font-serif italic text-mist text-lg">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>
                <div className="col-span-10 md:col-span-4">
                  <h2 className="font-serif text-4xl md:text-6xl text-cream leading-[1.02] tracking-tight">
                    {t.name}
                  </h2>
                  <p className="mt-4 text-[10px] uppercase tracking-[0.3em] text-bone/80">
                    {t.price}
                  </p>
                </div>
                <div className="col-span-12 md:col-span-6 md:col-start-7 flex flex-col justify-end gap-6">
                  <p className="text-mist text-lg leading-[1.55] max-w-[52ch] text-pretty">
                    {t.body}
                  </p>
                  <p className="text-[10px] uppercase tracking-[0.28em] text-cream/60">
                    Best for: <span className="text-cream/85">{t.best}</span>
                  </p>
                </div>
              </motion.article>
            ))}

            {/* Creative Finance — separate, more premium framing */}
            <motion.article
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.8, ease: [0.19, 1, 0.22, 1] }}
              className="grid grid-cols-12 gap-6 md:gap-10 py-14 md:py-20 border-b hairline"
            >
              <div className="col-span-2 md:col-span-1 pt-3">
                <span className="font-serif italic text-mist text-lg">04</span>
              </div>
              <div className="col-span-10 md:col-span-4">
                <h2 className="font-serif text-4xl md:text-6xl text-cream leading-[1.02] tracking-tight">
                  <span className="italic text-cream">Partner</span>
                </h2>
                <p className="mt-4 text-[10px] uppercase tracking-[0.3em] text-bone/80">
                  Creative Finance · Application only
                </p>
              </div>
              <div className="col-span-12 md:col-span-6 md:col-start-7 flex flex-col justify-end gap-6">
                <p className="text-mist text-lg leading-[1.55] max-w-[52ch] text-pretty">
                  A private advisory partnership for founders, executives, and
                  organizations seeking strategic guidance, leadership
                  development, capital planning, and long-term growth.
                </p>
              </div>
            </motion.article>
          </div>
        </div>
      </section>

      {/* SERVICES BAND */}
      <section className="py-32 md:py-44 border-t hairline bg-obsidian">
        <div className="container-editorial">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-14 mb-14 md:mb-20 items-end">
            <div className="md:col-span-4">
              <p className="text-[10px] uppercase tracking-[0.35em] text-bone mb-6">
                Every partnership is customized
              </p>
            </div>
            <div className="md:col-span-8">
              <h2 className="font-serif text-display-md text-cream max-w-[22ch] text-balance leading-[1.02]">
                May include.
              </h2>
            </div>
          </div>

          <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-y-4 md:gap-y-6 gap-x-10 border-t hairline pt-10">
            {SERVICES.map((s, i) => (
              <motion.li
                key={s}
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.6, delay: i * 0.03, ease: [0.19, 1, 0.22, 1] }}
                className="flex items-baseline gap-4 py-2 font-serif text-cream/85 text-lg md:text-xl"
              >
                <span className="font-serif italic text-mist text-sm w-6">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span>{s}</span>
              </motion.li>
            ))}
          </ul>
        </div>
      </section>

      <CtaBand
        eyebrow="Ready to partner?"
        title="Request access."
        ctaLabel="Request Access"
        href="mailto:info@pomaikai.co?subject=Partnership%20Request"
      />
    </PageTransition>
  );
}
