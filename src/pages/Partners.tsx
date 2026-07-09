import PageTransition from "../components/layout/PageTransition";
import PageIntro from "../components/layout/PageIntro";
import PillarList from "../components/layout/PillarList";
import CtaBand from "../components/layout/CtaBand";

export default function Partners() {
  return (
    <PageTransition>
      <PageIntro
        eyebrow="Partners & Advisory"
        title={
          <>
            For founders. <span className="italic text-wheatLight">By founders.</span>
          </>
        }
        subtitle="Private advisory. Strategic partnerships. Founding partners. We grow together. We win together."
      />

      <PillarList
        eyebrow="Three ways to build with us"
        heading={<>The room, not the audience.</>}
        pillars={[
          {
            index: "01",
            title: "Private Advisory",
            meta: "Board-level guidance",
            body: "High-level strategy and board-level guidance for serious founders. Quarterly reviews, ongoing counsel, and access to the wider network.",
          },
          {
            index: "02",
            title: "Strategic Partnerships",
            meta: "Aligned operators",
            body: "Align with experienced operators and investors who bring real value beyond capital. Deals, distribution, and honest calibration.",
          },
          {
            index: "03",
            title: "Founding Partners",
            meta: "Inner circle",
            body: "Join our inner circle. Co-create the future of Pomaika&rsquo;i. A small cohort of operators who help shape how the ecosystem evolves.",
          },
        ]}
      />

      {/* CLOSING NOTE */}
      <section className="py-32 md:py-44 border-t hairline bg-obsidian">
        <div className="container-editorial">
          <div className="max-w-4xl">
            <p className="text-[10px] uppercase tracking-[0.35em] text-wheat mb-8">
              A note on partnership
            </p>
            <p className="font-serif text-3xl md:text-5xl text-cream leading-[1.08] text-balance">
              We keep the room small on purpose.{" "}
              <span className="italic text-wheatLight">
                Fewer partners, deeper wins.
              </span>{" "}
              If that matches how you already operate, let&rsquo;s talk.
            </p>
          </div>
        </div>
      </section>

      <CtaBand
        eyebrow="Founding Partner"
        title="Ready to become a founding partner?"
        ctaLabel="Apply Now"
        href="mailto:hello@pomaikai.co?subject=Founding%20Partner%20Application"
      />
    </PageTransition>
  );
}
