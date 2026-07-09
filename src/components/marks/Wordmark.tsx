import { Link } from "react-router-dom";

type Props = {
  size?: "sm" | "md" | "lg";
  showTag?: boolean;
  className?: string;
};

/**
 * PŌMAIKA'I wordmark with a small gold wheat-glyph.
 * Uses Instrument Serif for the mark, kept restrained.
 */
export default function Wordmark({ size = "sm", showTag = false, className = "" }: Props) {
  const wordSize =
    size === "lg"
      ? "text-2xl md:text-3xl"
      : size === "md"
        ? "text-lg md:text-xl"
        : "text-sm md:text-base";
  const glyphSize = size === "lg" ? 26 : size === "md" ? 20 : 16;

  return (
    <Link to="/" className={`group inline-flex items-center gap-2.5 ${className}`}>
      <svg
        width={glyphSize}
        height={glyphSize}
        viewBox="0 0 32 32"
        fill="none"
        aria-hidden
        className="text-wheat transition-transform duration-500 ease-editorial group-hover:rotate-6"
      >
        <g stroke="currentColor" strokeWidth="1.4" strokeLinecap="round">
          <path d="M16 4 L16 28" />
          <path d="M16 10 C 10 10 8 12 8 16" />
          <path d="M16 10 C 22 10 24 12 24 16" />
          <path d="M16 16 C 10 16 8 18 8 22" />
          <path d="M16 16 C 22 16 24 18 24 22" />
          <path d="M16 22 C 12 22 10 23 10 26" />
          <path d="M16 22 C 20 22 22 23 22 26" />
        </g>
      </svg>
      <span className={`font-serif ${wordSize} tracking-tight text-cream leading-none`}>
        PŌMAIKA<span className="text-wheat">&rsquo;</span>I
      </span>
      {showTag && (
        <span className="hidden md:inline text-[10px] tracking-[0.3em] text-mist uppercase pl-3 border-l hairline-strong border-l-[color:var(--tw-border-opacity)]">
          Ecosystem Co.
        </span>
      )}
    </Link>
  );
}
