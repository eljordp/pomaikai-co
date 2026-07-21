import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import PageTransition from "../components/layout/PageTransition";
import PillBadge from "../components/layout/PillBadge";
import MetricsStrip from "../components/layout/MetricsStrip";
import TestimonialsBand from "../components/layout/TestimonialsBand";

type EcosystemTile = {
  index: string;
  label: string;
  meta: string;
  href: string;
};

const ECOSYSTEM: EcosystemTile[] = [
  { index: "01", label: "Growth", meta: "Marketing · Websites · Ads · AI", href: "/growth" },
  { index: "02", label: "Leadership", meta: "Mindset · 1:1 Coaching", href: "/leadership" },
  { index: "03", label: "Capital", meta: "Freedom · 0% Funding · Strategy", href: "/capital" },
  { index: "04", label: "Institute", meta: "Community · Courses · Development", href: "/institute" },
  { index: "05", label: "Collective", meta: "Private Advisory · Inner Circle · Wealth Architecture", href: "/collective" },
  { index: "06", label: "Partnerships", meta: "Starting at $250/mo", href: "/partnerships" },
];

type Chip = { label: string; to: string };

const CHIPS: Chip[] = [
  { label: "Mentally", to: "/leadership" },
  { label: "Financially", to: "/growth" },
  { label: "Professionally", to: "/growth" },
  { label: "Emotionally", to: "/leadership" },
  { label: "Educationally", to: "/growth" },
  { label: "Spiritually", to: "/leadership" },
];

type Principle = { word: string; body: string };

const PRINCIPLES: Principle[] = [
  { word: "Aloha", body: "Lead with love and respect." },
  { word: "Pōmaika'i", body: "Create prosperity and opportunity." },
  { word: "Laulima", body: "Build together through community and cooperation." },
  { word: "Pono", body: "Do what is right. Maintain the balance." },
  { word: "Kuleana", body: "Take ownership and responsibility." },
  { word: "Ho'oulu", body: "Cultivate growth and increase." },
  { word: "Waiwai", body: "Create wealth, prosperity, true value, abundance." },
];

type Tier = {
  name: string;
  price: string;
  body: string;
  ghost?: boolean;
  meta?: string;
};

const TIERS: Tier[] = [
  {
    name: "Build.",
    price: "Starting at $500/month",
    body: "Build a strong foundation with strategic guidance, essential growth systems, and ongoing support.",
  },
  {
    name: "Grow.",
    price: "Starting at $1,000/month",
    body: "Accelerate your business with expanded strategy, implementation, and tools designed to create consistent momentum.",
  },
  {
    name: "Scale.",
    price: "Starting at $2,500/month",
    body: "A comprehensive partnership focused on scalable systems, implementation, marketing, AI, and long-term business growth.",
  },
];

const PARTNER_GHOST: Tier = {
  name: "Partner",
  price: "Creative Finance · Private Advisory",
  body: "A private advisory partnership for founders, executives, and organizations seeking strategic guidance, leadership development, capital planning, and long-term growth.",
  ghost: true,
};

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

