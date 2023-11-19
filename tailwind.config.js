/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#141718",
        secondary: "#6C7275",
        dark: "#0F172A",
      },
    },
  },
  plugins: [],
};
