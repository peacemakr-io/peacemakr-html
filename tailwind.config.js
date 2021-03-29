const colors = require("tailwindcss/colors");

module.exports = {
  purge: ["src/**/*.html"],
  theme: {
    extend: {
      appearance: ['hover', 'focus'],
      colors: {
        teal: colors.indigo,
        orange: colors.gray
      }
    },
  },
  variants: {},
  plugins: [
    require('tailwindcss-aspect-ratio'),
    require('@tailwindcss/typography')
  ],
};