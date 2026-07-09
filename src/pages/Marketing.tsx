import PageTransition from "../components/layout/PageTransition";
import PageIntro from "../components/layout/PageIntro";
import ProjectGrid from "../components/layout/ProjectGrid";
import IGTile from "../components/layout/IGTile";
import CtaBand from "../components/layout/CtaBand";
import PillBadge from "../components/layout/PillBadge";
import { motion } from "framer-motion";

export default function Marketing() {
  return (
    <PageTransition>
      <PageIntro
        eyebrow="Marketing"
        title={
          <>
            Marketing that <span className="italic text-cream">actually ships.</span>
          </>
        }
        subtitle="Websites, content, ads, AI. Real work, real founders."
      />

      {/* PORTFOLIO GRID — the centerpiece */}
      <ProjectGrid />

      {/* IG-POST-STYLE CASE STUDY TILES */}
      <section className="py-32 md:py-44 border-t hairline bg-obsidian">
        <div className="container-editorial">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-14 mb-16 md:mb-24 items-end">
            <div className="md:col-span-4">
              <p className="text-[10px] uppercase tracking-[0.35em] text-bone mb-6">
                Field notes
              </p>
            </div>
            <div className="md:col-span-8">
              <h2 className="font-serif text-display-md text-cream max-w-[18ch] text-balance leading-[1.02]">
                Case studies. Built in public.
              </h2>
            </div>
          </div>

          {/*
            PLACEHOLDER: These are IG-post-styled tiles, NOT real embeds.
            Handle @pomaikaico is a placeholder until real IG accounts are wired.
            Swap in real oEmbed markup once the accounts exist.
          */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            <IGTile
              index={0}
              title="Waimea Lamb Co."
              caption="Family ranch. Full storefront. Shipped in a weekend."
              badge="Case Study"
              href="https://waimea-lamb-co.vercel.app"
            />
            <IGTile
              index={1}
              title="Ace Venen"
              caption="Coach → offer → landing page → paid students."
              badge="Case Study"
              href="https://ace-venen-newage.vercel.app"
            />
            <IGTile
              index={2}
              title="Carusso Furniture"
              caption="Trades operator. Google Business ready. Quote flow live."
              badge="Case Study"
              href="https://carussos-restoration.vercel.app"
            />
          </div>

          <p className="mt-12 text-[10px] uppercase tracking-[0.3em] text-mist">
            IG embeds landing soon · @pomaikaico
          </p>
        </div>
      </section>

      {/* FOUR PRACTICES — condensed row */}
      <section className="py-32 md:py-44 border-t hairline">
        <div className="container-editorial">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-14 mb-16 md:mb-24 items-end">
            <div className="md:col-span-4">
              <p className="text-[10px] uppercase tracking-[0.35em] text-bone mb-6">
                What we build
              </p>
              <PillBadge>Built by JDLO AI</PillBadge>
            </div>
            <div className="md:col-span-8">
              <h2 className="font-serif text-display-md text-cream max-w-[16ch] text-balance leading-[1.02]">
                Four practices. One system.
              </h2>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-0 border-t border-l hairline">
            {[
              { label: "Websites", meta: "Design + Dev" },
              { label: "Content & Social", meta: "Voice + Cadence" },
              { label: "Ads & Lead Gen", meta: "Paid + Inbound" },
              { label: "AI Automation", meta: "Systems + Agents" },
            ].map((p, i) => (
              <motion.div
                key={p.label}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.7, delay: i * 0.05, ease: [0.19, 1, 0.22, 1] }}
                className="group flex flex-col justify-between p-10 md:p-14 border-r border-b hairline min-h-[220px] md:min-h-[280px] hover:bg-obsidian/40 transition-colors duration-500"
              >
                <span className="text-[10px] uppercase tracking-[0.28em] text-mist">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <p className="font-serif text-4xl md:text-6xl text-cream leading-[1.02] tracking-tight">
                    {p.label}
                  </p>
                  <p className="mt-4 text-[10px] uppercase tracking-[0.3em] text-mist">
                    {p.meta}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CtaBand
        eyebrow="Ready to ship"
        title="Let's build your next site."
        ctaLabel="Start a project"
        href="mailto:hello@pomaikai.co?subject=Marketing%20Packages"
      />
    </PageTransition>
  );
}
