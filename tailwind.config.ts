import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        canvas: "#f7f8fc",
        ink: "#0f172a",
        muted: "#475569",
      },
      boxShadow: {
        soft: "0 20px 60px rgba(15, 23, 42, 0.08)",
        pill: "0 10px 30px rgba(15, 23, 42, 0.08)",
        glow: "0 18px 44px rgba(96, 92, 255, 0.24)",
      },
      backgroundImage: {
        "hero-wash":
          "radial-gradient(circle at top, rgba(255,255,255,0.98), rgba(244,247,255,0.92) 55%, rgba(240,244,255,0.88))",
        "button-shine": "linear-gradient(135deg, #2563eb 0%, #7c3aed 100%)",
      },
      fontFamily: {
        sans: [
          "Inter",
          "-apple-system",
          "BlinkMacSystemFont",
          "\"Segoe UI\"",
          "sans-serif",
        ],
      },
    },
  },
  plugins: [],
};

export default config;
