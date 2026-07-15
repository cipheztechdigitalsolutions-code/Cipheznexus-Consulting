import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "#080A11",
        panel: "rgba(9,12,21,0.55)",
        gold: "#F5C451",
        "gold-bright": "#FBD778",
        teal: "#2DD4BF",
        "teal-deep": "#14B8A6",
        cloud: "#EDEFF4",
        mute: "#98A2B6",
        mute2: "#8A94A8",
        faint: "#6E798E",
      },
      fontFamily: {
        sans: ["var(--font-archivo)", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "monospace"],
      },
      maxWidth: {
        shell: "1240px",
      },
      keyframes: {
        blink: {
          "0%,100%": { opacity: "1" },
          "50%": { opacity: "0.15" },
        },
        floaty: {
          "0%,100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-8px)" },
        },
      },
      animation: {
        blink: "blink 1.6s steps(1) infinite",
        floaty: "floaty 6s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
