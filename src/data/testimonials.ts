// Real quotes per Malachi iMessage 2026-07-20.
// Waimea Lamb quote is Malachi's paraphrase of what the client tells him —
// official version lands after his Thursday meeting. Swap it then.
// JDLO leads the rotation per JP 2026-07-20; name links to jdlo.site.

export type Testimonial = {
  quote: string;
  name?: string;
  role?: string;
  href?: string;
  sector?: "growth" | "leadership" | "capital" | "institute" | "collective";
};

export const TESTIMONIALS: Testimonial[] = [
  {
    quote:
      "When I connected with Pomaika’i, I was building fast but building alone. The partnership put real founders and real projects in front of me, and every single one pushed my company to another level. Beyond the builds, working inside this ecosystem sharpened my standards, my discipline, and the way I run my business every day. What started as one website turned into a portfolio of live businesses across Hawai’i and the mainland. If you bring real work to the table, Pomaika’i matches it.",
    name: "JDLO",
    role: "Partner",
    href: "https://jdlo.site",
    sector: "collective",
  },
  {
    quote:
      "Beyond grateful and appreciative of Pomaika’i. The patience, clear communication, efficiency, and value provided are truly immeasurable. The growth has been conclusive.",
    name: "Waimea Lamb Company",
    role: "Growth",
    sector: "growth",
  },
  {
    quote:
      "Pomaika’i exceeded my expectations. They gave me strategic guidance on intentional content creation, helped me build a growth oriented mindset, and delivered real, practical financial literacy. Their approach is structured, disciplined, and built for long term sustainability. If you’re serious about personal and professional development, Pomaika’i is the move.",
    name: "Miss Hawai’i Island USA",
    role: "Leadership",
    sector: "leadership",
  },
  {
    quote:
      "Before Pomaika’i, I had no idea how much money I was leaving on the table. They helped me identify my highest leverage areas and build step by step plans for execution. Beyond capital strategy, we worked together to cultivate a self disciplined mindset. I reconnected with my value, and the things that once cost me money and peace became leverage.",
    name: "Mason C.",
    role: "Capital",
    sector: "capital",
  },
  {
    quote:
      "Pomaika’i changed my life and gave me an opportunity to not only pursue my passion but live it. Working toward turning my dreams into reality.",
    name: "Elijah A.",
    role: "Institute",
    sector: "institute",
  },
];

export function testimonialFor(sector: Testimonial["sector"]) {
  return TESTIMONIALS.find((t) => t.sector === sector);
}
