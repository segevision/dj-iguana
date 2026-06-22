import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        black: "#050505",
        gold: "#D4AF37",
        "gold-light": "#F0D060",
        "gold-dark": "#B8960A",
        green: "#39FF14",
        "green-dim": "#1aad08",
        white: "#FFFFFF",
        "gray-900": "#111111",
        "gray-800": "#1A1A1A",
        "gray-700": "#2A2A2A",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "sans-serif"],
        display: ["var(--font-bebas)", "sans-serif"],
      },
      animation: {
        "pulse-gold": "pulse-gold 2s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "spin-slow": "spin 8s linear infinite",
        "float": "float 6s ease-in-out infinite",
        "glow": "glow 2s ease-in-out infinite",
        "wave": "wave 3s ease-in-out infinite",
        "scan": "scan 3s linear infinite",
      },
      keyframes: {
        "pulse-gold": {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.5" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-20px)" },
        },
        glow: {
          "0%, 100%": { boxShadow: "0 0 20px rgba(212,175,55,0.4)" },
          "50%": { boxShadow: "0 0 60px rgba(212,175,55,0.8), 0 0 100px rgba(57,255,20,0.3)" },
        },
        wave: {
          "0%, 100%": { transform: "scaleY(1)" },
          "50%": { transform: "scaleY(2)" },
        },
        scan: {
          "0%": { transform: "translateY(-100%)" },
          "100%": { transform: "translateY(100vh)" },
        },
      },
      backgroundImage: {
        "gold-gradient": "linear-gradient(135deg, #D4AF37 0%, #F0D060 50%, #B8960A 100%)",
        "green-gradient": "linear-gradient(135deg, #39FF14 0%, #1aad08 100%)",
        "dark-gradient": "linear-gradient(180deg, #050505 0%, #0f0f0f 100%)",
      },
    },
  },
  plugins: [],
};

export default config;
