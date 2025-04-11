/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        body: ["DM sans", "sans-serif"],
      },
      colors: {
        primary: "#001489",
      },
    },
  },
  plugins: [],
};
