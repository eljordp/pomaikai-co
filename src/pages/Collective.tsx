import PageTransition from "../components/layout/PageTransition";
import PageIntro from "../components/layout/PageIntro";
import SectorQuote from "../components/layout/SectorQuote";
import PillarList from "../components/layout/PillarList";
import CtaBand from "../components/layout/CtaBand";

/**
 * COLLECTIVE — replaces the old /partners page.
 * Content per Malachi 2026-07-17.
 */
export default function Collective() {
  return (
    <PageTransition>
      <PageIntro
        eyebrow="Collective"
        title={
          <>
            <span className="italic text-cream">Inner Circle.</span>
          </>
        }
        subtitle="Private advisory. Strategic partnerships. Deal flow. Investment opportunities. Immeasurable growth. Wealth architecture."
        image={{ src: "/headers/collective.jpg", alt: "Riverfront promenade with a boat passing historic buildings" }}
      />

      <SectorQuote sector="collective" />

      <PillarList
        eyebrow="Grow with us"
        heading={
          <>
            <span className="italic text-cream">Laulima.</span> Many hands
            working together.
          </>
        }
        pillars={[
          {
            index: "01",
            title: "Private Advisory",
            meta: "Board-level guidance",
            body: "Board-level guidance. Quarterly reviews. Ongoing counsel. Network access.",
          },
          {
            index: "02",
            title: "Strategic Partnerships",
            meta: "Aligned operators",
            body: "Aligned operators. Deals. Equity opportunities. Value beyond capital.",
          },
          {
            index: "03",
            title: "Creative Finance",
            meta: "Law of circulation",
            body: `Personalized "creative" financed deals. Based upon value delivered. Law of circulation.`,
          },
        ]}
      />

      {/* CLOSING NOTE — Waiwai. */}
      <section className="py-32 md:py-44 border-t hairline bg-obsidian">
        <div className="container-editorial">
          <div className="max-w-4xl">
            <p className="text-[10px] uppercase tracking-[0.35em] text-bone mb-8">
              A note on partnership
            </p>
            <p className="font-serif text-3xl md:text-5xl text-cream leading-[1.08] text-balance">
              <span className="italic text-cream">Waiwai.</span> True wealth.
              Health. Value. Resources. Assets. Abundance.
            </p>
            <p className="mt-10 font-serif italic text-mist text-lg md:text-xl max-w-[46ch]">
              The room stays small on purpose. Partners are chosen for
              alignment, not appetite.
            </p>
          </div>
        </div>
      </section>

      <CtaBand
        eyebrow="Founding Partner"
        title="Ready to become a founding partner?"
        ctaLabel="Apply Now"
        href="mailto:info@pomaikai.co?subject=Founding%20Partner%20Application"
      />
    </PageTransition>
  );
}
