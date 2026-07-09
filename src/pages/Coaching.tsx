import PageTransition from "../components/layout/PageTransition";
import PageIntro from "../components/layout/PageIntro";
import PillarList from "../components/layout/PillarList";
import StepList from "../components/layout/StepList";
import CtaBand from "../components/layout/CtaBand";
import IGTile from "../components/layout/IGTile";

/**
 * NOTE: "ICF-Certified" copy is aspirational per Malachi's brief.
 * Malachi is not yet ICF-certified — swap this line once certification is complete,
 * or replace with "Practitioner-led coaching for founders" as a safer default.
 */

export default function Coaching() {
  return (
    <PageTransition>
      <PageIntro
        eyebrow="Coaching"
        title={
          <>
            Coaching that <span className="italic text-cream">changes everything.</span>
          </>
        }
        subtitle="ICF-Certified coaching for founders. 1:1, group, and mentorship."
      />

      <PillarList
        eyebrow="Three formats"
        heading={<>Depth for the founder. Rhythm for the practice.</>}
        pillars={[
          {
            index: "01",
            title: "1:1 Coaching",
            meta: "Personalized strategy",
            body: "Weekly work on the ceiling you keep hitting. Adjusted quarterly.",
          },
          {
            index: "02",
            title: "Group Sessions",
            meta: "Peer accountability",
            body: "Small cohorts of founders who are actually shipping.",
          },
          {
            index: "03",
            title: "Founder Mentorship",
            meta: "Long arc, high signal",
            body: "For the business you're building over years, not months.",
          },
        ]}
      />

      {/* IG-STYLE TESTIMONIAL / MOMENT TILES */}
      <section className="py-32 md:py-44 border-t hairline">
        <div className="container-editorial">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-14 mb-16 md:mb-24 items-end">
            <div className="md:col-span-4">
              <p className="text-[10px] uppercase tracking-[0.35em] text-bone mb-6">
                Moments from the room
              </p>
            </div>
            <div className="md:col-span-8">
              <h2 className="font-serif text-display-md text-cream max-w-[18ch] text-balance leading-[1.02]">
                Founders in motion.
              </h2>
            </div>
          </div>

          {/* PLACEHOLDER: mock IG-style tiles until real testimonials/embeds land. */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            <IGTile
              index={0}
              title="Ceiling broke."
              caption="Weekly reps. Small room. Real accountability."
              badge="1:1"
            />
            <IGTile
              index={1}
              title="First $10K month."
              caption="From stuck to shipping in one quarter."
              badge="Group"
            />
            <IGTile
              index={2}
              title="Team of one → team of five."
              caption="Systems, delegation, freedom."
              badge="Mentorship"
            />
          </div>

          <p className="mt-12 text-[10px] uppercase tracking-[0.3em] text-mist">
            Real testimonials landing soon · @pomaikaico
          </p>
        </div>
      </section>

      <StepList
        eyebrow="The path"
        heading="From clarity to execution to freedom."
        steps={[
          {
            title: "Mindset",
            body: "Identity and patterns. Nothing scales past the operator.",
          },
          {
            title: "Strategy",
            body: "The two or three moves that actually move the business.",
          },
          {
            title: "Execution",
            body: "Weekly rhythms, real deliverables, honest reviews.",
          },
          {
            title: "Freedom",
            body: "Time back, systems humming, a team you trust.",
          },
        ]}
      />

      <CtaBand
        eyebrow="Free discovery"
        title="Book your free discovery call."
        ctaLabel="Book Discovery Call"
        href="mailto:hello@pomaikai.co?subject=Coaching%20Discovery%20Call"
      />
    </PageTransition>
  );
}
