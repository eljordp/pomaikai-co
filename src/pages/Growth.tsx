import PageTransition from "../components/layout/PageTransition";
import PageIntro from "../components/layout/PageIntro";
import SectorQuote from "../components/layout/SectorQuote";
import ProjectGrid from "../components/layout/ProjectGrid";
import IGTile from "../components/layout/IGTile";
import CtaBand from "../components/layout/CtaBand";
import { motion } from "framer-motion";

/**
 * AI systems JP has shipped under JDLO — live products.
 * Tiles route to internal /growth/systems/:slug detail pages (case-study
 * style writeups). The live product link is inside the detail page as
 * an understated "See it live →" footer element.
 */
const SYSTEMS = [
  {
    name: "DHL Translator",
    niche: "B2B · Real-time Translation",
    href: "/growth/systems/dhl-translator",
    badge: "JDLO AI",
    image: "/portfolio/dhl-translator.png",
    internal: true,
  },
  {
    name: "Outreach Engine",
    niche: "Sales · Automation",
    href: "/growth/systems/outreach-engine",
    badge: "JDLO AI",
    image: "/portfolio/outreach-engine.png",
    internal: true,
  },
  {
    name: "JDLO CRM",
    niche: "Ops · AI-Powered",
    href: "/growth/systems/jdlo-crm",
    badge: "JDLO AI",
    image: "/portfolio/jdlo-crm.png",
    internal: true,
  },
];

/**
 * GROWTH — replaces the old /marketing page.
 * Content per Malachi 2026-07-17.
 */
export default function Growth() {
  return (
    <PageTransition>
      <PageIntro
        eyebrow="Growth"
        title={
          <>
            Marketing that <span className="italic text-cream">compounds.</span>
          </>
        }
        subtitle="Websites, SEO, Content, Ads, AI, Lead Gen, and more. All the essentials."
        image={{ src: "/headers/growth.jpg", alt: "Taro fields beneath the Ko'olau mountains" }}
      />

      <SectorQuote sector="growth" />

      {/* PARTNER PORTFOLIO — three JDLO-built partner sites. */}
      <section className="py-32 md:py-44 border-t hairline">
        <div className="container-editorial">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-14 mb-16 md:mb-24 items-end">
            <div className="md:col-span-4">
              <p className="text-[10px] uppercase tracking-[0.35em] text-bone mb-6">
                Built for Growth
              </p>
            </div>
            <div className="md:col-span-8">
              <h2 className="font-serif text-display-md text-cream max-w-[20ch] text-balance leading-[1.02]">
                Real founders. Real sites.{" "}
                <span className="italic text-cream">Shipped.</span>
              </h2>
            </div>
          </div>

          <ProjectGrid bare />

          <p className="mt-14 font-serif italic text-mist text-base md:text-lg max-w-[52ch]">
            Built custom tailored in partnership with{" "}
            <a
              href="https://jdlo.site"
              target="_blank"
              rel="noreferrer noopener"
              className="text-cream border-b border-cream/40 hover:border-cream transition-colors"
            >
              JDLO AI
            </a>.
          </p>
          <p className="mt-3 text-[10px] uppercase tracking-[0.3em] text-mist">
            More info upon request · info@pomaikai.co
          </p>
        </div>
      </section>

      {/* SOCIAL MEDIA CONTENT — 3 IG tiles */}
      <section className="py-32 md:py-44 border-t hairline bg-obsidian">
        <div className="container-editorial">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-14 mb-16 md:mb-24 items-end">
            <div className="md:col-span-4">
              <p className="text-[10px] uppercase tracking-[0.35em] text-bone mb-6">
                Social Media Content
              </p>
            </div>
            <div className="md:col-span-8">
              <h2 className="font-serif text-display-md text-cream max-w-[18ch] text-balance leading-[1.02]">
                Three posts. One voice.
              </h2>
            </div>
          </div>

          {/* PLACEHOLDER: pass `image` prop when Malachi sends imagery. */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            <IGTile
              index={0}
              title="Real founders. Real sites."
              caption="Built for the Hawai'i economy — one storefront at a time."
              badge="Growth"
            />
            <IGTile
              index={1}
              title="Ads that move."
              caption="Local reach, ROAS you can point at."
              badge="Ads"
            />
            <IGTile
              index={2}
              title="AI that saves hours."
              caption="Chat, capture, book — automated."
              badge="AI"
            />
          </div>

          <p className="mt-12 text-[10px] uppercase tracking-[0.3em] text-mist">
            IG embeds landing soon · @pomaikaico
          </p>
        </div>
      </section>

      {/* SYSTEMS IN PRODUCTION — live AI systems JP has shipped */}
      <section className="py-32 md:py-44 border-t hairline">
        <div className="container-editorial">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-14 mb-16 md:mb-24 items-end">
            <div className="md:col-span-4">
              <p className="text-[10px] uppercase tracking-[0.35em] text-bone mb-6">
                Systems in Production
              </p>
            </div>
            <div className="md:col-span-8">
              <h2 className="font-serif text-display-md text-cream max-w-[20ch] text-balance leading-[1.02]">
                AI that <span className="italic text-cream">actually ships.</span>
              </h2>
            </div>
          </div>

          <ProjectGrid projects={SYSTEMS} bare />

          <p className="mt-14 font-serif italic text-mist text-base md:text-lg max-w-[52ch]">
            Live products in production. Built and maintained by{" "}
            <a
              href="https://jdlo.site"
              target="_blank"
              rel="noreferrer noopener"
              className="text-cream border-b border-cream/40 hover:border-cream transition-colors"
            >
              JDLO AI
            </a>.
          </p>
          <p className="mt-3 text-[10px] uppercase tracking-[0.3em] text-mist">
            Custom systems available · info@pomaikai.co
          </p>
        </div>
      </section>

      {/* THREE PILLARS */}
      <section className="py-32 md:py-44 border-t hairline">
        <div className="container-editorial">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-14 mb-16 md:mb-24 items-end">
            <div className="md:col-span-4">
              <p className="text-[10px] uppercase tracking-[0.35em] text-bone mb-6">
                Services
              </p>
            </div>
            <div className="md:col-span-8">
              <h2 className="font-serif text-display-md text-cream max-w-[16ch] text-balance leading-[1.02]">
                Whatever your business{" "}
                <span className="italic text-cream">needs.</span>
              </h2>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border-t border-l hairline">
            {[
              { label: "Websites", meta: "Design · SEO · Ads · Lead Gen" },
              { label: "Content & Social Media", meta: "Branding · Positioning · Optimization" },
              { label: "AI Integration", meta: "Systems · Agents · Automation" },
            ].map((p, i) => (
              <motion.div
                key={p.label}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.7, delay: i * 0.05, ease: [0.19, 1, 0.22, 1] }}
                className="group flex flex-col justify-between p-10 md:p-14 border-r border-b hairline min-h-[220px] md:min-h-[280px] hover:bg-obsidian/40 transition-colors duration-500"
              >
                <span className="text-[10px] uppercase tracking-[0.28em] text-mist">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <p className="font-serif text-3xl md:text-5xl text-cream leading-[1.02] tracking-tight">
                    {p.label}
                  </p>
                  <p className="mt-4 text-[10px] uppercase tracking-[0.3em] text-mist">
                    {p.meta}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      <CtaBand
        eyebrow="Ready to grow?"
        title="Let's build your next site."
        ctaLabel="Start a project"
        href="mailto:info@pomaikai.co?subject=Growth%20Project"
      />
    </PageTransition>
  );
}

