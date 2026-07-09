import { Link } from "react-router-dom";
import Wordmark from "../marks/Wordmark";
import { Instagram, Youtube, Linkedin } from "lucide-react";

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
      <div className="container-editorial pt-28 md:pt-40 pb-14">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-16 md:gap-10 items-start">
          <div className="md:col-span-5">
            <Wordmark size="md" />
            <p className="mt-10 font-serif text-3xl md:text-4xl leading-[1.05] tracking-tight text-cream max-w-[22ch]">
              Building founders. <br className="hidden md:block" />
              Building businesses. <br className="hidden md:block" />
              <span className="italic text-wheatLight">Building abundance.</span>
            </p>
          </div>

          <div className="md:col-span-3">
            <p className="text-[10px] uppercase tracking-[0.3em] text-mist mb-6">Ecosystem</p>
            <ul className="space-y-3.5">
              {ECOSYSTEM.map((l) => (
                <li key={l.to}>
                  <Link
                    to={l.to}
                    className="text-cream/85 hover:text-wheat transition-colors duration-300"
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
                  className="hover:text-wheat transition-colors"
                >
                  hello@pomaikai.co
                </a>
              </li>
              <li className="text-mist text-sm">Hilo · Honolulu</li>
              <li>
                <a href="/#survey" className="hover:text-wheat transition-colors">
                  Growth Survey
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
                className="w-9 h-9 border hairline flex items-center justify-center text-cream/80 hover:text-wheat hover:border-wheat transition-all duration-300"
              >
                <Instagram size={15} />
              </a>
              <a
                href="#"
                aria-label="YouTube"
                className="w-9 h-9 border hairline flex items-center justify-center text-cream/80 hover:text-wheat hover:border-wheat transition-all duration-300"
              >
                <Youtube size={15} />
              </a>
              <a
                href="#"
                aria-label="LinkedIn"
                className="w-9 h-9 border hairline flex items-center justify-center text-cream/80 hover:text-wheat hover:border-wheat transition-all duration-300"
              >
                <Linkedin size={15} />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-24 md:mt-32 pt-8 border-t hairline flex flex-col md:flex-row justify-between gap-4 text-xs text-mist">
          <p>© {new Date().getFullYear()} Pomaika&rsquo;i Co. All rights reserved.</p>
          <p className="font-serif italic text-wheatLight/80">Built in Hawai&rsquo;i.</p>
        </div>
      </div>
    </footer>
  );
}
