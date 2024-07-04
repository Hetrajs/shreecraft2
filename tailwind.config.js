/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter"],
        mon: ["Montserrat"],
        roboto: ["Roboto Slab"],
        rubik: ["Rubik One"],
        rob: ["Roboto"],
      },
    },
  },
  plugins: [],
};
