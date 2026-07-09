import PageTransition from "../components/layout/PageTransition";
import PageIntro from "../components/layout/PageIntro";
import PillarList from "../components/layout/PillarList";
import CtaBand from "../components/layout/CtaBand";
import PillBadge from "../components/layout/PillBadge";
import { ArrowUpRight } from "lucide-react";

export default function Partners() {
  return (
    <PageTransition>
      <PageIntro
        eyebrow="Partners & Advisory"
        title={
          <>
            For founders. <span className="italic text-cream">By founders.</span>
          </>
        }
        subtitle="Private advisory. Strategic partnerships. Inner circle."
      />

      <PillarList
        eyebrow="Three ways to build with us"
        heading={<>The room, not the audience.</>}
        pillars={[
          {
            index: "01",
            title: "Private Advisory",
            meta: "Board-level guidance",
            body: "Quarterly reviews, ongoing counsel, network access.",
          },
          {
            index: "02",
            title: "Strategic Partnerships",
            meta: "Aligned operators",
            body: "Real value beyond capital. Deals, distribution, honest calibration.",
          },
          {
            index: "03",
            title: "Founding Partners",
            meta: "Inner circle",
            body: "A small cohort helping shape how the ecosystem evolves.",
          },
        ]}
      />

      {/* MEMBERSHIP CALLOUT — the sitewide $500/mo pitch, front and center */}
      <section className="relative border-t hairline overflow-hidden">
        <div
          aria-hidden
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(1000px 500px at 20% 20%, rgba(232,226,211,0.05), transparent 60%)",
          }}
        />
        <div className="container-editorial relative py-32 md:py-44">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-14 items-start">
            <div className="md:col-span-5">
              <div className="flex flex-wrap gap-3 mb-8">
                <PillBadge>Membership</PillBadge>
                <PillBadge>Full Ecosystem</PillBadge>
              </div>
              <h2 className="font-serif text-display-md text-cream leading-[1.02] tracking-tight text-balance">
                One membership. <span className="italic text-cream">All in.</span>
              </h2>
            </div>
            <div className="md:col-span-7">
              <p className="font-serif text-2xl md:text-3xl text-cream leading-[1.2] text-balance">
                Academy · Coaching · Capital · Marketing · Community. All included.
              </p>
              <div className="mt-10 flex flex-wrap items-baseline gap-4">
                <span className="font-serif text-4xl md:text-5xl text-cream tracking-tight">
                  $500
                </span>
                <span className="text-mist text-lg">/ month</span>
              </div>
              <div className="mt-12">
                <a
                  href="mailto:hello@pomaikai.co?subject=Pomaika%27i%20Membership"
                  className="group inline-flex items-center gap-3 text-ink bg-cream px-8 py-4 text-[11px] uppercase tracking-[0.24em] hover:bg-bone transition-colors duration-300"
                >
                  Request Access
                  <ArrowUpRight size={16} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CLOSING NOTE */}
      <section className="py-32 md:py-44 border-t hairline bg-obsidian">
        <div className="container-editorial">
          <div className="max-w-4xl">
            <p className="text-[10px] uppercase tracking-[0.35em] text-bone mb-8">
              A note on partnership
            </p>
            <p className="font-serif text-3xl md:text-5xl text-cream leading-[1.08] text-balance">
              We keep the room small on purpose.{" "}
              <span className="italic text-cream">
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
