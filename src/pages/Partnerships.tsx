import PageTransition from "../components/layout/PageTransition";
import PageIntro from "../components/layout/PageIntro";
import CtaBand from "../components/layout/CtaBand";
import { motion } from "framer-motion";
import { Check } from "lucide-react";

/**
 * PARTNERSHIPS — five tiers per Malachi 2026-07-21 (was three).
 * Copy verbatim from his Partnership Page text. Each paid tier carries an
 * "Includes" list; Creative Finance Partner is application-only, no list.
 */

type Tier = {
  name: string;
  price: string;
  tagline: string;
  body: string;
  includes: string[];
};

const TIERS: Tier[] = [
  {
    name: "Build.",
    price: "$500 / month",
    tagline: "Build the foundation.",
    body: "Perfect for businesses establishing their brand, digital presence, and growth strategy.",
    includes: [
      "Strategy",
      "Branding",
      "Website Foundation",
      "Google Presence",
      "Social Media",
      "Growth Roadmap",
      "Institute Access",
    ],
  },
  {
    name: "Growth.",
    price: "$1,000 / month",
    tagline: "Build momentum.",
    body: "For businesses ready to accelerate growth through consistent implementation and optimization.",
    includes: [
      "Everything in Build",
      "SEO",
      "AI Integration",
      "CRM & Automations",
      "Content Strategy",
      "Analytics & Reporting",
      "Monthly Growth Planning",
    ],
  },
  {
    name: "Maintain.",
    price: "$2,500 / month",
    tagline: "Operate with consistency.",
    body: "A fully managed partnership focused on maintaining, improving, and optimizing every aspect of your business's growth engine.",
    includes: [
      "Everything in Growth",
      "Done-for-You Marketing",
      "Content Production",
      "Website Management",
      "AI Improvements",
      "Systems Optimization",
      "Priority Support",
      "Weekly Strategy",
    ],
  },
  {
    name: "Frequency.",
    price: "$5,000 / month",
    tagline: "Maximum momentum.",
    body: "A high-frequency partnership designed for organizations committed to rapid execution, continuous optimization, and aggressive growth.",
    includes: [
      "Everything in Maintain",
      "Multiple Content Days",
      "Rapid Implementation",
      "Advanced AI Systems",
      "Executive Strategy",
      "Priority Response",
      "Custom Growth Initiatives",
      "Dedicated Partnership",
    ],
  },
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
        subtitle="Five tiers. One ecosystem. All customized."
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
                  <p className="mt-6 font-serif italic text-cream/85 text-xl md:text-2xl">
                    {t.tagline}
                  </p>
                </div>
                <div className="col-span-12 md:col-span-6 md:col-start-7 flex flex-col justify-start gap-7">
                  <p className="text-mist text-lg leading-[1.55] max-w-[52ch] text-pretty">
                    {t.body}
                  </p>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-2.5">
                    {t.includes.map((f) => (
                      <li
                        key={f}
                        className="flex items-baseline gap-3 text-cream/85 text-[15px]"
                      >
                        <Check size={14} className="shrink-0 translate-y-0.5 text-bone/70" />
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.article>
            ))}

            {/* Creative Finance Partner — application only, premium framing, no list */}
            <motion.article
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.8, ease: [0.19, 1, 0.22, 1] }}
              className="grid grid-cols-12 gap-6 md:gap-10 py-14 md:py-20 border-b hairline bg-obsidian/30"
            >
              <div className="col-span-2 md:col-span-1 pt-3">
                <span className="font-serif italic text-mist text-lg">05</span>
              </div>
              <div className="col-span-10 md:col-span-4">
                <h2 className="font-serif text-4xl md:text-6xl text-cream leading-[1.02] tracking-tight">
                  <span className="italic text-cream">Creative Finance</span>
                </h2>
                <p className="mt-4 text-[10px] uppercase tracking-[0.3em] text-bone/80">
                  Partner · Application only
                </p>
              </div>
              <div className="col-span-12 md:col-span-6 md:col-start-7 flex flex-col justify-start gap-6">
                <p className="text-mist text-lg leading-[1.55] max-w-[52ch] text-pretty">
                  Designed for founders and businesses with exceptional long-term
                  potential. Qualified partners may receive creative financing,
                  phased payments, equity partnerships, strategic investment, or
                  other customized structures aligned with mutual growth.
                </p>
              </div>
            </motion.article>
          </div>
        </div>
      </section>

      {/* PHILOSOPHY BAND */}
      <section className="py-32 md:py-44 border-t hairline bg-obsidian">
        <div className="container-editorial">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-14 items-start">
            <div className="md:col-span-4">
              <p className="text-[10px] uppercase tracking-[0.35em] text-bone mb-6">
                Our Philosophy
              </p>
            </div>
            <div className="md:col-span-8">
              <p className="font-serif text-2xl md:text-4xl text-cream leading-[1.15] text-balance max-w-[30ch]">
                Every partnership is customized to your goals and supported by the
                Pōmaika&rsquo;i ecosystem.
              </p>
              <p className="mt-8 text-[10px] uppercase tracking-[0.3em] text-mist">
                Growth · Leadership · Capital · Institute · Collective
              </p>
            </div>
          </div>
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
