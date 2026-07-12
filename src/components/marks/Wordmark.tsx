import { Link } from "react-router-dom";

type Props = {
  size?: "sm" | "md" | "lg";
  showTag?: boolean;
  className?: string;
};

/**
 * PŌMAIKA'I logo — matches the pomaika.co header treatment.
 * Just the logo image (no separate wordmark text — PŌMAIKA'I is baked into the mark).
 */
export default function Wordmark({ size = "sm", showTag = false, className = "" }: Props) {
  const markHeight =
    size === "lg" ? "h-14 md:h-16" : size === "md" ? "h-11 md:h-12" : "h-9 md:h-10";

  return (
    <Link to="/" className={`group inline-flex items-center gap-3 ${className}`}>
      <img
        src="/pomaikai-logo.png"
        alt="Pōmaika'i"
        className={`${markHeight} w-auto transition-transform duration-500 ease-editorial group-hover:rotate-2`}
      />
      {showTag && (
        <span className="hidden md:inline text-[10px] tracking-[0.3em] text-mist uppercase pl-3 border-l hairline-strong">
          Ecosystem Co.
        </span>
      )}
    </Link>
  );
}
