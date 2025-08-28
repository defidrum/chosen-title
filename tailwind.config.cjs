// tailwind.config.cjs
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{ts, tsx}"
  ],
  theme: {
    extend: {
      colors: {
        
      }
    }
  },
  plugins: [require('@tailwindcss/forms'), require('@tailwindcss/typography')]
}