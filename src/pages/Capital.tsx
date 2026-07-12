import PageTransition from "../components/layout/PageTransition";
import PageIntro from "../components/layout/PageIntro";
import PillarList from "../components/layout/PillarList";
import StepList from "../components/layout/StepList";
import CtaBand from "../components/layout/CtaBand";
import IGTile from "../components/layout/IGTile";

export default function Capital() {
  return (
    <PageTransition>
      {/* Do not display Malachi's personal credit as "client funded." Waiting
          on real client-raised capital figure before adding a metrics slot here. */}
      <PageIntro
        eyebrow="Capital"
        title={
          <>
            Capital. Funding. <span className="italic text-cream">Freedom.</span>
          </>
        }
        subtitle="0% APR funding. Loans. Lines of credit. Wealth strategy."
      />

      <PillarList
        eyebrow="How we fund founders"
        heading={<>Four levers. Deployed at the right moment.</>}
        pillars={[
          {
            index: "01",
            title: "0% APR Funding",
            meta: "Up to $150K",
            body: "Inventory, hires, launches — without year-one interest drag.",
          },
          {
            index: "02",
            title: "Business Loans",
            meta: "Fast approvals",
            body: "Underwritten by the shape of your operation, not just your credit file.",
          },
          {
            index: "03",
            title: "Lines of Credit",
            meta: "Flexible capital",
            body: "Draw when the opportunity is real. Sit tight when it isn't.",
          },
          {
            index: "04",
            title: "Tax Strategy",
            meta: "Wealth architecture",
            body: "Keep more of what you earn. Built alongside your CPA.",
          },
        ]}
      />

      {/* IG-STYLE FUNDING WINS */}
      <section className="py-32 md:py-44 border-t hairline bg-obsidian">
        <div className="container-editorial">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-14 mb-16 md:mb-24 items-end">
            <div className="md:col-span-4">
              <p className="text-[10px] uppercase tracking-[0.35em] text-bone mb-6">
                From the room
              </p>
            </div>
            <div className="md:col-span-8">
              <h2 className="font-serif text-display-md text-cream max-w-[18ch] text-balance leading-[1.02]">
                Capital that moves.
              </h2>
            </div>
          </div>

          {/* PLACEHOLDER: mock IG-style tiles. Real funding case studies TBD.
              Pass `image` prop when Malachi sends per-section imagery. */}
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
        heading="From application to approved."
        steps={[
          {
            title: "Qualify",
            body: "No hard pulls until a path exists.",
          },
          {
            title: "Strategize",
            body: "See the full stack before submitting.",
          },
          {
            title: "Secure",
            body: "We handle paperwork. You run the business.",
          },
          {
            title: "Grow",
            body: "Deploy with the discipline it took to secure.",
          },
        ]}
      />

      <CtaBand
        eyebrow="Get started"
        title="Schedule your capital strategy call."
        ctaLabel="Book the call"
        href="mailto:hello@pomaikai.co?subject=Capital%20Strategy%20Call"
      />
    </PageTransition>
  );
}
