import { motion } from "framer-motion";
import { Heart, MessageCircle, Send, Bookmark } from "lucide-react";
import PillBadge from "./PillBadge";

type Props = {
  handle?: string;
  title: string;
  caption: string;
  badge?: string;
  href?: string;
  index?: number;
};

/**
 * IG-post-styled tile (4:5). NOT a real embed — placeholder handle @pomaikaico.
 * Swap to real embeds via Instagram oEmbed when the accounts are live.
 */
export default function IGTile({
  handle = "@pomaikaico",
  title,
  caption,
  badge,
  href,
  index = 0,
}: Props) {
  const Wrap = ({ children }: { children: React.ReactNode }) =>
    href ? (
      <a
        href={href}
        target="_blank"
        rel="noreferrer noopener"
        className="block group"
      >
        {children}
      </a>
    ) : (
      <div className="group">{children}</div>
    );

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.75, delay: index * 0.05, ease: [0.19, 1, 0.22, 1] }}
    >
      <Wrap>
        <div className="border hairline-strong bg-obsidian/60 overflow-hidden">
          {/* IG header row */}
          <div className="flex items-center justify-between px-4 py-3 border-b hairline">
            <div className="flex items-center gap-2.5">
              <div className="w-7 h-7 rounded-full bg-gradient-to-tr from-cream/40 via-mist to-char" />
              <span className="text-[11px] text-cream/90 tracking-wide">{handle}</span>
            </div>
            <span className="text-cream/50 text-lg leading-none">···</span>
          </div>

          {/* 4:5 media */}
          <div
            className="relative aspect-[4/5] overflow-hidden"
            style={{
              background:
                "linear-gradient(155deg, #14130f 0%, #1e1c17 45%, #14130f 100%)",
            }}
          >
            <div className="absolute inset-0 grain pointer-events-none" />
            <div className="absolute inset-0 flex items-center justify-center px-8">
              <p className="font-serif text-3xl md:text-4xl text-cream text-center leading-tight text-balance group-hover:scale-[1.02] transition-transform duration-[900ms] ease-editorial">
                {title}
              </p>
            </div>
            {badge && (
              <div className="absolute top-4 left-4">
                <PillBadge>{badge}</PillBadge>
              </div>
            )}
          </div>

          {/* IG actions */}
          <div className="flex items-center justify-between px-4 py-3 border-t hairline">
            <div className="flex items-center gap-4 text-cream/70">
              <Heart size={17} />
              <MessageCircle size={17} />
              <Send size={17} />
            </div>
            <Bookmark size={17} className="text-cream/70" />
          </div>

          {/* Caption */}
          <div className="px-4 pb-4 pt-1">
            <p className="text-sm text-cream/85 leading-relaxed">
              <span className="text-cream">{handle}</span>{" "}
              <span className="text-cream/75">{caption}</span>
            </p>
          </div>
        </div>
      </Wrap>
    </motion.div>
  );
}
