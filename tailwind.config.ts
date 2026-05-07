import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        orange: {
          primary: "#E8740C",
          light: "#FEF0E3",
          mid: "#D4680A",
        },
        cream: {
          DEFAULT: "#FDF8F3",
          dark: "#fcebd8",
        },
        ink: {
          DEFAULT: "#111111",
          bg: "#0A0A0A",
          warm: "#0f0a05",
          mid: "#1a0f05",
          accent: "#2a1508",
          edge: "#3d1e07",
        },
        warning: "#F59E0B",
        critical: "#EF4444",
      },
      fontFamily: {
        display: ["var(--font-display)", "sans-serif"],
        body: ["var(--font-body)", "sans-serif"],
      },
      backgroundImage: {
        "premium-dark":
          "linear-gradient(135deg, #0A0A0A 0%, #0f0a05 35%, #1a0f05 60%, #2a1508 85%, #3d1e07 100%)",
        "orange-gradient":
          "linear-gradient(135deg, #E8740C 0%, #D4680A 100%)",
      },
    },
  },
  plugins: [],
};

export default config;
