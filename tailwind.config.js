/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        grey: "#eeeeee",
        foreground: "gold",
      },
      boxShadow: {
        'custom': '0px 6px 10px 2px rgba(16, 16, 17, 0.1)',
      }
    },
  },
  plugins: [],
}
