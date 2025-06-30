import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "./src/app/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        accent: {
          blue: "#0071E3",
          green: "#34C759",
          pink: "#FFB7C5",
          yellow: "#FFF6B7",
          purple: "#B7BFFF",
          orange: "#FFD6B7",
        },
        background: "#FFFFFF",
        card: {
          white: "#FAFAFA",
          pastel: "#F6F8FC",
        },
        gray: {
          50: "#F5F5F7",
          100: "#E5E5EA",
          200: "#D1D1D6",
          300: "#A1A1AA",
        },
        text: "#111111",
      },
      fontFamily: {
        sans: ["Inter", "Helvetica Neue", "Arial", "system-ui", "sans-serif"],
        display: [
          "Inter",
          "Helvetica Neue",
          "Arial",
          "system-ui",
          "sans-serif",
        ],
      },
      borderRadius: {
        md: "0.75rem",
        lg: "1.25rem",
        xl: "2rem",
        "4xl": "2.5rem",
      },
      boxShadow: {
        sm: "0 1px 4px 0 rgba(0,0,0,0.04)",
        md: "0 2px 8px 0 rgba(0,0,0,0.06)",
        xl: "0 8px 32px 0 rgba(0,0,0,0.10)",
        card: "0 12px 48px 0 rgba(0,0,0,0.10)",
      },
    },
  },
  plugins: [],
};

export default config;
