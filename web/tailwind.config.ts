import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        math: "#1CB0F6",
        english: "#FF6B6B",
        science: "#58CC02",
        streak: "#F97316",
        gold: "#FFC800",
        correct: "#22C55E",
        wrong: "#EF4444",
        purple: { hero: "#6B21A8" },
        bg: { app: "#F9FAFB", dark: "#111827" },
        surface: "#FFFFFF",
        text: { primary: "#111827", secondary: "#6B7280" },
      },
      fontFamily: {
        sans: ["var(--font-geist-sans)", "system-ui", "sans-serif"],
        kid: ["Nunito", "system-ui", "sans-serif"],
      },
      animation: {
        "flame-pulse": "flame-pulse 1.5s ease-in-out infinite",
        "slide-up": "slide-up 0.3s ease-out",
        "fade-in": "fade-in 0.2s ease-out",
      },
      keyframes: {
        "flame-pulse": {
          "0%, 100%": { transform: "scale(1)" },
          "50%": { transform: "scale(1.15)" },
        },
        "slide-up": {
          from: { transform: "translateY(20px)", opacity: "0" },
          to: { transform: "translateY(0)", opacity: "1" },
        },
        "fade-in": {
          from: { opacity: "0" },
          to: { opacity: "1" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
