/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#0B1220",
        secondary: "#9FB3C8",
        tertiary: "#132036",
        "black-100": "#0E1728",
        "black-200": "#0A101C",
        "white-100": "#F4F1EC",
        copper: "#E8935B",
        teal: "#6FB7A8",
      },
      boxShadow: {
        card: "0px 35px 120px -15px #050b14",
      },
      screens: {
        xs: "450px",
      },
      backgroundImage: {
        "hero-pattern": "url('/src/assets/herobg.png')",
      },
    },
  },
  plugins: [],
};
