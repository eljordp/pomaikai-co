import type { ReactNode } from "react";

type Props = {
  children: ReactNode;
  className?: string;
};

/**
 * Restrained pill badge — 1px hairline border, uppercase micro-type.
 * NOT a rounded solid button. Used for tile corners and hero eyebrows.
 */
export default function PillBadge({ children, className = "" }: Props) {
  return (
    <span
      className={`inline-flex items-center gap-2 px-3 py-1.5 border hairline-strong text-[9.5px] uppercase tracking-[0.28em] text-cream/85 leading-none ${className}`}
    >
      {children}
    </span>
  );
}
