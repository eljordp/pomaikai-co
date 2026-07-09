import { NavLink, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import Wordmark from "../marks/Wordmark";

const NAV = [
  { to: "/", label: "Home" },
  { to: "/marketing", label: "Marketing" },
  { to: "/capital", label: "Capital" },
  { to: "/coaching", label: "Coaching" },
  { to: "/academy", label: "Academy" },
  { to: "/partners", label: "Partners" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-editorial ${
        scrolled
          ? "bg-ink/85 backdrop-blur-md border-b hairline"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="container-editorial flex items-center justify-between py-4 md:py-5">
        <Wordmark size="sm" />

        <nav className="hidden lg:flex items-center gap-9 text-[11px] uppercase tracking-[0.22em] text-mist">
          {NAV.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.to === "/"}
              className={({ isActive }) =>
                `relative transition-colors duration-300 hover:text-cream ${
                  isActive ? "text-cream" : ""
                }`
              }
            >
              {({ isActive }) => (
                <>
                  {item.label}
                  <span
                    className={`absolute -bottom-2 left-0 right-0 h-px bg-wheat origin-left transition-transform duration-500 ease-editorial ${
                      isActive ? "scale-x-100" : "scale-x-0"
                    }`}
                  />
                </>
              )}
            </NavLink>
          ))}
        </nav>

        <div className="hidden lg:block">
          <a
            href="/#survey"
            className="group inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.22em] text-ink bg-wheat px-5 py-2.5 hover:bg-wheatLight transition-colors duration-300"
          >
            Apply
            <span className="w-4 h-px bg-ink group-hover:w-6 transition-all duration-300" />
          </a>
        </div>

        <button
          aria-label="Menu"
          className="lg:hidden text-cream"
          onClick={() => setOpen((s) => !s)}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile drawer */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-500 ease-editorial bg-ink border-t hairline ${
          open ? "max-h-[600px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav className="container-editorial py-10 flex flex-col gap-6">
          {NAV.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.to === "/"}
              className={({ isActive }) =>
                `font-serif text-3xl tracking-tight transition-colors ${
                  isActive ? "text-wheat" : "text-cream"
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
          <a
            href="/#survey"
            className="mt-4 inline-flex items-center gap-2 text-xs uppercase tracking-[0.22em] text-ink bg-wheat px-5 py-3 w-fit"
          >
            Apply / Survey
          </a>
        </nav>
      </div>
    </header>
  );
}
