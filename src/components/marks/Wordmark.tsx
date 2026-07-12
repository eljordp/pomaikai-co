import { Link } from "react-router-dom";

type Props = {
  size?: "sm" | "md" | "lg";
  showTag?: boolean;
  className?: string;
};

/**
 * PŌMAIKA'I wordmark. Warm-cream glyph — no gold anywhere.
 */
export default function Wordmark({ size = "sm", showTag = false, className = "" }: Props) {
  const wordSize =
    size === "lg"
      ? "text-2xl md:text-3xl"
      : size === "md"
        ? "text-lg md:text-xl"
        : "text-sm md:text-base";
  const glyphSize = size === "lg" ? 26 : size === "md" ? 20 : 16;

  const markSize = size === "lg" ? 44 : size === "md" ? 34 : 28;

  return (
    <Link to="/" className={`group inline-flex items-center gap-2.5 ${className}`}>
      <img
        src="/pomaikai-logo.png"
        alt="Pōmaika'i"
        width={markSize}
        height={markSize}
        className="transition-transform duration-500 ease-editorial group-hover:rotate-3"
      />
      <span className={`font-serif ${wordSize} tracking-tight text-cream leading-none`}>
        PŌMAIKA<span className="text-cream/60">&rsquo;</span>I
      </span>
      {showTag && (
        <span className="hidden md:inline text-[10px] tracking-[0.3em] text-mist uppercase pl-3 border-l hairline-strong">
          Ecosystem Co.
        </span>
      )}
    </Link>
  );
}
