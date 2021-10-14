const colors = require("tailwindcss/colors");

module.exports = {
  mode: "jit",
  purge: [
    "./components/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./slices/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    container: {
      center: true,
      padding: "1rem",
    },
    gradientColorStops: {
      ...colors,
    },
    extend: {
      colors: {
        ...colors,
        transparent: "transparent",
        current: "currentColor",
        //custom colours go here
      },
      zIndex: {
        "-10": "-10",
      },
      fontSize: {
        "6xl": "4rem",
      },
      inset: {
        "1/2": "50%",
      },
      transitionProperty: {
        background: "background-color",
      },
      translate: {
        "1/12": "8.333333%",
        "2/12": "16.666667%",
        "3/12": "25%",
        "4/12": "33.333333%",
        "5/12": "41.666667%",
        "6/12": "50%",
        "7/12": "58.333333%",
        "8/12": "66.666667%",
        "9/12": "75%",
        "10/12": "83.333333%",
        "11/12": "91.666667%",
      },
      scale: {
        60: "0.6",
        70: "0.7",
        80: "0.8",
        90: "0.9",
      },
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("@tailwindcss/line-clamp"),
  ],
};
