const colors = require("tailwindcss/colors");

module.exports = {
  mode: "jit",
  content: [
    "./components/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./slices/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class", // 'media' or 'class', or remove if unused
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
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("@tailwindcss/line-clamp"),
  ],
};
