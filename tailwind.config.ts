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
        background: "#0b0c10",
        foreground: "#ffffff",
        primary: {
          DEFAULT: "#8b5cf6",
          dark: "#7c3aed",
          light: "#a78bfa",
        },
        secondary: {
          DEFAULT: "#06b6d4",
          dark: "#0891b2",
          light: "#22d3ee",
        },
        accent: {
          DEFAULT: "#f472b6",
          dark: "#db2777",
          light: "#f9a8d4",
        },
        muted: {
          DEFAULT: "#1f2937",
          foreground: "#9ca3af",
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "gradient-primary": "linear-gradient(135deg, #8b5cf6 0%, #06b6d4 100%)",
        "gradient-secondary": "linear-gradient(135deg, #f472b6 0%, #8b5cf6 100%)",
      },
      animation: {
        "blob": "blob 7s infinite",
        "float": "float 6s ease-in-out infinite",
        "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "particle": "particle 8s ease-in-out infinite",
      },
      keyframes: {
        blob: {
          "0%": {
            transform: "translate(0px, 0px) scale(1)",
          },
          "33%": {
            transform: "translate(30px, -50px) scale(1.1)",
          },
          "66%": {
            transform: "translate(-20px, 20px) scale(0.9)",
          },
          "100%": {
            transform: "translate(0px, 0px) scale(1)",
          },
        },
        float: {
          "0%, 100%": {
            transform: "translateY(0px)",
          },
          "50%": {
            transform: "translateY(-20px)",
          },
        },
        particle: {
          "0%, 100%": {
            transform: "translate(0, 0) scale(1)",
            opacity: "0.3",
          },
          "25%": {
            transform: "translate(10px, -10px) scale(1.2)",
            opacity: "0.6",
          },
          "50%": {
            transform: "translate(-5px, -20px) scale(0.8)",
            opacity: "0.4",
          },
          "75%": {
            transform: "translate(-10px, 10px) scale(1.1)",
            opacity: "0.5",
          },
        },
      },
    },
  },
  plugins: [],
};
export default config;
