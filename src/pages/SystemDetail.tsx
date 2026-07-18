import { useParams, Link, Navigate } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import PageTransition from "../components/layout/PageTransition";
import PillBadge from "../components/layout/PillBadge";
import { SYSTEMS_DATA } from "../data/systems";

/**
 * Editorial detail page for a JDLO-shipped system.
 *
 * The value here is the WRITEUP, not the click-through. Reader should
 * understand what the system does, how it's built, and what problem it
 * solves without ever visiting the live product.
 *
 * Content lives in /src/data/systems.ts — this file is the layout.
 */
export default function SystemDetail() {
  const { slug } = useParams<{ slug: string }>();
  const system = slug ? SYSTEMS_DATA[slug] : undefined;

  if (!system) {
    return <Navigate to="/growth" replace />;
  }

  return (
    <PageTransition>
      {/* HERO */}
      <section className="relative pt-32 md:pt-40 pb-16 md:pb-24 grain overflow-hidden">
        <div
          aria-hidden
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(1200px 500px at 25% 25%, rgba(232,226,211,0.05), transparent 60%), radial-gradient(900px 400px at 75% 65%, rgba(232,226,211,0.03), transparent 60%)",
          }}
        />

        <div className="container-editorial relative">
          {/* Back link */}
          <Link
            to="/growth"
            className="inline-flex items-center gap-2 text-[10px] uppercase tracking-[0.3em] text-mist hover:text-cream transition-colors duration-300 mb-16 md:mb-24"
          >
            <ArrowLeft size={14} />
            All Systems
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-14 lg:gap-20 items-start">
            {/* Left: hero copy */}
            <div className="lg:col-span-8">
              <motion.p
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, ease: [0.19, 1, 0.22, 1] }}
                className="text-[10px] uppercase tracking-[0.35em] text-bone mb-8"
              >
                {system.niche}
              </motion.p>

              <motion.h1
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9, delay: 0.1, ease: [0.19, 1, 0.22, 1] }}
                className="font-serif text-display-lg text-cream max-w-[16ch] text-balance leading-[0.98]"
              >
                {system.name}.
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9, delay: 0.2, ease: [0.19, 1, 0.22, 1] }}
                className="mt-8 md:mt-10 font-serif italic text-mist text-2xl md:text-3xl max-w-[26ch] leading-[1.15]"
              >
                {system.tagline}
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9, delay: 0.3, ease: [0.19, 1, 0.22, 1] }}
                className="mt-10 md:mt-14 max-w-[62ch] text-lg md:text-xl text-mist leading-[1.55] text-pretty"
              >
                {system.pitch}
              </motion.p>
            </div>

            {/* Right: at-a-glance panel */}
            <motion.aside
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.35, ease: [0.19, 1, 0.22, 1] }}
              className="lg:col-span-4 lg:sticky lg:top-32"
            >
              <div className="border hairline-strong p-8 md:p-10 bg-obsidian/30">
                <p className="text-[10px] uppercase tracking-[0.3em] text-bone mb-8">
                  At a glance
                </p>

                <dl className="space-y-6">
                  <div>
                    <dt className="text-[10px] uppercase tracking-[0.28em] text-mist mb-2">
                      Built for
                    </dt>
                    <dd className="font-serif text-cream text-lg leading-snug">
                      {system.atAGlance.builtFor}
                    </dd>
                  </div>
                  <div>
                    <dt className="text-[10px] uppercase tracking-[0.28em] text-mist mb-2">
                      Role
                    </dt>
                    <dd className="font-serif text-cream text-lg leading-snug">
                      {system.atAGlance.role}
                    </dd>
                  </div>
                  <div>
                    <dt className="text-[10px] uppercase tracking-[0.28em] text-mist mb-2">
                      Status
                    </dt>
                    <dd className="font-serif text-cream text-lg leading-snug">
                      {system.atAGlance.status}
                    </dd>
                  </div>
                </dl>

                <div className="mt-10 pt-8 border-t hairline flex flex-wrap gap-2">
                  <PillBadge href="https://jdlo.site">JDLO AI</PillBadge>
                  <PillBadge>Live in Production</PillBadge>
                </div>
              </div>
            </motion.aside>
          </div>
        </div>
      </section>

      {/* SCREENSHOT — substantial visual, mid-hero */}
      <section className="py-16 md:py-24">
        <div className="container-editorial">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: [0.19, 1, 0.22, 1] }}
            className="relative border hairline-strong overflow-hidden aspect-[16/10] bg-obsidian"
          >
            <img
              src={system.image}
              alt={`${system.name} — product preview`}
              loading="lazy"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 grain pointer-events-none" />
          </motion.div>
          <p className="mt-6 text-[10px] uppercase tracking-[0.3em] text-mist">
            {system.liveDomain}
          </p>
        </div>
      </section>

      {/* THE PROBLEM */}
      <Section eyebrow="The problem" heading="What it was built to solve.">
        <div className="space-y-8 max-w-[62ch]">
          {system.problem.map((p, i) => (
            <p key={i} className="text-lg md:text-xl text-mist leading-[1.6] text-pretty">
              {p}
            </p>
          ))}
        </div>
      </Section>

      {/* THE SOLUTION */}
      <Section eyebrow="The solution" heading="How it actually works." dark>
        <div className="space-y-8 max-w-[62ch]">
          {system.solution.map((p, i) => (
            <p key={i} className="text-lg md:text-xl text-mist leading-[1.6] text-pretty">
              {p}
            </p>
          ))}
        </div>
      </Section>

      {/* CAPABILITIES / WHAT IT DOES */}
      <Section eyebrow="What it does" heading="Capabilities in production.">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-14 md:gap-y-20">
          {system.capabilities.map((c, i) => (
            <motion.div
              key={c.heading}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.7, delay: (i % 2) * 0.05, ease: [0.19, 1, 0.22, 1] }}
            >
              <p className="text-[10px] uppercase tracking-[0.3em] text-mist mb-4">
                {String(i + 1).padStart(2, "0")}
              </p>
              <h3 className="font-serif text-cream text-2xl md:text-3xl leading-[1.1] tracking-tight max-w-[22ch]">
                {c.heading}
              </h3>
              <p className="mt-5 text-base md:text-lg text-mist leading-[1.6] text-pretty max-w-[46ch]">
                {c.body}
              </p>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* UNDER THE HOOD / STACK */}
      <Section eyebrow="Under the hood" heading="How it's built." dark>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-14">
          <div className="md:col-span-4">
            <p className="font-serif italic text-mist text-lg md:text-xl leading-[1.5] max-w-[32ch]">
              Real code, real infrastructure. Every layer picked for the specific
              job the system does — not a generic stack dropped into a specific
              problem.
            </p>
          </div>
          <div className="md:col-span-8">
            <div className="border-t hairline">
              {system.stack.map((s) => (
                <div
                  key={s.label}
                  className="grid grid-cols-1 md:grid-cols-12 gap-6 py-8 md:py-10 border-b hairline"
                >
                  <div className="md:col-span-3">
                    <p className="text-[10px] uppercase tracking-[0.3em] text-bone">
                      {s.label}
                    </p>
                  </div>
                  <div className="md:col-span-9">
                    <p className="text-base md:text-lg text-mist leading-[1.55] text-pretty">
                      {s.detail}
                    </p>
                    {s.confirmWithJp && (
                      <p className="mt-3 text-[10px] uppercase tracking-[0.3em] text-cream/40">
                        Reach out to confirm exact stack
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* RESULTS */}
      <Section eyebrow="Results" heading="What success looks like.">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-14">
          <div className="md:col-span-5">
            <p className="text-lg md:text-xl text-mist leading-[1.6] text-pretty max-w-[38ch]">
              {system.results.intro}
            </p>
            <p className="mt-8 text-[10px] uppercase tracking-[0.3em] text-cream/40 max-w-[38ch] leading-[1.6]">
              Numeric results below are held as placeholders until JP verifies
              them from production data.
            </p>
          </div>
          <div className="md:col-span-7">
            <div className="border-t border-l hairline grid grid-cols-1">
              {system.results.slots.map((slot) => (
                <div
                  key={slot.label}
                  className="border-r border-b hairline p-8 md:p-10 grid grid-cols-1 md:grid-cols-12 gap-4 items-baseline"
                >
                  <div className="md:col-span-8">
                    <p className="text-[10px] uppercase tracking-[0.3em] text-mist">
                      {slot.label}
                    </p>
                    {slot.note && (
                      <p className="mt-3 text-sm text-mist/70 leading-[1.5] text-pretty max-w-[36ch]">
                        {slot.note}
                      </p>
                    )}
                  </div>
                  <div className="md:col-span-4 md:text-right">
                    <p className="font-serif text-cream text-4xl md:text-5xl leading-none tracking-tight">
                      {slot.value}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* SEE IT LIVE — understated footer link */}
      <section className="py-24 md:py-32 border-t hairline">
        <div className="container-editorial">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-10">
            <div>
              <p className="text-[10px] uppercase tracking-[0.3em] text-bone mb-6">
                Live in production
              </p>
              <p className="font-serif text-cream text-3xl md:text-4xl leading-[1.05] max-w-[28ch]">
                Want to see {system.name} running for real?
              </p>
            </div>

            <a
              href={system.liveHref}
              target="_blank"
              rel="noreferrer noopener"
              className="group inline-flex items-center gap-3 self-start md:self-auto border hairline-strong px-6 py-4 text-[11px] uppercase tracking-[0.24em] text-cream hover:border-cream transition-colors duration-300"
            >
              See it live
              <ArrowUpRight
                size={14}
                className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300"
              />
            </a>
          </div>

          <p className="mt-14 text-[10px] uppercase tracking-[0.3em] text-mist">
            {system.liveDomain}
          </p>
        </div>
      </section>

      {/* JDLO CREDIT + BACK */}
      <section className="py-16 md:py-24 border-t hairline">
        <div className="container-editorial flex flex-col md:flex-row md:items-center md:justify-between gap-8">
          <Link
            to="/growth"
            className="inline-flex items-center gap-2 text-[10px] uppercase tracking-[0.3em] text-mist hover:text-cream transition-colors duration-300"
          >
            <ArrowLeft size={14} />
            All Systems
          </Link>
          <p className="text-[10px] uppercase tracking-[0.35em] text-mist">
            Built by{" "}
            <a
              href="https://jdlo.site"
              target="_blank"
              rel="noreferrer noopener"
              className="text-cream border-b border-cream/40 hover:border-cream transition-colors pb-0.5"
            >
              JDLO AI
            </a>
          </p>
        </div>
      </section>
    </PageTransition>
  );
}

/**
 * Editorial section wrapper — eyebrow + heading + body content.
 * `dark` gives it the obsidian band background used for section rhythm.
 */
function Section({
  eyebrow,
  heading,
  children,
  dark = false,
}: {
  eyebrow: string;
  heading: string;
  children: React.ReactNode;
  dark?: boolean;
}) {
  return (
    <section
      className={`py-24 md:py-32 border-t hairline ${dark ? "bg-obsidian" : ""}`}
    >
      <div className="container-editorial">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 mb-14 md:mb-20 items-end">
          <div className="md:col-span-4">
            <p className="text-[10px] uppercase tracking-[0.35em] text-bone">
              {eyebrow}
            </p>
          </div>
          <div className="md:col-span-8">
            <motion.h2
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.9, ease: [0.19, 1, 0.22, 1] }}
              className="font-serif text-display-md text-cream max-w-[22ch] text-balance leading-[1.02]"
            >
              {heading}
            </motion.h2>
          </div>
        </div>
        {children}
      </div>
    </section>
  );
}
