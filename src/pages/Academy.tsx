import PageTransition from "../components/layout/PageTransition";
import PageIntro from "../components/layout/PageIntro";
import PillarList from "../components/layout/PillarList";
import CtaBand from "../components/layout/CtaBand";
import PillBadge from "../components/layout/PillBadge";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const TOPICS = [
  "Branding",
  "Marketing",
  "Sales",
  "AI Systems",
  "Mindset",
  "Operations",
  "Finance",
  "Scaling",
];

export default function Academy() {
  return (
    <PageTransition>
      <PageIntro
        eyebrow="Academy"
        title={
          <>
            Learn. Implement. <span className="italic text-cream">Scale.</span>
          </>
        }
        subtitle="Courses, workshops, templates. Built by founders still shipping."
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
                Intuition <span className="italic text-cream">Inner Teaching.</span>
              </h2>
            </div>
            <div className="md:col-span-7">
              <p className="font-serif text-2xl md:text-3xl text-cream leading-[1.2] text-balance">
                The inner circle. Weekly broadcast. Direct access. A quiet room.
              </p>
              <div className="mt-10 flex flex-wrap items-baseline gap-4">
                <span className="font-serif text-4xl md:text-5xl text-cream tracking-tight">
                  $500
                </span>
                <span className="text-mist text-lg">/ month · membership</span>
              </div>
              <div className="mt-12">
                <a
                  href="mailto:hello@pomaikai.co?subject=Intuition%20Inner%20Teaching%20Waitlist"
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
        eyebrow="Inside the academy"
        heading={<>Practical curriculum for practicing operators.</>}
        pillars={[
          {
            index: "01",
            title: "Courses",
            meta: "Step by step",
            body: "Marketing, systems, capital, mindset. Watch, apply, ship.",
          },
          {
            index: "02",
            title: "Templates",
            meta: "Plug and play",
            body: "Sales scripts, ad frameworks, ops docs, financial models.",
          },
          {
            index: "03",
            title: "Workshops",
            meta: "Live sessions",
            body: "Small rooms, live training, real answers.",
          },
          {
            index: "04",
            title: "Community",
            meta: "Peer network",
            body: "Deals, warm intros, feedback from people who've done it.",
          },
        ]}
      />

      {/* POPULAR TOPICS */}
      <section className="py-32 md:py-48 border-t hairline bg-obsidian">
        <div className="container-editorial">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-14 items-end mb-16 md:mb-24">
            <div className="md:col-span-4">
              <p className="text-[10px] uppercase tracking-[0.35em] text-bone mb-6">Curriculum</p>
            </div>
            <div className="md:col-span-8">
              <h2 className="font-serif text-display-md text-cream max-w-[18ch] text-balance leading-[1.02]">
                Topics founders keep returning to.
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
        eyebrow="The library"
        title="Browse the Academy."
        ctaLabel="Browse Academy"
        href="mailto:hello@pomaikai.co?subject=Academy%20Access"
      />
    </PageTransition>
  );
}
