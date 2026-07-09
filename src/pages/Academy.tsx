import PageTransition from "../components/layout/PageTransition";
import PageIntro from "../components/layout/PageIntro";
import PillarList from "../components/layout/PillarList";
import CtaBand from "../components/layout/CtaBand";
import { motion } from "framer-motion";

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
            Learn. Implement. <span className="italic text-wheatLight">Scale.</span>
          </>
        }
        subtitle="Courses, workshops, templates, and resources to grow your business and your mind. Built by founders who are still shipping."
      />

      <PillarList
        eyebrow="Inside the academy"
        heading={<>Practical curriculum for practicing operators.</>}
        pillars={[
          {
            index: "01",
            title: "Courses",
            meta: "Step by step",
            body: "Step-by-step training for founders across marketing, systems, capital, and mindset. Watch, apply, ship.",
          },
          {
            index: "02",
            title: "Templates",
            meta: "Plug and play",
            body: "Plug-and-play tools that save weeks of blank-page work. Sales scripts, ad frameworks, ops docs, financial models.",
          },
          {
            index: "03",
            title: "Workshops",
            meta: "Live sessions",
            body: "Live training with practicing operators. Small, deliberate rooms where the questions get answered in full.",
          },
          {
            index: "04",
            title: "Community",
            meta: "Peer network",
            body: "Connect with other founders inside the ecosystem. Deals, warm introductions, and the kind of feedback that only comes from people who have done it.",
          },
        ]}
      />

      {/* POPULAR TOPICS — hairline chips, not cards */}
      <section className="py-32 md:py-48 border-t hairline bg-obsidian">
        <div className="container-editorial">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-14 items-end mb-16 md:mb-24">
            <div className="md:col-span-4">
              <p className="text-[10px] uppercase tracking-[0.35em] text-wheat mb-6">Curriculum</p>
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
                className="inline-flex items-center gap-2 px-5 py-3 border hairline-strong text-cream/90 text-sm md:text-base hover:border-wheat hover:text-wheat transition-colors duration-300 cursor-default"
              >
                <span className="text-wheat/80 text-[10px]">
                  {String(i + 1).padStart(2, "0")}
                </span>
                {t}
              </motion.span>
            ))}
          </div>

          <p className="mt-20 md:mt-28 font-serif italic text-mist text-lg max-w-lg">
            New material added on a monthly cadence, released to members first.
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
