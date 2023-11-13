/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  purge: {
    enable: true,
    content: ["./src/**/*.jsx", "./src/**/*.js", "./src/**/*.html", "./public/*.html"],
  },
  theme: {
    extend: {
      colors: {
        'limon': '#FFFAD1',
        'color1': '#293264',
        'color2': "#4D5B9E",
        'color3': "#D6DBF5", 
        'gray_blue': '#F3BF99',
        'text_color': '#DEEBF8'
      }
    },
  },
  
  plugins: [],

}
