/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  prefix: "tw-",
  content: [
    "src/components/*.astro",
    "src/layouts/*.astro",
    "src/pages/*.astro",
    "src/pages/*/*.astro",
  ],
  theme: {
    backgroundSize: {
      'auto': 'auto',
      'cover': 'cover',
      'contain': 'contain',
      '100%': '100%',
    },
    extend: {
      screens: {
        'sm': {'min': '768px'},
        'md': {'min': '980px'},
        'lg': {'min': '1200px'},
        'sm-max': {'max': '767px'},
        'md-max': {'max': '979px'},
        'lg-max': {'max': '1199px'}
      },
    },
  },
  plugins: [
    function({ addUtilities }) {
      const newUtilities = {
        ".text-shadow-white": {
          textShadow: "0px 0px 5px white"
        }
      };

      addUtilities(newUtilities);
    }
  ],
}