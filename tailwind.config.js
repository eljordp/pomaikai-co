/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#0a0a0a",
        obsidian: "#111110",
        char: "#1a1917",
        cream: "#f0ebe0",
        bone: "#e8e2d3",
        mist: "#a89f8f",
        muted: "#6b6558",
        // Legacy wheat tokens remapped to warm off-whites — NO gold anywhere.
        // Kept as aliases so existing className references continue to compile.
        wheat: "#e8e2d3",
        wheatLight: "#f0ebe0",
        wheatDeep: "#a89f8f",
        // Crash course (/crash-course). Same palette as the site, as named
        // tokens so the course can use opacity steps like bg-cc-fg/10.
        cc: {
          bg: "rgb(10 10 10 / <alpha-value>)",
          card: "rgb(17 17 16 / <alpha-value>)",
          muted: "rgb(30 29 27 / <alpha-value>)",
          line: "rgb(44 42 38 / <alpha-value>)",
          fg: "rgb(240 235 224 / <alpha-value>)",
          dim: "rgb(168 159 143 / <alpha-value>)",
          ring: "rgb(168 159 143 / <alpha-value>)",
          bad: "rgb(186 44 44 / <alpha-value>)",
          "bad-fg": "rgb(255 255 255 / <alpha-value>)",
        },
      },
      fontFamily: {
        serif: ['"Instrument Serif"', 'ui-serif', 'Georgia', 'serif'],
        sans: ['"Inter Tight Variable"', '"Inter Tight"', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        "cc-display": ['"Instrument Serif"', 'ui-serif', 'Georgia', 'serif'],
      },
      letterSpacing: {
        tightest: "-0.04em",
        tighter2: "-0.025em",
        editorial: "-0.015em",
      },
      fontSize: {
        "display-xl": ["clamp(3.75rem, 8vw, 8.5rem)", { lineHeight: "0.95", letterSpacing: "-0.03em" }],
        "display-lg": ["clamp(3rem, 6vw, 6.5rem)", { lineHeight: "0.98", letterSpacing: "-0.025em" }],
        "display-md": ["clamp(2.25rem, 4.5vw, 4.5rem)", { lineHeight: "1.02", letterSpacing: "-0.02em" }],
      },
      transitionTimingFunction: {
        editorial: "cubic-bezier(0.19, 1, 0.22, 1)",
      },
    },
  },
  plugins: [],
};
