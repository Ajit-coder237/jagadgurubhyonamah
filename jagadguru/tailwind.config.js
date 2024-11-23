/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        laila: ["Laila", "sans-serif"], // Add 'laila' to the fontFamily
        amita: ["Amita", "sans-serif"],
        gotu: ["Gotu", "sans-serif"],
      },
    },
  },
  plugins: [],
};
