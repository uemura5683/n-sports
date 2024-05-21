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
    extend: {
      screens: {
        'sm': {'min': '768px'},
        'md': {'min': '980px'},
        'sm-max': {'max': '767px'},
        'md-max': {'max': '979px'}
      },
    },
  },
  plugins: [
    function({ addUtilities }) {
      const newUtilities = {
        ".text-shadow-white": {
          textShadow: "0px 0px 5px white, 0px 0px 5px white",
        },
        ".filter-drow-shadow": {
          filter: "drop-shadow(0px 0px 1px #fff) drop-shadow(0px 0px 1px #fff)",
        },
        ".loading-animation": {
          animation: "loading-animation .8s linear 0s infinite",
        },
        ".rendercanvas": {
          width: "100%",
          height: "100vh",
          top: "0px",
          left: "0px",
          TouchEvent: "none"
        },
        ".close-btn-line": {
          filter: "drop-shadow(0px 0px 1px #ffffff) drop-shadow(0px 0px 1px #ffffff)",
        },
      };
      addUtilities(newUtilities);
    }
  ],
}