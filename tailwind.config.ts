import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        accent: {
          DEFAULT: "#7C5CFC",
          2: "#22D3EE",
        },
        surface: {
          DEFAULT: "#0C0C10",
          2: "#131318",
        },
        ink: {
          DEFAULT: "#111111",
          bg: "#040406",
        },
      },
      fontFamily: {
        display: ["var(--font-body)", "sans-serif"],
        body: ["var(--font-body)", "sans-serif"],
      },
      backgroundImage: {
        "grad-accent": "linear-gradient(135deg, #7C5CFC 0%, #22D3EE 100%)",
        "dark-base": "radial-gradient(ellipse at 60% 0%, #0D0B1A 0%, #040406 60%)",
      },
    },
  },
  plugins: [],
};

export default config;
