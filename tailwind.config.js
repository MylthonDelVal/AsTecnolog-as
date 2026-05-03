/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#003da2",
        "primary-container": "#0052d4",
        surface: "#f7f9fb",
        "on-surface": "#191c1e",
      }
    },
  },
  plugins: [],
}