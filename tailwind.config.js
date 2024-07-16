/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
    },
    extend: {
      colors: {
        navigation: "#A3A3A3",
        body: "#010402",
      },
    },
  },
  plugins: [],
};
