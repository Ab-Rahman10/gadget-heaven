/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        customColor: "#9538E2",
      },
      fontFamily: {
        sora: ["Sora", " sans-serif"],
      },
      backgroundImage: {
        "hero-pattern": "url('./assets/banner.jpg')",
      },
    },
  },
  plugins: [require("daisyui")],
};
