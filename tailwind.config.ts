import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        // Luxury Mediterranean architectural travertine / warm linen palette
        stone: {
          50: "#FAF9F5",
          100: "#F5F3ED",
          150: "#EFECE3",
          200: "#E5E1D6",
          300: "#D3CDBC",
          400: "#A8A08D",
          500: "#7D7563",
          600: "#5D5749",
          700: "#443F34",
          800: "#2B2821",
          900: "#181713",
          950: "#0F0E0B",
        },
        // Deep architectural navy / obsidian ink for high-end contrast
        ink: {
          DEFAULT: "#0F141C",
          soft: "#1A202C",
          muted: "#4A5568",
          subtle: "#718096",
          faint: "#A0AEC0",
        },
        // Editorial Mediterranean juniper / emerald accent
        accent: {
          DEFAULT: "#0E5A44",
          hover: "#094333",
          light: "#E8F4F0",
          border: "#BCE2D7",
          gold: "#C5A880", // Warm Mediterranean sand gold
        },
      },
      fontFamily: {
        sans: ["var(--font-geist-sans)", "system-ui", "-apple-system", "sans-serif"],
        mono: ["var(--font-geist-mono)", "monospace"],
      },
      borderRadius: {
        "super-sm": "12px",
        super: "20px",
        "super-lg": "28px",
      },
      letterSpacing: {
        tightest: "-0.04em",
        tighter: "-0.02em",
        widest: "0.2em",
        mega: "0.28em",
      },
      boxShadow: {
        subtle: "0 1px 2px 0 rgba(15, 20, 28, 0.03)",
        card: "0 1px 3px 0 rgba(15, 20, 28, 0.04), 0 1px 2px -1px rgba(15, 20, 28, 0.03)",
        elevated: "0 12px 30px -10px rgba(15, 20, 28, 0.06), 0 4px 12px -2px rgba(15, 20, 28, 0.02)",
      },
    },
  },
  plugins: [],
};

export default config;
