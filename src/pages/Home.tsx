import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import { useRef, useState } from "react";
import PageTransition from "../components/layout/PageTransition";

const CATEGORIES = [
  { label: "Websites", meta: "AI Systems", href: "/marketing" },
  { label: "Growth", meta: "Marketing", href: "/marketing" },
  { label: "0% Funding", meta: "Capital", href: "/capital" },
  { label: "Coaching", meta: "Mentorship", href: "/coaching" },
  { label: "Learning", meta: "Academy", href: "/academy" },
  { label: "Partners", meta: "Advisory", href: "/partners" },
];

const LOGOS = [
  "Waimea Lamb Co",
  "Kayy",
  "Downes Grounds",
  "ReesVIP",
  "LP5",
  "Sereno",
  "Taro Stewards",
];

export default function Home() {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const heroY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const heroOpacity = useTransform(scrollYProgress, [0, 1], [1, 0.4]);

  const [form, setForm] = useState({ industry: "", challenge: "", revenue: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // PLACEHOLDER: Wire up to Formspree or real endpoint later.
    setSubmitted(true);
  };

  return (
    <PageTransition>
      {/* HERO */}
      <section ref={heroRef} className="relative min-h-[100svh] flex items-end overflow-hidden grain">
        <motion.div
          style={{ y: heroY, opacity: heroOpacity }}
          className="absolute inset-0 pointer-events-none"
        >
          {/* Ambient gradient — matte black + wheat glow */}
          <div
            className="absolute inset-0"
            style={{
              background:
                "radial-gradient(1400px 700px at 15% 15%, rgba(184,146,90,0.14), transparent 60%), radial-gradient(1200px 600px at 90% 90%, rgba(184,146,90,0.08), transparent 65%), linear-gradient(180deg, #0a0a0a 0%, #0a0a0a 60%, #0e0d0b 100%)",
            }}
          />
          {/* Horizon line */}
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
              <motion.p
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: [0.19, 1, 0.22, 1] }}
                className="text-[10px] uppercase tracking-[0.35em] text-wheat mb-8"
              >
                The founder ecosystem
              </motion.p>

              <motion.h1
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.1, ease: [0.19, 1, 0.22, 1] }}
                className="font-serif text-display-xl text-cream leading-[0.94] max-w-[14ch] text-balance"
              >
                Build your business.
                <br />
                <span className="italic text-wheatLight">Build abundance.</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.3, ease: [0.19, 1, 0.22, 1] }}
                className="mt-12 md:mt-16 text-lg md:text-xl text-mist max-w-[46ch] leading-[1.55] text-pretty"
              >
                The all-in-one ecosystem for founders ready to scale with strategy,
                systems, and support. One roof. Every lever.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.45, ease: [0.19, 1, 0.22, 1] }}
                className="mt-14 md:mt-20 flex flex-wrap items-center gap-6"
              >
                <a
                  href="#survey"
                  className="group inline-flex items-center gap-3 text-ink bg-wheat px-7 py-4 text-[11px] uppercase tracking-[0.24em] hover:bg-wheatLight transition-colors duration-300"
                >
                  Take the Growth Survey
                  <ArrowDown size={15} className="group-hover:translate-y-0.5 transition-transform duration-300" />
                </a>
                <a
                  href="#ecosystem"
                  className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.24em] text-cream/85 hover:text-wheat transition-colors duration-300"
                >
                  Explore the ecosystem
                  <ArrowUpRight size={15} />
                </a>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* ECOSYSTEM CATEGORIES — hairline list, not cards */}
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
                <span className="text-[10px] uppercase tracking-[0.28em] text-mist group-hover:text-wheat transition-colors duration-500">
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

      {/* GROWTH SURVEY */}
      <section id="survey" className="relative py-32 md:py-48 border-t hairline overflow-hidden">
        <div
          aria-hidden
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(900px 400px at 80% 0%, rgba(184,146,90,0.09), transparent 60%)",
          }}
        />
        <div className="container-editorial relative">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-14 md:gap-20">
            <div className="md:col-span-5">
              <p className="text-[10px] uppercase tracking-[0.35em] text-wheat mb-8">
                Growth Survey
              </p>
              <h2 className="font-serif text-display-md text-cream text-balance leading-[1.02]">
                Where are you in your <span className="italic text-wheatLight">growth journey?</span>
              </h2>
              <p className="mt-10 text-mist text-lg leading-[1.6] max-w-[46ch]">
                Three questions. A custom roadmap. Thirty seconds of your time,
                a clearer picture of the next quarter.
              </p>
              <p className="mt-14 font-serif italic text-mist text-base">
                — Takes 30 seconds. No sales pitch.
              </p>
            </div>

            <div className="md:col-span-7">
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, ease: [0.19, 1, 0.22, 1] }}
                  className="border hairline p-12 md:p-16 bg-obsidian/60"
                >
                  <p className="text-[10px] uppercase tracking-[0.3em] text-wheat mb-6">
                    Roadmap Requested
                  </p>
                  <h3 className="font-serif text-3xl md:text-4xl text-cream leading-[1.05] text-balance">
                    Your roadmap is on the way.
                  </h3>
                  <p className="mt-8 text-mist text-lg leading-[1.55] max-w-[42ch]">
                    A member of the Pomaika&rsquo;i team will follow up within
                    24 hours with a tailored plan for your business.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-14">
                  {/* Q1 */}
                  <FormField
                    label="What describes your business?"
                    index="01"
                  >
                    <select
                      required
                      value={form.industry}
                      onChange={(e) => setForm({ ...form, industry: e.target.value })}
                      className="w-full bg-transparent border-b hairline-strong text-cream text-lg md:text-xl font-serif py-3 focus:outline-none focus:border-wheat transition-colors"
                    >
                      <option value="" disabled className="bg-ink">
                        Select your industry
                      </option>
                      {[
                        "Local service / trades",
                        "Retail / e-commerce",
                        "Hospitality / food",
                        "Agriculture / land",
                        "Professional services",
                        "Creator / media",
                        "Other",
                      ].map((v) => (
                        <option key={v} value={v} className="bg-ink">
                          {v}
                        </option>
                      ))}
                    </select>
                  </FormField>

                  {/* Q2 */}
                  <FormField
                    label="Biggest growth challenge?"
                    index="02"
                  >
                    <select
                      required
                      value={form.challenge}
                      onChange={(e) => setForm({ ...form, challenge: e.target.value })}
                      className="w-full bg-transparent border-b hairline-strong text-cream text-lg md:text-xl font-serif py-3 focus:outline-none focus:border-wheat transition-colors"
                    >
                      <option value="" disabled className="bg-ink">
                        Select your challenge
                      </option>
                      {[
                        "Leads and visibility",
                        "Systems and operations",
                        "Capital and cash flow",
                        "Team and delegation",
                        "Strategy and direction",
                      ].map((v) => (
                        <option key={v} value={v} className="bg-ink">
                          {v}
                        </option>
                      ))}
                    </select>
                  </FormField>

                  {/* Q3 */}
                  <FormField
                    label="Monthly revenue range?"
                    index="03"
                  >
                    <select
                      required
                      value={form.revenue}
                      onChange={(e) => setForm({ ...form, revenue: e.target.value })}
                      className="w-full bg-transparent border-b hairline-strong text-cream text-lg md:text-xl font-serif py-3 focus:outline-none focus:border-wheat transition-colors"
                    >
                      <option value="" disabled className="bg-ink">
                        Select your range
                      </option>
                      {[
                        "Pre-revenue",
                        "Under $10K / mo",
                        "$10K – $50K / mo",
                        "$50K – $150K / mo",
                        "$150K+ / mo",
                      ].map((v) => (
                        <option key={v} value={v} className="bg-ink">
                          {v}
                        </option>
                      ))}
                    </select>
                  </FormField>

                  <div className="pt-4">
                    <button
                      type="submit"
                      className="group inline-flex items-center gap-3 text-ink bg-wheat px-8 py-4 text-[11px] uppercase tracking-[0.24em] hover:bg-wheatLight transition-colors duration-300"
                    >
                      Get my roadmap
                      <ArrowUpRight
                        size={16}
                        className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300"
                      />
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* PROOF / LOGOS */}
      <section className="relative py-32 md:py-44 border-t hairline">
        <div className="container-editorial">
          <div className="text-center">
            <p className="text-[10px] uppercase tracking-[0.35em] text-wheat mb-8">
              Trusted across Hawai&rsquo;i
            </p>
            <h2 className="font-serif text-3xl md:text-5xl text-cream leading-[1.05] text-balance max-w-[24ch] mx-auto">
              Founders across the islands, building under one roof.
            </h2>
          </div>

          <div className="mt-24 md:mt-32">
            {/* Marquee logos */}
            <div className="relative overflow-hidden py-4 border-t border-b hairline">
              <motion.div
                initial={{ x: 0 }}
                animate={{ x: "-50%" }}
                transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
                className="flex whitespace-nowrap"
              >
                {[...LOGOS, ...LOGOS, ...LOGOS].map((l, i) => (
                  <div
                    key={l + i}
                    className="flex items-center gap-16 px-10 py-10 border-r hairline last:border-r-0"
                  >
                    <span className="font-serif italic text-2xl md:text-3xl text-cream/70 tracking-tight">
                      {l}
                    </span>
                  </div>
                ))}
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIAL — restrained placeholder */}
      <section className="py-32 md:py-48 border-t hairline bg-obsidian">
        <div className="container-editorial">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-[10px] uppercase tracking-[0.35em] text-wheat mb-10">
              Voices from the ecosystem
            </p>
            <blockquote className="font-serif text-3xl md:text-5xl text-cream leading-[1.08] tracking-tight text-balance">
              &ldquo;<span className="italic">Real testimonials rolling in.</span> Check
              back soon — we&rsquo;re shipping the first cohort of Pomaika&rsquo;i
              partners now.&rdquo;
            </blockquote>
            <p className="mt-14 text-[10px] uppercase tracking-[0.3em] text-mist">
              — The Pomaika&rsquo;i Team
            </p>
          </div>
        </div>
      </section>

      {/* CLOSING NOTE */}
      <section className="py-32 md:py-44 border-t hairline">
        <div className="container-editorial">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-14">
            <div className="md:col-span-5">
              <p className="text-[10px] uppercase tracking-[0.35em] text-wheat mb-8">
                A note from the founder
              </p>
            </div>
            <div className="md:col-span-7">
              <p className="font-serif text-2xl md:text-4xl text-cream leading-[1.15] text-balance">
                Pomaika&rsquo;i is Hawaiian for <span className="italic text-wheatLight">good fortune, abundance, blessing.</span>{" "}
                We built this ecosystem so founders don&rsquo;t have to piece one together
                alone.
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

function FormField({
  label,
  index,
  children,
}: {
  label: string;
  index: string;
  children: React.ReactNode;
}) {
  return (
    <div className="grid grid-cols-12 gap-4 items-baseline">
      <div className="col-span-2 md:col-span-1">
        <span className="font-serif italic text-mist text-base">{index}</span>
      </div>
      <div className="col-span-10 md:col-span-11">
        <label className="block text-[10px] uppercase tracking-[0.3em] text-mist mb-3">
          {label}
        </label>
        {children}
      </div>
    </div>
  );
}
