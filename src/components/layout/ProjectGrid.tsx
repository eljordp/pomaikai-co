import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import PillBadge from "./PillBadge";

type Project = {
  name: string;
  niche: string;
  href: string;
  /** Badge label — "JDLO AI" or "Pomaika'i Ecosystem" */
  badge?: string;
  /** Optional screenshot URL — falls back to gradient tile if omitted. */
  image?: string;
};

/**
 * Portfolio case study grid — adapted from JP's jdlo.site portfolio pattern.
 * Each tile: visual on top, client + niche below, badge in corner, external link.
 *
 * PLACEHOLDER NOTE: We attempt each site's `/og-image.png` as the thumbnail.
 * When it 404s the browser shows nothing — the gradient wash + serif name still reads.
 * Real screenshots should replace these before Malachi ships this to clients.
 */
// Only projects delivered under the Pomaika'i brand. Do not add JDLO independent
// freelance work. Ask JP before adding anything new.
//
// JDLO independent work (Ace Venen, Buehler Capital, Carusso Furniture, B. Pressed,
// Meridian Fleet, Sticker Smith / TSS Print) was intentionally removed 2026-07-12
// — those clients hired JP under JDLO, not Pomaika'i. Do not re-add.
// Malachi confirmed 2026-07-15 VM: keep JDLO AI credit on sites JP built.
// Badge label "JDLO AI" → PillBadge renders as a link to jdlo.site so credit
// is clickable, but the main tile still routes to the client's live site.
const DEFAULT_PROJECTS: Project[] = [
  { name: "Waimea Lamb Co.", niche: "Agriculture · Storefront", href: "https://waimea-lamb-co.vercel.app", badge: "JDLO AI" },
  { name: "Aesthetics by Kayy", niche: "Beauty · Booking", href: "https://adorned-landing.vercel.app", badge: "JDLO AI" },
  { name: "Reese VIP", niche: "AI · Concierge", href: "https://reesvip.com", badge: "JDLO AI" },
];

/** Strip protocol and trailing slash so tiles display "waimea-lamb-co.vercel.app". */
function formatDomain(url: string): string {
  return url.replace(/^https?:\/\//, "").replace(/\/$/, "");
}

export default function ProjectGrid({ projects = DEFAULT_PROJECTS }: { projects?: Project[] }) {
  return (
    <section className="py-32 md:py-44 border-t hairline">
      <div className="container-editorial">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-14 mb-16 md:mb-24 items-end">
          <div className="md:col-span-4">
            <p className="text-[10px] uppercase tracking-[0.35em] text-bone mb-6">Selected work</p>
          </div>
          <div className="md:col-span-8">
            <h2 className="font-serif text-display-md text-cream max-w-[20ch] text-balance leading-[1.02]">
              Real founders. Real sites. <span className="italic text-cream">Shipped.</span>
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-0 border-t border-l hairline">
          {projects.map((p, i) => (
            <ProjectTile key={p.name} project={p} index={i} />
          ))}
        </div>

        <p className="mt-14 font-serif italic text-mist text-base md:text-lg max-w-[52ch]">
          More case studies as clients close. Pomaika&rsquo;i-built sites only —
          JDLO independent work lives elsewhere.
        </p>

        <p className="mt-8 text-[10px] uppercase tracking-[0.3em] text-mist">
          Case study PDFs on request · hello@pomaikai.co
        </p>
      </div>
    </section>
  );
}

function ProjectTile({ project, index }: { project: Project; index: number }) {
  const seedGradient = [
    "linear-gradient(135deg, #26221c 0%, #3a3229 45%, #1e1a15 100%)",
    "linear-gradient(160deg, #1e1c17 0%, #33291f 50%, #1e1c17 100%)",
    "linear-gradient(120deg, #1a1a1a 0%, #2e2820 50%, #1a1a1a 100%)",
  ][index % 3];

  return (
    <motion.a
      href={project.href}
      target="_blank"
      rel="noreferrer noopener"
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.7, delay: (index % 3) * 0.05, ease: [0.19, 1, 0.22, 1] }}
      className="group relative block border-r border-b hairline overflow-hidden hover:bg-obsidian/40 transition-colors duration-500"
    >
      {/* Visual — shorter on mobile (16:10) so 9 stacked tiles don't scroll forever */}
      <div
        className="relative aspect-[16/10] sm:aspect-[4/3] overflow-hidden"
        style={{ background: seedGradient }}
      >
        {/* Thumbnail attempt — hides on error via onError handler */}
        <img
          src={`${project.href.replace(/\/$/, "")}/og-image.png`}
          alt=""
          loading="lazy"
          className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:scale-[1.02] transition-transform duration-[900ms] ease-editorial"
          onLoad={(e) => ((e.currentTarget as HTMLImageElement).style.opacity = "0.9")}
          onError={(e) => ((e.currentTarget as HTMLImageElement).style.display = "none")}
        />
        {/* Fallback: giant number + niche + name + domain — designed as intentional content, not empty state.
            Domain in tiny tracked type at bottom gives the tile a "real link" feel when OG images 404. */}
        <div className="absolute inset-0 flex flex-col justify-between p-6 sm:p-7 pointer-events-none">
          <div className="flex items-start justify-between">
            <span className="font-serif italic text-cream/70 text-5xl sm:text-6xl leading-none tracking-tighter">
              {String(index + 1).padStart(2, "0")}
            </span>
          </div>
          <div>
            <p className="font-serif text-cream text-2xl sm:text-3xl leading-tight">
              {project.name}
            </p>
            <p className="mt-2 text-[9px] sm:text-[10px] uppercase tracking-[0.3em] text-cream/60">
              {project.niche}
            </p>
            <p className="mt-3 text-[9px] uppercase tracking-[0.28em] text-cream/40 truncate">
              {formatDomain(project.href)}
            </p>
          </div>
        </div>
        {/* Grain */}
        <div className="absolute inset-0 grain pointer-events-none" />
        {/* Top-right badge — links to jdlo.site when the badge is "JDLO AI" */}
        {project.badge && (
          <div className="absolute top-4 right-4 z-10">
            <PillBadge href={project.badge === "JDLO AI" ? "https://jdlo.site" : undefined}>
              {project.badge}
            </PillBadge>
          </div>
        )}
        {/* Hover arrow */}
        <div className="absolute bottom-4 right-4 z-10 w-10 h-10 border hairline-strong flex items-center justify-center bg-ink/40 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500">
          <ArrowUpRight size={16} className="text-cream" />
        </div>
      </div>
      {/* Meta strip */}
      <div className="flex items-baseline justify-between gap-4 px-6 py-6 border-t hairline">
        <div>
          <p className="font-serif text-xl md:text-2xl text-cream leading-tight tracking-tight">
            {project.name}
          </p>
          <p className="mt-2 text-[10px] uppercase tracking-[0.28em] text-mist">
            {project.niche}
          </p>
        </div>
        <span className="text-[10px] uppercase tracking-[0.28em] text-mist group-hover:text-cream transition-colors duration-500 whitespace-nowrap">
          {String(index + 1).padStart(2, "0")} →
        </span>
      </div>
    </motion.a>
  );
}
