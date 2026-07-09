import PageTransition from "../components/layout/PageTransition";
import PageIntro from "../components/layout/PageIntro";
import PillarList from "../components/layout/PillarList";
import StepList from "../components/layout/StepList";
import CtaBand from "../components/layout/CtaBand";

export default function Marketing() {
  return (
    <PageTransition>
      <PageIntro
        eyebrow="Marketing"
        title={
          <>
            Marketing that drives <span className="italic text-wheatLight">real growth.</span>
          </>
        }
        subtitle="Websites. Content. Ads. AI. Done-for-you systems that attract, convert, and retain — engineered around your business, not a template."
      />

      <PillarList
        eyebrow="What we build"
        heading={<>Four practices. Compounding output.</>}
        pillars={[
          {
            index: "01",
            title: "Websites",
            meta: "Design + Development",
            body: "High-converting, AI-integrated websites purpose-built to scale with your operation. Editorial design, fast, and owned by you.",
          },
          {
            index: "02",
            title: "Content & Social",
            meta: "Brand voice + cadence",
            body: "Scroll-stopping content that builds brand equity and brings in warm inbound. Native to your voice, consistent to the calendar.",
          },
          {
            index: "03",
            title: "Ads & Lead Gen",
            meta: "Paid + inbound",
            body: "Targeted ads that follow up, book calls, and close consistent revenue. Measured against pipeline, not vanity metrics.",
          },
          {
            index: "04",
            title: "AI Automation",
            meta: "Systems + agents",
            body: "AI systems that follow up, book calls, and close while you sleep. Written to your workflow, deployed to your stack.",
          },
        ]}
      />

      <StepList
        eyebrow="The system in action"
        heading="Our marketing system, from strategy to scale."
        steps={[
          {
            title: "Strategy",
            body: "We audit your positioning, offer, and market. Every plan starts with a clear-eyed read of where you actually are versus where you tell yourself you are.",
          },
          {
            title: "Build",
            body: "Website, content engine, ad accounts, automations — assembled into one operating layer that any team member can run.",
          },
          {
            title: "Launch",
            body: "Ship in weeks, not quarters. We move quickly and deliberately so momentum arrives before enthusiasm runs out.",
          },
          {
            title: "Optimize",
            body: "Weekly reviews on the numbers that actually move revenue. We prune what doesn't work and double down on what does.",
          },
          {
            title: "Scale",
            body: "Once the system prints predictably, we widen the top of the funnel and hand over ownership to your team with the documentation they need.",
          },
        ]}
      />

      <CtaBand
        eyebrow="Ready to scale"
        title="See the marketing packages built for founders like you."
        ctaLabel="View Packages"
        href="mailto:hello@pomaikai.co?subject=Marketing%20Packages"
      />
    </PageTransition>
  );
}
