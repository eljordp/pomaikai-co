import { Link } from "react-router-dom";
import Wordmark from "../marks/Wordmark";
import { Instagram, Youtube, Linkedin, ArrowUpRight } from "lucide-react";
import PillBadge from "./PillBadge";

const ECOSYSTEM = [
  { to: "/marketing", label: "Marketing" },
  { to: "/capital", label: "Capital" },
  { to: "/coaching", label: "Coaching" },
  { to: "/academy", label: "Academy" },
  { to: "/partners", label: "Partners" },
];

export default function Footer() {
  return (
    <footer className="relative bg-ink border-t hairline">
      {/* Sitewide membership callout — restrained, above the normal footer grid. */}
      <div className="border-b hairline">
        <div className="container-editorial py-16 md:py-24">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-center">
            <div className="md:col-span-7">
              <div className="flex flex-wrap gap-3 mb-6">
                <PillBadge>Membership</PillBadge>
                <PillBadge>$500/mo</PillBadge>
              </div>
              <p className="font-serif text-2xl md:text-4xl text-cream leading-[1.15] text-balance max-w-[24ch]">
                Full ecosystem access. <span className="italic text-cream">One membership.</span>
              </p>
              <p className="mt-6 text-mist text-base md:text-lg max-w-[46ch]">
                Academy · Coaching · Capital · Marketing · Community. All included.
              </p>
            </div>
            <div className="md:col-span-5 md:text-right">
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

      <div className="container-editorial pt-28 md:pt-40 pb-14">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-16 md:gap-10 items-start">
          <div className="md:col-span-5">
            <Wordmark size="md" />
            <p className="mt-10 font-serif text-3xl md:text-4xl leading-[1.05] tracking-tight text-cream max-w-[22ch]">
              Building founders. <br className="hidden md:block" />
              Building businesses. <br className="hidden md:block" />
              <span className="italic text-cream">Building abundance.</span>
            </p>
          </div>

          <div className="md:col-span-3">
            <p className="text-[10px] uppercase tracking-[0.3em] text-mist mb-6">Ecosystem</p>
            <ul className="space-y-3.5">
              {ECOSYSTEM.map((l) => (
                <li key={l.to}>
                  <Link
                    to={l.to}
                    className="text-cream/85 hover:text-cream transition-colors duration-300"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-2">
            <p className="text-[10px] uppercase tracking-[0.3em] text-mist mb-6">Contact</p>
            <ul className="space-y-3.5 text-cream/85">
              <li>
                <a
                  href="mailto:hello@pomaikai.co"
                  className="hover:text-cream transition-colors"
                >
                  hello@pomaikai.co
                </a>
              </li>
              <li className="text-mist text-sm">Hilo · Honolulu</li>
              <li>
                <a href="/#survey" className="hover:text-cream transition-colors">
                  Start Here
                </a>
              </li>
            </ul>
          </div>

          <div className="md:col-span-2">
            <p className="text-[10px] uppercase tracking-[0.3em] text-mist mb-6">Follow</p>
            <div className="flex gap-4">
              <a
                href="#"
                aria-label="Instagram"
                className="w-9 h-9 border hairline flex items-center justify-center text-cream/80 hover:text-cream hover:border-cream transition-all duration-300"
              >
                <Instagram size={15} />
              </a>
              <a
                href="#"
                aria-label="YouTube"
                className="w-9 h-9 border hairline flex items-center justify-center text-cream/80 hover:text-cream hover:border-cream transition-all duration-300"
              >
                <Youtube size={15} />
              </a>
              <a
                href="#"
                aria-label="LinkedIn"
                className="w-9 h-9 border hairline flex items-center justify-center text-cream/80 hover:text-cream hover:border-cream transition-all duration-300"
              >
                <Linkedin size={15} />
              </a>
            </div>
          </div>
        </div>

        {/* CERTIFICATION BADGES — OUTLINE ghosts, not earned badges.
            Each ends with an honest qualifier ("In Progress" / "Setup" / "In Practice").
            Malachi to earn certifications before removing "In Progress" qualifiers. */}
        <div className="mt-24 md:mt-32 pt-8 border-t hairline">
          <p className="text-[10px] uppercase tracking-[0.3em] text-mist mb-5">
            Standards in practice
          </p>
          <div className="flex flex-wrap gap-2 md:gap-3">
            {[
              "ICF Coaching · In Progress",
              "HubSpot Marketing · In Progress",
              "Google Business · Setup",
              "SEO Practices · In Practice",
            ].map((label) => (
              <span
                key={label}
                className="inline-flex items-center px-3 py-1.5 border hairline text-[9.5px] uppercase tracking-[0.28em] text-cream/40 leading-none"
              >
                {label}
              </span>
            ))}
          </div>
        </div>

        <div className="mt-10 pt-8 border-t hairline flex flex-col md:flex-row justify-between gap-4 text-xs text-mist">
          <p>© {new Date().getFullYear()} Pomaika&rsquo;i Co. All rights reserved.</p>
          <p className="font-serif italic text-cream/60">Built in Hawai&rsquo;i.</p>
        </div>
      </div>
    </footer>
  );
}
