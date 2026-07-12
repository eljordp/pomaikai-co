// Malachi to send 7 real quotes with names + consent.
// Replace placeholders in `src/data/testimonials.ts` once approved.
//
// Format each real entry as:
//   { quote: "The real quote...", name: "Full Name", role: "Optional role · Location" }
//
// Until then, we ship restrained placeholders. NEVER swap these for fabricated quotes.

export type Testimonial = {
  quote: string;
  name?: string;
  role?: string;
};

export const TESTIMONIALS: Testimonial[] = [
  {
    quote: "Testimonials rolling in. Founders across Waimea, Hilo, and the Bay Area. Quotes drop after their consent.",
    name: "The Room",
    role: "Pomaika'i Ecosystem",
  },
  {
    quote: "Testimonial from a Waimea agriculture operator — coming soon.",
  },
  {
    quote: "Testimonial from a Big Island coaching client — coming soon.",
  },
  {
    quote: "Testimonial from a Bay Area founder — coming soon.",
  },
  {
    quote: "Testimonial from a Hilo-based service business — coming soon.",
  },
  {
    quote: "Testimonial from a Pomaika'i Academy member — coming soon.",
  },
  {
    quote: "Testimonial from a capital strategy client — coming soon.",
  },
];
