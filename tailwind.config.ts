import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        forest: {
          50: "#f4f8f1",
          100: "#e7f0df",
          200: "#cfe0bf",
          300: "#aac88f",
          400: "#86ad66",
          500: "#668f48",
          600: "#4f7237",
          700: "#2a5b35",
          800: "#1f462b",
          900: "#143121",
          950: "#0d2117"
        },
        gold: {
          100: "#f5ead2",
          300: "#ddbf75",
          500: "#bd9342",
          700: "#86642d"
        },
        cream: "#fbf8f0",
        graphite: "#26302b"
      },
      fontFamily: {
        serif: ["var(--font-heading)", "Georgia", "serif"],
        sans: ["var(--font-body)", "Inter", "Arial", "sans-serif"]
      },
      boxShadow: {
        soft: "0 22px 70px rgba(20, 49, 33, 0.12)",
        card: "0 14px 38px rgba(20, 49, 33, 0.08)"
      }
    }
  },
  plugins: []
};

export default config;
