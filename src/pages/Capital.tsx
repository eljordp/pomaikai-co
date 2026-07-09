import PageTransition from "../components/layout/PageTransition";
import PageIntro from "../components/layout/PageIntro";
import PillarList from "../components/layout/PillarList";
import StepList from "../components/layout/StepList";
import CtaBand from "../components/layout/CtaBand";

export default function Capital() {
  return (
    <PageTransition>
      <PageIntro
        eyebrow="Capital"
        title={
          <>
            Capital. Funding. <span className="italic text-wheatLight">Financial freedom.</span>
          </>
        }
        subtitle="0% APR funding. Business loans. Lines of credit. Wealth strategies. Fuel your growth with capital solutions built around how founders actually operate."
      />

      <PillarList
        eyebrow="How we fund founders"
        heading={<>Four levers. Deployed at the right moment.</>}
        pillars={[
          {
            index: "01",
            title: "0% APR Funding",
            meta: "Up to $150K",
            body: "Access up to $150K in 0% APR options. Structured so founders can build inventory, hire, or launch without the drag of interest in year one.",
          },
          {
            index: "02",
            title: "Business Loans",
            meta: "Fast approvals",
            body: "Fast approvals for startups and established businesses. Underwritten by the actual shape of your operation, not just your credit file.",
          },
          {
            index: "03",
            title: "Lines of Credit",
            meta: "Flexible capital",
            body: "Flexible capital for cash flow and expansion. Draw when the opportunity is real, sit tight when it isn't.",
          },
          {
            index: "04",
            title: "Tax Strategy",
            meta: "Wealth architecture",
            body: "Keep more of what you earn. Entity structure, retirement vehicles, and quarterly planning built alongside your CPA.",
          },
        ]}
      />

      <StepList
        eyebrow="Funding roadmap"
        heading="From application to approved, without the guesswork."
        steps={[
          {
            title: "Qualify",
            body: "We review your business profile, financial picture, and goals. No hard pulls until we know a path exists.",
          },
          {
            title: "Strategize",
            body: "We build your funding plan across products and lenders. You see the full stack before anything is submitted.",
          },
          {
            title: "Secure",
            body: "Applications go out, approvals come back. We handle the paperwork so you stay focused on the business.",
          },
          {
            title: "Grow",
            body: "Capital in hand, we help you deploy it with the same discipline it took to secure it. Scale with confidence.",
          },
        ]}
      />

      <CtaBand
        eyebrow="Get started"
        title="Schedule your free capital strategy call."
        ctaLabel="Book the call"
        href="mailto:hello@pomaikai.co?subject=Capital%20Strategy%20Call"
      />
    </PageTransition>
  );
}
