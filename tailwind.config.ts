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
        ink: {
          DEFAULT: "#15131c",
          50: "rgba(21, 19, 28, 0.05)",
          10: "rgba(21, 19, 28, 0.10)",
          15: "rgba(21, 19, 28, 0.15)",
          20: "rgba(21, 19, 28, 0.20)",
          40: "rgba(21, 19, 28, 0.40)",
          500: "rgba(21, 19, 28, 0.50)",
          60: "rgba(21, 19, 28, 0.60)",
          70: "rgba(21, 19, 28, 0.70)",
          75: "rgba(21, 19, 28, 0.75)",
          80: "rgba(21, 19, 28, 0.80)",
          85: "rgba(21, 19, 28, 0.85)",
          90: "rgba(21, 19, 28, 0.90)",
        },
        paper: {
          DEFAULT: "#f1eef9",
          20: "rgba(241, 238, 249, 0.20)",
          40: "rgba(241, 238, 249, 0.40)",
          50: "rgba(241, 238, 249, 0.50)",
          70: "rgba(241, 238, 249, 0.70)",
          80: "rgba(241, 238, 249, 0.80)",
          90: "rgba(241, 238, 249, 0.90)",
        },
        accent: {
          DEFAULT: "#c6ff3d",
          40: "rgba(198, 255, 61, 0.40)",
        },
        clay: {
          sky: "#8fd3ff",
          pink: "#ff8fc7",
          mint: "#9dffc7",
          peach: "#ffc79e",
        },
        panel: "#e9e3f7",
        indigo: {
          DEFAULT: "#5b4cff",
        },
      },
      borderWidth: {
        "3": "3px",
      },
      borderRadius: {
        "clay-sm": "18px",
        "clay": "28px",
        "clay-lg": "40px",
      },
      boxShadow: {
        "brutal-sm": "3px 3px 0px 0px #15131c",
        "brutal": "6px 6px 0px 0px #15131c",
        "brutal-lg": "10px 10px 0px 0px #15131c",
        "clay": "6px 6px 0px 0px #15131c, inset 0 2px 6px hsla(0,0%,100%,.55), inset 0 -10px 16px rgba(0,0,0,.07)",
      },
      fontFamily: {
        display: ["var(--font-display)", "Space Grotesk", "sans-serif"],
        sans: ["var(--font-sans)", "Inter", "sans-serif"],
        mono: ["var(--font-mono)", "JetBrains Mono", "monospace"],
      },
      keyframes: {
        blob: {
          "0%, 100%": { borderRadius: "42% 58% 65% 35%/45% 40% 60% 55%" },
          "50%": { borderRadius: "60% 40% 35% 65%/55% 60% 40% 45%" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0) rotate(-1.5deg)" },
          "50%": { transform: "translateY(-14px) rotate(1deg)" },
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        pop: {
          "0%": { transform: "scale(0.9)", opacity: "0" },
          "60%": { transform: "scale(1.04)", opacity: "1" },
          "100%": { transform: "scale(1)", opacity: "1" },
        },
      },
      animation: {
        blob: "blob 9s ease-in-out infinite",
        float: "float 6s ease-in-out infinite",
        marquee: "marquee 26s linear infinite",
        pop: "pop 0.5s cubic-bezier(0.34, 1.56, 0.64, 1) forwards",
      },
    },
  },
  plugins: [],
};

export default config;
