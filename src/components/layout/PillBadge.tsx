import type { ReactNode, MouseEvent } from "react";

type Props = {
  children: ReactNode;
  className?: string;
  href?: string;
};

/**
 * Restrained pill badge — 1px hairline border, uppercase micro-type.
 * NOT a rounded solid button. Used for tile corners and hero eyebrows.
 * When `href` is passed, renders as a clickable link (opens new tab, stops propagation
 * so it doesn't trigger the outer tile's link).
 */
export default function PillBadge({ children, className = "", href }: Props) {
  const cls = `inline-flex items-center gap-2 px-3 py-1.5 border hairline-strong text-[9.5px] uppercase tracking-[0.28em] text-cream/85 leading-none ${className}`;

  if (href) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noreferrer noopener"
        onClick={(e: MouseEvent) => e.stopPropagation()}
        className={`${cls} hover:text-cream hover:border-cream transition-colors duration-300`}
      >
        {children}
      </a>
    );
  }

  return <span className={cls}>{children}</span>;
}
