const colors = require("tailwindcss/colors");

module.exports = {
  purge: ["src/**/*.html"],
  theme: {
    extend: {
      colors: {
        teal: colors.indigo,
        orange: colors.gray
      }
    },
  },
  variants: {},
  plugins: [
    require('@tailwindcss/typography')
  ],
};