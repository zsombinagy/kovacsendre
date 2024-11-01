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
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        "basic": ["Libre Baskerville", "serif"]
      }
    },
    colors: {
      "basicBackground": "#4b1f1f",
      "navbarBackground": "#EBE4DA",
      "white": "#ffffff",
      "black": "#000000"
    }
  },
  plugins: [],
};
export default config;
