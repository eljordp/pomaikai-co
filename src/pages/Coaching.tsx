import PageTransition from "../components/layout/PageTransition";
import PageIntro from "../components/layout/PageIntro";
import PillarList from "../components/layout/PillarList";
import StepList from "../components/layout/StepList";
import CtaBand from "../components/layout/CtaBand";

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
            Coaching that <span className="italic text-wheatLight">changes everything.</span>
          </>
        }
        subtitle="ICF-Certified coaching for founders. 1:1, group, and ongoing support — designed to move you from stuck to shipping."
      />

      <PillarList
        eyebrow="Three formats"
        heading={<>Depth for the founder. Rhythm for the practice.</>}
        pillars={[
          {
            index: "01",
            title: "1:1 Coaching",
            meta: "Personalized strategy",
            body: "Personalized strategy and mindset work to break through the ceiling you keep hitting. Held weekly, adjusted quarterly.",
          },
          {
            index: "02",
            title: "Group Sessions",
            meta: "Peer accountability",
            body: "Weekly group calls to stay accountable and grow together. Small cohorts of founders who are actually shipping.",
          },
          {
            index: "03",
            title: "Founder Mentorship",
            meta: "Long arc, high signal",
            body: "High-level mentorship for long-term success and legacy. Structured around the business you are building over years, not months.",
          },
        ]}
      />

      <StepList
        eyebrow="The coaching path"
        heading="From clarity to execution to freedom."
        steps={[
          {
            title: "Mindset",
            body: "We start with the operator. Identity, patterns, and the stories that keep looping. Nothing scales past the person running it.",
          },
          {
            title: "Strategy",
            body: "Plan and focus. We identify the two or three moves that actually move the business, and cut the noise.",
          },
          {
            title: "Execution",
            body: "Take action. Weekly rhythms, real deliverables, honest reviews. This is where most coaching quietly ends and ours actually starts.",
          },
          {
            title: "Freedom",
            body: "Live abundantly. Time back, systems humming, a team you trust. The point of the work, not a bonus.",
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
