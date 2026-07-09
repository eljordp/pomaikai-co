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
const DEFAULT_PROJECTS: Project[] = [
  { name: "Waimea Lamb Co.", niche: "Agriculture · Storefront", href: "https://waimea-lamb-co.vercel.app", badge: "JDLO AI" },
  { name: "Aesthetics by Kayy", niche: "Beauty · Booking", href: "https://adorned-landing.vercel.app", badge: "JDLO AI" },
  { name: "Reese VIP", niche: "AI · Concierge", href: "https://reesvip.com", badge: "JDLO AI" },
  { name: "Ace Venen", niche: "Trading · Coaching", href: "https://ace-venen-newage.vercel.app", badge: "JDLO AI" },
  { name: "Buehler Capital", niche: "Finance · Advisory", href: "https://buehler-capital.vercel.app", badge: "JDLO AI" },
  { name: "Carusso Furniture", niche: "Restoration · Trades", href: "https://carussos-restoration.vercel.app", badge: "JDLO AI" },
  { name: "B. Pressed", niche: "Retail · Private", href: "https://b-pressed.com", badge: "Pomaika'i" },
  { name: "Meridian Fleet", niche: "B2B · Services", href: "https://meridian-fleet-lilac.vercel.app", badge: "JDLO AI" },
  { name: "Sticker Smith", niche: "Print · E-commerce", href: "https://tssprint.com", badge: "JDLO AI" },
];

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

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-0 border-t border-l hairline">
          {projects.map((p, i) => (
            <ProjectTile key={p.name} project={p} index={i} />
          ))}
        </div>

        <p className="mt-16 text-[10px] uppercase tracking-[0.3em] text-mist">
          Case study PDFs on request · hello@pomaikai.co
        </p>
      </div>
    </section>
  );
}

function ProjectTile({ project, index }: { project: Project; index: number }) {
  const seedGradient = [
    "linear-gradient(135deg, #1a1917 0%, #2a2620 50%, #1a1917 100%)",
    "linear-gradient(160deg, #14130f 0%, #22201a 50%, #14130f 100%)",
    "linear-gradient(120deg, #101010 0%, #1e1c17 50%, #101010 100%)",
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
      {/* Visual */}
      <div
        className="relative aspect-[4/3] overflow-hidden"
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
        {/* Fallback serif name — visible unless image successfully loads */}
        <div className="absolute inset-0 flex items-center justify-center px-8 pointer-events-none">
          <p className="font-serif italic text-3xl md:text-4xl text-cream/40 text-center leading-tight">
            {project.name}
          </p>
        </div>
        {/* Grain */}
        <div className="absolute inset-0 grain pointer-events-none" />
        {/* Top-right badge */}
        {project.badge && (
          <div className="absolute top-4 right-4 z-10">
            <PillBadge>{project.badge}</PillBadge>
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
