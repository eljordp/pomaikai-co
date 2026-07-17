import PageTransition from "../components/layout/PageTransition";
import PageIntro from "../components/layout/PageIntro";
import PillarList from "../components/layout/PillarList";
import StepList from "../components/layout/StepList";
import CtaBand from "../components/layout/CtaBand";
import IGTile from "../components/layout/IGTile";

/**
 * CAPITAL — content refresh per Malachi 2026-07-17.
 */
export default function Capital() {
  return (
    <PageTransition>
      <PageIntro
        eyebrow="Capital"
        title={
          <>
            Finance. Funding. <span className="italic text-cream">Freedom.</span>
          </>
        }
        subtitle="0% APR funding, business loans and LOCs, credit optimization, banking relationships, capital strategy, wealth architecture."
      />

      {/* Working capital deployed — founder-side capital. */}
      <section className="py-24 md:py-32 border-t hairline">
        <div className="container-editorial">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-baseline">
            <div className="md:col-span-4">
              <p className="text-[10px] uppercase tracking-[0.35em] text-bone">
                Working Capital Deployed
              </p>
            </div>
            <div className="md:col-span-8">
              <p className="font-serif text-display-md md:text-display-lg text-cream leading-[0.95]">
                $250,000
              </p>
              <p className="mt-6 text-sm text-mist max-w-[46ch]">
                Working capital deployed across credit lines, loans, grants,
                and other instruments. Founder-side capital already at work —
                bringing Pōmaika&rsquo;i to founders in Waimea and beyond.
              </p>
            </div>
          </div>
        </div>
      </section>

      <PillarList
        eyebrow="How we fund partners"
        heading={
          <>
            Three primary levers.{" "}
            <span className="italic text-cream">TLC.</span>
          </>
        }
        pillars={[
          {
            index: "01",
            title: "Trajectory",
            meta: "Where you're headed",
            body: "Strategic evaluation of business trajectory and opportunities.",
          },
          {
            index: "02",
            title: "Leverage",
            meta: "What's already yours",
            body: "Available resources mapped against opportunity.",
          },
          {
            index: "03",
            title: "Capital",
            meta: "Deployed with discipline",
            body: "Deployed efficiently. Compounding for long-term ROI.",
          },
        ]}
      />

      {/* Tender Love and Care — meaning of TLC, kept subtle. */}
      <section className="border-t hairline">
        <div className="container-editorial py-10">
          <p className="font-serif italic text-mist text-lg">
            Tender Love and Care.
          </p>
        </div>
      </section>

      {/* IG-STYLE ARCHIVE TILES */}
      <section className="py-32 md:py-44 border-t hairline bg-obsidian">
        <div className="container-editorial">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-14 mb-16 md:mb-24 items-end">
            <div className="md:col-span-4">
              <p className="text-[10px] uppercase tracking-[0.35em] text-bone mb-6">
                Pōmaika&rsquo;i Archive
              </p>
            </div>
            <div className="md:col-span-8">
              <h2 className="font-serif text-display-md text-cream max-w-[18ch] text-balance leading-[1.02]">
                <span className="italic text-cream">Freedom.</span>
              </h2>
            </div>
          </div>

          {/* PLACEHOLDER: pass `image` prop when Malachi sends imagery. */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            <IGTile
              index={0}
              title="Approved. 0% APR."
              caption="Inventory funded before the season broke."
              badge="Funding"
            />
            <IGTile
              index={1}
              title="Line of credit live."
              caption="Cash flow flexed. Ops humming."
              badge="LOC"
            />
            <IGTile
              index={2}
              title="Structure locked."
              caption="Entity, retirement, quarterly plan."
              badge="Strategy"
            />
          </div>

          <p className="mt-12 text-[10px] uppercase tracking-[0.3em] text-mist">
            Real numbers stay private · reference calls on request
          </p>
        </div>
      </section>

      <StepList
        eyebrow="Roadmap"
        heading="A to Z. Application to approved."
        steps={[
          {
            title: "Strategic Assessment",
            body: "What's applicable and available?",
          },
          {
            title: "High Leverage Opportunities",
            body: "Highest leverage pathways.",
          },
          {
            title: "Capital Deployment with Discipline",
            body: "Deploy working capital effectively.",
          },
        ]}
      />

      <CtaBand
        eyebrow="Ready for freedom?"
        title="Schedule your capital strategy call."
        ctaLabel="Book the call"
        href="mailto:info@pomaikai.co?subject=Capital%20Strategy%20Call"
      />
    </PageTransition>
  );
}
