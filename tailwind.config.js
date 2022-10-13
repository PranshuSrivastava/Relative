/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      colors: {
        color1: "rgba(98, 106, 136, 0.1)",
        color2: "rgba(46, 49, 73, 0.1)",
        color3: "#14172B",
        positive: "#00FFA3",
        negative: "#FF4D4D",
        defaultText: "#737BAE",
        whiteText: "#ECF0FF",
        greyText: "#5A5F7D",
      },
      fontFamily: {
        defaultFont: "Tomorrow",
      },
    },
  },
  plugins: [],
};
