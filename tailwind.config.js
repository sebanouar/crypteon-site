/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cryp: {
          gold: "#F0B90B",  // or chaleureux
          base: "#0052FF",  // bleu Base
        },
      },
      boxShadow: {
        glow: "0 0 0 1px rgba(240,185,11,.25), 0 10px 30px rgba(0,0,0,.45)",
      },
    },
  },
  plugins: [],
}
