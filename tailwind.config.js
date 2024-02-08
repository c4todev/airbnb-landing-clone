/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/react-tailwindcss-datepicker/dist/index.esm.js",
  ],
  theme: {
    extend: {
      boxShadow: {
        lg: "0px -2px 15px rgb(0 0 0 / 0.1)",
        xl: "0px 5px 15px rgb(0 0 0 / 0.1)",
      },
    },
    fontFamily: {
      sans: [
        "Circular",
        "-apple-system",
        "system-ui",
        "Roboto",
        "Helvetica Neue",
        "sans-serif",
      ],
    },
  },
  plugins: [],
};
