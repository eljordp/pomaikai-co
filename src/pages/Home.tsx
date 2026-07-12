import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import PageTransition from "../components/layout/PageTransition";
import PillBadge from "../components/layout/PillBadge";
import MetricsStrip from "../components/layout/MetricsStrip";
import TestimonialsBand from "../components/layout/TestimonialsBand";

const CATEGORIES = [
  { label: "Marketing", meta: "Websites · Content · Ads", href: "/marketing" },
  { label: "Capital", meta: "0% Funding · Strategy", href: "/capital" },
  { label: "Coaching", meta: "Mindset · Mentorship", href: "/coaching" },
  { label: "Academy", meta: "Courses · Community", href: "/academy" },
  { label: "Partners", meta: "Advisory · Inner Circle", href: "/partners" },
  { label: "Membership", meta: "$500/mo · All-in", href: "/partners" },
];

const CHIPS = [
  { label: "Website", to: "/marketing" },
  { label: "AI Systems", to: "/marketing" },
  { label: "Marketing", to: "/marketing" },
  { label: "Funding", to: "/capital" },
  { label: "Coaching", to: "/coaching" },
  { label: "Just Curious", to: "/academy" },
] as const;

export default function Home() {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const heroY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const heroOpacity = useTransform(scrollYProgress, [0, 1], [1, 0.4]);

  const navigate = useNavigate();
  const [picked, setPicked] = useState<string | null>(null);

  const handlePick = (chip: (typeof CHIPS)[number]) => {
    setPicked(chip.label);
    // Small delay so the pill highlight lands before route change.
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
          <div
            className="absolute inset-0"
            style={{
              background:
                "radial-gradient(1400px 700px at 15% 15%, rgba(232,226,211,0.06), transparent 60%), radial-gradient(1200px 600px at 90% 90%, rgba(232,226,211,0.04), transparent 65%), linear-gradient(180deg, #0a0a0a 0%, #0a0a0a 60%, #0e0d0b 100%)",
            }}
          />
          <div className="absolute left-0 right-0 top-[62%] h-px rule opacity-60" />
        </motion.div>

        <div className="container-editorial relative pb-24 md:pb-32 pt-40 md:pt-56 w-full">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
            <div className="md:col-span-1 md:col-start-1 hidden md:block">
              <p className="text-[10px] uppercase tracking-[0.35em] text-mist rotate-180 [writing-mode:vertical-rl]">
                Est. 2024 · Hawai&rsquo;i
              </p>
            </div>
            <div className="md:col-span-11">
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: [0.19, 1, 0.22, 1] }}
                className="mb-10 flex flex-wrap items-center gap-3"
              >
                <PillBadge>Pomaika&rsquo;i Ecosystem</PillBadge>
                <PillBadge>Big Island Based</PillBadge>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.1, ease: [0.19, 1, 0.22, 1] }}
                className="font-serif text-display-xl text-cream leading-[0.94] max-w-[14ch] text-balance"
              >
                Build your business.
                <br />
                <span className="italic text-cream">Build abundance.</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.3, ease: [0.19, 1, 0.22, 1] }}
                className="mt-12 md:mt-16 text-lg md:text-xl text-mist max-w-[42ch] leading-[1.55] text-pretty"
              >
                One roof. Every lever. Founders scaling with strategy, systems, and support.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.45, ease: [0.19, 1, 0.22, 1] }}
                className="mt-14 md:mt-20 flex flex-wrap items-center gap-6"
              >
                <a
                  href="#survey"
                  className="group inline-flex items-center gap-3 text-ink bg-cream px-7 py-4 text-[11px] uppercase tracking-[0.24em] hover:bg-bone transition-colors duration-300"
                >
                  Start Here
                  <ArrowDown size={15} className="group-hover:translate-y-0.5 transition-transform duration-300" />
                </a>
                <a
                  href="#ecosystem"
                  className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.24em] text-cream/85 hover:text-cream transition-colors duration-300 underline underline-offset-8 decoration-cream/20 hover:decoration-cream/70"
                >
                  See the Ecosystem
                  <ArrowUpRight size={15} />
                </a>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* ROTATING TESTIMONIALS BAND — 7 restrained placeholders, auto-rotates every 8s.
          Malachi to send 7 real quotes with names + consent. Replace placeholders
          in `src/data/testimonials.ts` once approved. */}
      <TestimonialsBand />

      {/* METRICS STRIP — honest only */}
      <MetricsStrip />

      {/* ECOSYSTEM CATEGORIES */}
      <section id="ecosystem" className="relative border-t hairline">
        <div className="container-editorial">
          <div className="grid grid-cols-1 md:grid-cols-12 py-8 md:py-10 items-center border-b hairline">
            <p className="md:col-span-4 text-[10px] uppercase tracking-[0.35em] text-mist">
              The Ecosystem
            </p>
            <p className="md:col-span-8 mt-3 md:mt-0 text-cream/80 font-serif italic text-lg">
              Six practices. One operating system.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-6">
            {CATEGORIES.map((c, i) => (
              <motion.a
                key={c.label}
                href={c.href}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.05, ease: [0.19, 1, 0.22, 1] }}
                className="group py-10 md:py-16 px-4 md:px-6 border-r border-b hairline md:border-b-0 last:border-r-0 flex flex-col justify-between min-h-[180px] md:min-h-[220px] hover:bg-obsidian/60 transition-colors duration-500"
              >
                <span className="text-[10px] uppercase tracking-[0.28em] text-mist group-hover:text-cream transition-colors duration-500">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <p className="font-serif text-2xl md:text-3xl text-cream leading-[1.02] tracking-tight">
                    {c.label}
                  </p>
                  <p className="mt-1 font-serif italic text-mist text-sm md:text-base">
                    {c.meta}
                  </p>
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* SIMPLIFIED SURVEY — one question, chips */}
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
            <h2 className="mt-10 font-serif text-display-md text-cream text-balance leading-[1.02] max-w-[20ch] mx-auto">
              What are you looking to <span className="italic text-cream">build?</span>
            </h2>
            <p className="mt-10 text-mist text-lg leading-[1.6] max-w-[40ch] mx-auto">
              Pick one. We&rsquo;ll take you to the right room.
            </p>

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

            <p className="mt-16 text-[10px] uppercase tracking-[0.3em] text-mist">
              Not sure? Just pick the closest — you can wander the rest.
            </p>
          </div>
        </div>
      </section>

      {/* CLOSING NOTE */}
      <section className="py-32 md:py-44 border-t hairline">
        <div className="container-editorial">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-14">
            <div className="md:col-span-5">
              <p className="text-[10px] uppercase tracking-[0.35em] text-bone mb-8">
                From the founder
              </p>
            </div>
            <div className="md:col-span-7">
              <p className="font-serif text-2xl md:text-4xl text-cream leading-[1.15] text-balance">
                Pomaika&rsquo;i means{" "}
                <span className="italic text-cream">
                  good fortune, abundance, blessing.
                </span>{" "}
                We built the ecosystem so founders don&rsquo;t have to piece one together alone.
              </p>
              <p className="mt-10 text-mist italic font-serif text-lg">
                — Malachi, Founder
              </p>
            </div>
          </div>
        </div>
      </section>
    </PageTransition>
  );
}
