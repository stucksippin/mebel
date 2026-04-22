import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./data/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brown: {
          DEFAULT: "#8c5026",
          light: "#a8622f",
          dark: "#6b3d1c",
        },
        dark: "#272727",
        "off-white": "#f5f0eb",
        "gray-meb": {
          100: "#ede8e2",
          200: "#d6cfc6",
          400: "#9e9389",
          600: "#5c5550",
        },
      },
      fontFamily: {
        serif: ["Cormorant Garamond", "Georgia", "serif"],
        sans: ["Jost", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;