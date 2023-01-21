/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#484848",
        foreground: "#FFF9EC",
        grey: "#7D7D7D"
      },
      boxShadow: {
        'custom': '0px 6px 10px 2px rgba(16, 16, 17, 0.1)',
      }
    },
  },
  plugins: [],
}
