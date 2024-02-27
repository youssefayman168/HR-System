/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#365B98",
        grayColor: "#9295AB",
        orangeColor: "#FF793F",
        redColor: "#E03434",
        blueColor: "#0764E6",
        greenColor: "#34E045",
        blackGrayColor: "#101828",
        darkBlueColor: "#0E2354",
      },
      screens: {
        sm: "540px",
        md: "768px",
        tablet: "992px",
        lg: "1200px",
        xl: "1400px",
        xxl: "1600px",
        xxxl: "1800px",
      },
    },
  },
  plugins: [],
}