export default function Home() {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const heroY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const heroOpacity = useTransform(scrollYProgress, [0, 1], [1, 0.4]);

  const navigate = useNavigate();
  const [picked, setPicked] = useState<string | null>(null);

  const handlePick = (chip: Chip) => {
    setPicked(chip.label);
    window.setTimeout(() => navigate(chip.to), 320);
  };

  return (
    <PageTransition>
      {/* HERO */}
      <section ref={heroRef} className="relative min-h-[100svh] flex items-end overflow-hidden grain">
        <motion.div
          style={{ y: heroY, opacity: heroOpacity }}
          className="absolute inset-0 pointer-events-none"
        >
          {/* Hawaiian valley header photo */}
          <img
            src="/hawaii-valley-hero.jpg"
            alt="Hawai'i valley — Pōmaika'i Co"
            className="absolute inset-0 w-full h-full object-cover"
            loading="eager"
          />
          {/* Editorial wash — dark enough to hold cream serif, light enough to see the mountains */}
          <div
            className="absolute inset-0"
            style={{
              background:
                "radial-gradient(1400px 700px at 15% 15%, rgba(232,226,211,0.05), transparent 60%), radial-gradient(1200px 600px at 90% 90%, rgba(232,226,211,0.03), transparent 65%), linear-gradient(180deg, rgba(10,10,10,0.35) 0%, rgba(10,10,10,0.55) 55%, rgba(10,10,10,0.82) 100%)",
            }}
          />
          <div className="absolute left-0 right-0 top-[62%] h-px rule opacity-60" />
        </motion.div>

        <div className="container-editorial relative pb-24 md:pb-32 pt-40 md:pt-56 w-full">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
            <div className="md:col-span-11">
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: [0.19, 1, 0.22, 1] }}
                className="mb-10"
              >
                <PillBadge>Pōmaika&rsquo;i Co</PillBadge>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.1, ease: [0.19, 1, 0.22, 1] }}
                className="font-serif text-display-xl text-cream leading-[0.94] max-w-[16ch] text-balance"
              >
                Built For <span className="italic text-cream">Hawai&rsquo;i.</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.3, ease: [0.19, 1, 0.22, 1] }}
                className="mt-12 md:mt-16 text-lg md:text-xl text-mist max-w-[44ch] leading-[1.55] text-pretty"
              >
                Helping Hawai&rsquo;i&rsquo;s businesses, creators, and
                entrepreneurs grow with confidence.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.45, ease: [0.19, 1, 0.22, 1] }}
                className="mt-14 md:mt-20 flex flex-col sm:flex-row sm:flex-wrap sm:items-center gap-4 sm:gap-6"
              >
                <a
                  href="#partnerships"
                  className="group inline-flex items-center justify-center sm:justify-start gap-3 text-ink bg-cream px-7 py-4 text-[11px] uppercase tracking-[0.24em] hover:bg-bone transition-colors duration-300"
                >
                  Partner With Us
                  <ArrowDown size={15} className="group-hover:translate-y-0.5 transition-transform duration-300" />
                </a>
                <a
                  href="#ecosystem"
                  className="inline-flex items-center justify-center sm:justify-start gap-2 text-[11px] uppercase tracking-[0.24em] text-cream/85 hover:text-cream transition-colors duration-300 underline underline-offset-8 decoration-cream/20 hover:decoration-cream/70"
                >
                  Enter The Ecosystem
                  <ArrowUpRight size={15} />
                </a>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* ROTATING TESTIMONIALS BAND — placeholders until Malachi sends real quotes.
          Sits directly below the hero per Malachi's July 17 note:
          "Reviews right off the bat, right below the header." */}
      <TestimonialsBand />

      {/* MEANING BAND — subtle single-line, hairline rule above */}
      <section className="border-t hairline">
        <div className="container-editorial py-8 md:py-10">
          <p className="font-serif italic text-cream/60 text-sm md:text-base tracking-wide">
            Pōmaika&rsquo;i: Blessedness. Good Fortune.
          </p>
        </div>
      </section>

      {/* METRICS STRIP */}
      <MetricsStrip />

      {/* ECOSYSTEM CATEGORIES */}
      <section id="ecosystem" className="relative border-t hairline">
        <div className="container-editorial">
          <div className="grid grid-cols-1 md:grid-cols-12 py-8 md:py-10 items-center border-b hairline">
            <p className="md:col-span-4 text-[10px] uppercase tracking-[0.35em] text-mist">
              The Ecosystem
            </p>
            <p className="md:col-span-8 mt-3 md:mt-0 text-cream/80 font-serif italic text-lg md:text-xl">
              Five pathways. One operating system.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3">
            {ECOSYSTEM.map((c, i) => (
              <motion.a
                key={c.label}
                href={c.href}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: (i % 3) * 0.05, ease: [0.19, 1, 0.22, 1] }}
                className="group py-14 md:py-24 px-6 md:px-10 border-r border-b hairline last:border-r-0 md:[&:nth-child(3n)]:border-r-0 flex flex-col justify-between min-h-[260px] md:min-h-[320px] hover:bg-obsidian/60 transition-colors duration-500"
              >
                <span className="text-[10px] uppercase tracking-[0.28em] text-mist group-hover:text-cream transition-colors duration-500">
                  {c.index}
                </span>
                <div>
                  <p className="font-serif text-3xl md:text-5xl text-cream leading-[1.02] tracking-tight">
                    {c.label}
                  </p>
                  <p className="mt-3 font-serif italic text-mist text-base md:text-lg max-w-[36ch]">
                    {c.meta}
                  </p>
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* START HERE — chip picker */}
      <section id="survey" className="relative py-32 md:py-48 border-t hairline overflow-hidden">
        <div
          aria-hidden
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(900px 400px at 80% 0%, rgba(232,226,211,0.04), transparent 60%)",
          }}
        />
        <div className="container-editorial relative">
          <div className="max-w-5xl mx-auto text-center">
            <PillBadge className="mx-auto">Start Here</PillBadge>
            <h2 className="mt-10 font-serif text-display-md text-cream text-balance leading-[1.02] max-w-[22ch] mx-auto">
              Where are you looking to{" "}
              <span className="italic text-cream">grow?</span>
            </h2>

            <div className="mt-16 md:mt-20 flex flex-wrap justify-center gap-3 md:gap-4">
              {CHIPS.map((chip, i) => {
                const isPicked = picked === chip.label;
                return (
                  <motion.button
                    key={chip.label}
                    onClick={() => handlePick(chip)}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.55, delay: i * 0.05, ease: [0.19, 1, 0.22, 1] }}
                    className={`px-6 py-4 border text-sm md:text-base uppercase tracking-[0.2em] transition-all duration-300 ${
                      isPicked
                        ? "bg-cream text-ink border-cream"
                        : "hairline-strong text-cream/90 hover:border-cream hover:text-cream"
                    }`}
                  >
                    {chip.label}
                  </motion.button>
                );
              })}
            </div>

            <p className="mt-16 text-mist text-sm md:text-base italic font-serif">
              Not sure? Just pick what feels right. We&rsquo;ll do the rest.
            </p>
          </div>
        </div>
      </section>

      {/* PŌMAIKA'I PRINCIPLES */}
      <section className="py-32 md:py-48 border-t hairline">
        <div className="container-editorial">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-14 mb-20 md:mb-28 items-end">
            <div className="md:col-span-4">
              <p className="text-[10px] uppercase tracking-[0.35em] text-bone mb-6">
                Pōmaika&rsquo;i Principles
              </p>
            </div>
            <div className="md:col-span-8">
              <h2 className="font-serif text-display-md text-cream max-w-[20ch] text-balance leading-[1.02]">
                Seven values. <span className="italic text-cream">One way of being.</span>
              </h2>
            </div>
          </div>

          <div className="border-t hairline">
            {PRINCIPLES.map((p, i) => (
              <motion.article
                key={p.word}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.7, delay: i * 0.04, ease: [0.19, 1, 0.22, 1] }}
                className="grid grid-cols-12 gap-6 md:gap-10 py-10 md:py-14 border-b hairline hover:bg-obsidian/30 transition-colors duration-500"
              >
                <div className="col-span-2 md:col-span-1 pt-2">
                  <span className="font-serif italic text-mist text-base">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>
                <div className="col-span-10 md:col-span-4">
                  <p className="font-serif italic text-3xl md:text-5xl text-cream leading-[1.05] tracking-tight">
                    {p.word}
                  </p>
                </div>
                <div className="col-span-12 md:col-span-6 md:col-start-7 text-mist text-lg md:text-xl leading-[1.55] max-w-[52ch] flex flex-col justify-end">
                  <p className="text-pretty">{p.body}</p>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* MISSION */}
      <section className="py-32 md:py-48 border-t hairline bg-obsidian">
        <div className="container-editorial">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-14 items-start">
            <div className="md:col-span-4">
              <p className="text-[10px] uppercase tracking-[0.35em] text-bone mb-6">
                Mission
              </p>
            </div>
            <div className="md:col-span-8">
              <p className="font-serif italic text-3xl md:text-5xl text-cream leading-[1.1] text-balance">
                To cultivate growth, create lasting value, empower people,
                businesses, and communities to flourish in abundance.
              </p>
              <p className="mt-12 md:mt-16 text-mist text-lg md:text-xl leading-[1.6] max-w-[62ch] text-pretty">
                At Pōmaika&rsquo;i, we know every business is at a different
                stage of growth. Our partnerships are designed to meet you
                where you are. Whether you&rsquo;re building a strong
                foundation, accelerating momentum, or scaling for long-term
                success. Every engagement is tailored to your unique goals and
                supported by our integrated ecosystem.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* PARTNERSHIP TIERS */}
      <section id="partnerships" className="py-32 md:py-48 border-t hairline">
        <div className="container-editorial">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-14 mb-20 md:mb-28 items-end">
            <div className="md:col-span-4">
              <p className="text-[10px] uppercase tracking-[0.35em] text-bone mb-6">
                Partnerships
              </p>
            </div>
            <div className="md:col-span-8">
              <h2 className="font-serif text-display-md text-cream max-w-[20ch] text-balance leading-[1.02]">
                Three tiers.{" "}
                <span className="italic text-cream">Meet you where you are.</span>
              </h2>
            </div>
          </div>

          {/* 3 vertical tier cards — IG-post-style tiles, side by side on desktop */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8">
            {TIERS.map((t, i) => (
              <motion.article
                key={t.name}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.75, delay: i * 0.08, ease: [0.19, 1, 0.22, 1] }}
                className="group relative flex flex-col justify-between min-h-[420px] md:min-h-[520px] p-10 md:p-12 border hairline-strong bg-obsidian/20 hover:bg-obsidian/50 transition-colors duration-500"
              >
                <div className="flex items-start justify-between">
                  <span className="font-serif italic text-mist text-base">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <ArrowUpRight
                    size={16}
                    className="text-cream/40 group-hover:text-cream/90 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-all duration-500"
                  />
                </div>

                <div className="mt-16">
                  <h3 className="font-serif text-4xl md:text-5xl text-cream leading-[1.02] tracking-tight">
                    {t.name}
                  </h3>
                  <p className="mt-5 text-[11px] uppercase tracking-[0.28em] text-mist">
                    {t.price}
                  </p>
                  <p className="mt-8 text-mist text-base md:text-lg leading-[1.6] text-pretty max-w-[38ch]">
                    {t.body}
                  </p>
                </div>
              </motion.article>
            ))}
          </div>

          {/* Ghost row — Creative Finance (stays as hairline row below the 3 cards) */}
          <div className="mt-10 md:mt-14 border-t hairline">
            <motion.article
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.8, ease: [0.19, 1, 0.22, 1] }}
              className="grid grid-cols-12 gap-6 md:gap-10 py-12 md:py-20 border-b hairline"
            >
              <div className="col-span-2 md:col-span-1 pt-3">
                <span className="font-serif italic text-mist text-lg">04</span>
              </div>
              <div className="col-span-10 md:col-span-4">
                <h3 className="font-serif text-4xl md:text-6xl text-cream/70 leading-[1.02] tracking-tight italic">
                  {PARTNER_GHOST.name}
                </h3>
                <p className="mt-4 text-[10px] uppercase tracking-[0.3em] text-bone/70">
                  {PARTNER_GHOST.price}
                </p>
              </div>
              <div className="col-span-12 md:col-span-6 md:col-start-7 text-mist text-lg leading-[1.55] max-w-[52ch] flex flex-col justify-end">
                <p className="text-pretty">{PARTNER_GHOST.body}</p>
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
                Services
              </p>
            </div>
            <div className="md:col-span-8">
              <p className="font-serif text-2xl md:text-3xl text-cream/90 max-w-[36ch] leading-[1.3] text-balance">
                Every partnership is customized and may include:
              </p>
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

      {/* CTA BAND */}
      <section className="relative py-36 md:py-52 border-t hairline overflow-hidden">
        <div
          aria-hidden
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(700px 320px at 50% 100%, rgba(232,226,211,0.06), transparent 60%)",
          }}
        />
        <div className="container-editorial relative text-center">
          <p className="text-[10px] uppercase tracking-[0.35em] text-bone mb-8">
            Partnership · $500/mo
          </p>
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.9, ease: [0.19, 1, 0.22, 1] }}
            className="font-serif text-display-md text-cream max-w-[22ch] mx-auto text-balance leading-[1.02]"
          >
            Build. <span className="italic text-cream">A foundation that lasts.</span>
          </motion.h2>
          <div className="mt-14 md:mt-20 flex justify-center">
            <a
              href="mailto:info@pomaikai.co?subject=Partnership%20Request"
              className="group inline-flex items-center gap-3 text-ink bg-cream px-8 py-4 text-[11px] uppercase tracking-[0.24em] hover:bg-bone transition-colors duration-300"
            >
              Request Access
              <ArrowUpRight size={16} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
            </a>
          </div>
        </div>
      </section>
    </PageTransition>
  );
}
