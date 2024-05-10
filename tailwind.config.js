/** @type {import('tailwindcss').Config} */
export default {
  theme: {
    extend: {
      colors: {
        blue: "#00337F",
        yellow: "#FFF3D9",
        lightBlue: "#A2C0F3",
      },
      fontFamily: {
        sans: ["Inter"],
        serif: ["Afterglow"],
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
