/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      fontSize: {
        12: "12px",
        14: "14px",
        16: "16px",
        18: "18px",
        24: "24px",
        28: "28px",
        32: "32px",
        42: "42px",
      },
      textColor: {
        main: "#DAB88A",
        white: "#FFFFFF",
      },
      padding: {
        1: "2px",
        2: "4px",
        3: "8px",
        4: "12px",
        5: "16px",
      },
      backgroundColor: {
        "main-bg": "#F5F5F5",
        "main-color": "#DAB88A",
        dark: "#000000",
      },
      borderWidth: {
        1: "1px",
        2: "2px",
      },
      borderColor: {
        main: "#DAB88A",
      },
      borderRadius: {
        2: "2px",
        5: "5px",
        8: "8px",
      },
      width: {
        400: "400px",
        640: "640px",
        760: "760px",
        780: "780",
        800: "800px",
        1000: "1000px",
        1200: "1200px",
        1400: "1400px",
        1800: "1800px"
      },
      height: {
        80: "80px",
      },
    },
    colors: {
      main: "#DAB88A",
    },
  },
  plugins: [],
};
