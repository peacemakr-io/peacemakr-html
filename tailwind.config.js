const colors = require("tailwindcss/colors");

module.exports = {
  purge: ["gulp-pre-build/**/*.html"],
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
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/typography'),
    require('@tailwindcss/aspect-ratio'),
  ],
};