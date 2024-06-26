/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"], // Add this line
  theme: {
    extend: {
      colors: {
        primary: {
          start: "#3A8EF6",
          end: "#6F3AFA ",
        },
        secondary: "#00BFA5",
        para: "#000",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        sora: ["Sora", "sans-serif"],
      },
    },
  },
  plugins: [],
};
