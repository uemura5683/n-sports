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
      animation: {
        "loading-animation":
          "loading-animation .8s linear 0s infinite",
        "card-fadein":
          "card-fadein 0.5s ease-in-out 0s infinite",
      },
      keyframes: {
        "loading-animation": {
          "0%": {
            transform: "rotate(0)",
          },
          to: {
            transform: "rotate(359deg)",
          },
        },
        "card-fadein": {
          "0%": {
            transform: "scale(0)",
            opacity: 0,
          },
          "80%": {
            transform: "scale(1.1)",
            opacity: 0.8,
          },  
          "100%": {
              transform: "scale(1)",
              opacity: 1,
          }
        },        
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
        ".rendercanvas": {
          width: "100%",
          height: "100vh",
          top: "0px",
          left: "0px",
          TouchEvent: "none",
        },
        ".animate-card-fadein-adjustment": {
          "animation-fill-mode": "forwards",
          "animation-iteration-count": "1",
        },
        ".close-btn-line": {
          filter: "drop-shadow(0px 0px 1px #ffffff) drop-shadow(0px 0px 1px #ffffff)",
        },
      };
      addUtilities(newUtilities);
    }
  ],
}