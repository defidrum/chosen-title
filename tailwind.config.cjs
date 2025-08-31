// tailwind.config.cjs
module.exports = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        brix: {
          50:  "#EEF6FC",
          100: "#D8EAF7",
          200: "#B7D8F0",
          300: "#95C6E8",
          400: "#74B3DE",
          500: "#4B9CD3",
          600: "#2C82BA", 
          700: "#206A9A",
          800: "#1A557B",
          900: "#153F5B"
        }
      },
      boxShadow: {
        brix: "0 10px 20px rgba(75,156,211,0.25)"
      },
      ringColor: {
        brix: "#4B9CD3"
      }
    }
  },
  plugins: [require("@tailwindcss/forms"), require("@tailwindcss/typography")]
}
