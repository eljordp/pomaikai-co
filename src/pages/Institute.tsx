import PageTransition from "../components/layout/PageTransition";
import PageIntro from "../components/layout/PageIntro";
import PillarList from "../components/layout/PillarList";
import CtaBand from "../components/layout/CtaBand";
import PillBadge from "../components/layout/PillBadge";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

/**
 * INSTITUTE — replaces the old /academy page.
 * Content per Malachi 2026-07-17.
 * Malachi's rough draft had a double-numbered 04 in the curriculum list.
 * Renumbered cleanly 01–11 here.
 */
const TOPICS = [
  "Branding",
  "Marketing",
  "Sales",
  "Conversions",
  "AI Systems",
  "Mindset",
  "Efficiency",
  "Operations",
  "Skillsets",
  "Leverage",
  "Finance",
];

export default function Institute() {
  return (
    <PageTransition>
      <PageIntro
        eyebrow="Institute"
        title={
          <>
            Learn. Know. <span className="italic text-cream">Grow.</span>
          </>
        }
        subtitle="Courses, workshops, templates, advisory, community. Everything necessary to support your growth."
      />

      {/* INTUITION INNER TEACHING — inner circle callout */}
      <section className="relative border-t hairline overflow-hidden">
        <div
          aria-hidden
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(1000px 500px at 80% 30%, rgba(232,226,211,0.05), transparent 60%)",
          }}
        />
        <div className="container-editorial relative py-32 md:py-44">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-14 items-start">
            <div className="md:col-span-5">
              <div className="flex flex-wrap gap-3 mb-8">
                <PillBadge>Inner Circle</PillBadge>
                <PillBadge>Waitlist Only</PillBadge>
              </div>
              <h2 className="font-serif text-display-md text-cream leading-[1.02] tracking-tight text-balance">
                Intuition.{" "}
                <span className="italic text-cream">
                  Inner Teaching, Inner Guidance.
                </span>
              </h2>
            </div>
            <div className="md:col-span-7">
              <p className="font-serif text-2xl md:text-3xl text-cream leading-[1.2] text-balance">
                Weekly broadcast. Direct access. Library of knowledge.
              </p>
              <div className="mt-10 flex flex-wrap items-baseline gap-4">
                <span className="font-serif text-4xl md:text-5xl text-cream tracking-tight">
                  $500
                </span>
                <span className="text-mist text-lg">/ month · partnership</span>
              </div>
              <div className="mt-12">
                <a
                  href="mailto:info@pomaikai.co?subject=Intuition%20Waitlist"
                  className="group inline-flex items-center gap-3 text-ink bg-cream px-8 py-4 text-[11px] uppercase tracking-[0.24em] hover:bg-bone transition-colors duration-300"
                >
                  Join the Waitlist
                  <ArrowUpRight size={16} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <PillarList
        eyebrow="Inside look"
        heading={
          <>
            <span className="italic text-cream">Practice real-life application</span> of knowledge.
          </>
        }
        pillars={[
          {
            index: "01",
            title: "Education",
            meta: "Courses · Workshops",
            body: "Courses, workshops.",
          },
          {
            index: "02",
            title: "Application",
            meta: "Science-backed",
            body: "Science-backed application of acquired knowledge.",
          },
          {
            index: "03",
            title: "Community",
            meta: "Founders · Curriculum",
            body: "Direct access to founders, courses, curriculum, opportunities.",
          },
        ]}
      />

      {/* CURRICULUM — 11 topics, cleanly renumbered */}
      <section className="py-32 md:py-48 border-t hairline bg-obsidian">
        <div className="container-editorial">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-14 items-end mb-16 md:mb-24">
            <div className="md:col-span-4">
              <p className="text-[10px] uppercase tracking-[0.35em] text-bone mb-6">
                Curriculum
              </p>
            </div>
            <div className="md:col-span-8">
              <h2 className="font-serif text-display-md text-cream max-w-[18ch] text-balance leading-[1.02]">
                The foundational topics.
              </h2>
            </div>
          </div>

          <div className="flex flex-wrap gap-3 md:gap-4">
            {TOPICS.map((t, i) => (
              <motion.span
                key={t}
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.05, ease: [0.19, 1, 0.22, 1] }}
                className="inline-flex items-center gap-2 px-5 py-3 border hairline-strong text-cream/90 text-sm md:text-base hover:border-cream hover:text-cream transition-colors duration-300 cursor-default"
              >
                <span className="text-cream/60 text-[10px]">
                  {String(i + 1).padStart(2, "0")}
                </span>
                {t}
              </motion.span>
            ))}
          </div>

          <p className="mt-20 md:mt-28 font-serif italic text-mist text-lg max-w-lg">
            New material added monthly. Members first.
          </p>
        </div>
      </section>

      <CtaBand
        eyebrow="The Library"
        title="Explore the Institute."
        ctaLabel="Explore Institute"
        href="#"
      />
    </PageTransition>
  );
}
