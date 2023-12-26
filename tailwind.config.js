/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        Poseidon: "#133955",
        Gainsboro: "#dbdbdb",
        Text: "#333333",
      },
      fontFamily: {
        Raleway: "Raleway, sans-serif",
      },
      backgroundImage: {
        Hamburger: "url('./public/assets/icons8-menu-48.png')",
        Close: "url('./public/assets/icons8-close-48.png')",
      },
    },
  },
  plugins: [],
};
