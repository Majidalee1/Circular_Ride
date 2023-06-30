/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],

  theme: {
    extend: {
      screens: {
        zero: { min: "0px", max: "599px" },
        mobile: { min: "600px", max: "899px" },
        laptop: { min: "900px", max: "1199px" },

        lcd: { min: "1200px", max: "1399px" },
        tv: { min: "1400px", max: "1599px" },
        ...defaultTheme.screens,
      },
    },
  },
  plugins: [],
};
