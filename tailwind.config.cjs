const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Roboto", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        tuna: "#35363e",
        cameo: "rgba(219,191,155,1)",
        fountainblue: "#dbbf9b",
        palesky: "#69acc9",
        bostonblue: "rgba(56,134,192,1)",
        scorpion: "rgba(91,90,91,1)",
        coffee: "rgba(121,103,87,1)",
        aztec: "rgba(6,13,14,1)",
        riverbed: "rgba(70,86,93,1)",
        hippiegreen: "rgba(76,132,76,1)",
      },
    },
  },

  plugins: [],
};
