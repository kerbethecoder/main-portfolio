/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        primaryFont: [`"Source Sans 3"`, "sans-serif"], //400, 700
        secondaryFont: ["Playfair Display", "serif"], //400, 700
        inter: ["Inter", "sans-serif"], //400, 700
      },
      colors: {
        primaryBg: "#FFFFE3",
        secondaryBg: "#10100E",
        dimBlack: "#1a1a1a8a",
      },
    },
  },
  plugins: [],
}
