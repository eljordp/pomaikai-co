import PageTransition from "../components/layout/PageTransition";
import PageIntro from "../components/layout/PageIntro";
import PillarList from "../components/layout/PillarList";
import StepList from "../components/layout/StepList";
import CtaBand from "../components/layout/CtaBand";
import IGTile from "../components/layout/IGTile";

/**
 * LEADERSHIP — replaces the old /coaching page.
 * Content per Malachi 2026-07-17.
 *
 * NOTE: Do NOT reintroduce "ICF-Certified" copy — Malachi is still working
 * toward certification. Footer badges carry the honest "In Progress" qualifier.
 */
export default function Leadership() {
  return (
    <PageTransition>
      <PageIntro
        eyebrow="Leadership"
        title={
          <>
            Personalized <span className="italic text-cream">coaching.</span>
          </>
        }
        subtitle="Group sessions, 1:1, private calls, strategic guidance."
      />

      <PillarList
        eyebrow="Engage"
        heading={<>Three ways in.</>}
        pillars={[
          {
            index: "01",
            title: "Group Sessions",
            meta: "Weekly rhythm",
            body: "Every Monday via video conference.",
          },
          {
            index: "02",
            title: "1:1",
            meta: "Personalized",
            body: "Personalized session in a timeframe that works for you.",
          },
          {
            index: "03",
            title: "Private Partnership",
            meta: "Inner circle",
            body: "1:1, private calls, inner circle community.",
          },
        ]}
      />

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
                <span className="italic text-cream">Kuleana.</span>{" "}
                Ownership. Accountability.
              </h2>
            </div>
          </div>

          {/* PLACEHOLDER: pass `image` prop when Malachi sends imagery. */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            <IGTile
              index={0}
              title="Reps in."
              caption="Monday morning. Ownership set for the week."
              badge="Group"
            />
            <IGTile
              index={1}
              title="1:1 breakthrough."
              caption="A hard conversation. Direction found."
              badge="1:1"
            />
            <IGTile
              index={2}
              title="Inner circle."
              caption="Quiet room. Real problems. Real answers."
              badge="Private"
            />
          </div>

          <p className="mt-12 text-[10px] uppercase tracking-[0.3em] text-mist">
            Archive expanding · @pomaikaico
          </p>
        </div>
      </section>

      <StepList
        eyebrow="The Path"
        heading="Growth internally = growth externally."
        steps={[
          {
            title: "Mindset",
            body: "As within, so without.",
          },
          {
            title: "Self-Discipline",
            body: "Self-Trust.",
          },
          {
            title: "Consistency",
            body: "Self-Mastery.",
          },
        ]}
      />

      <CtaBand
        eyebrow="Free discovery"
        title="Ready to be the best you?"
        ctaLabel="Book Discovery Call"
        href="mailto:info@pomaikai.co?subject=Leadership%20Discovery%20Call"
      />
    </PageTransition>
  );
}
