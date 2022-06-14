const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "yellow-accent": "#fae06a",
        "green-accent": "#3edc85",
        "blue-accent": "#285bf4",
        "blue-button": "#6ad9ea",
      },
      fontFamily: {
        sans: ["Roboto"],
        serif: ["Roboto"],
        roboto: ["Roboto", ...defaultTheme.fontFamily.sans],
        urbanist: ["Urbanist"],
      },
    },
  },
  plugins: [],
};
