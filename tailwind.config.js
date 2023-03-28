const { blackA, green, mauve, slate, violet } = require("@radix-ui/colors");
/** @type {import('tailwindcss').Config} */
const plugin = require("tailwindcss/plugin");

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  future: {
    hoverOnlyWhenSupported: true,
  },
  theme: {
    extend: {
      colors: {
        ...blackA,
        ...green,
        ...mauve,
        ...slate,
        ...violet,
      },
      fontFamily: {
        display: ["var(--font-sf)", "system-ui", "sans-serif"],
        default: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      animation: {
        // Tooltip
        "slide-up-fade": "slide-up-fade 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
        "slide-down-fade": "slide-down-fade 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
        hide: "hide 100ms ease-in",
        slideIn: "slideIn 150ms cubic-bezier(0.16, 1, 0.3, 1)",
        swipeOut: "swipeOut 100ms ease-out",
        swing: "swing 4s ease-in-out",
      },
    },
    keyframes: {
      // Tooltip
      "slide-up-fade": {
        "0%": { opacity: 0, transform: "translateY(6px)" },
        "100%": { opacity: 1, transform: "translateY(0)" },
      },
      "slide-down-fade": {
        "0%": { opacity: 0, transform: "translateY(-6px)" },
        "100%": { opacity: 1, transform: "translateY(0)" },
      },
      hide: {
        from: { opacity: 1 },
        to: { opacity: 0 },
      },
      slideIn: {
        from: { transform: "translateX(calc(100% + var(--viewport-padding)))" },
        to: { transform: "translateX(0))" },
      },
      swing: {
        "0%,100%": { transform: "rotate(15deg)" },
        "50%": { transform: "rotate(-15deg)" },
      },
      swipeOut: {
        from: { transform: "translateX(var(--radix-toast-swipe-end-x))" },
        to: { transform: "translateX(calc(100% + var(--viewport-padding)))" },
      },
    },
  },
  plugins: [
    require("@tailwindcss/forms"),
    require("@tailwindcss/typography"),
    require("@tailwindcss/line-clamp"),
    plugin(({ addVariant }) => {
      addVariant("radix-side-top", '&[data-side="top"]');
      addVariant("radix-side-bottom", '&[data-side="bottom"]');
    }),
  ],
};
