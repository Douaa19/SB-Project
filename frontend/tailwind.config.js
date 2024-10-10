/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    screens: {
      ssm: "320px",
      sm: "640px",
      md: "768px",
      lg: "950px",
      xl: "1024px",
      "2xl": "1280px",
      "3xl": "1536px",
    },
    extend: {
      backgroundImage: {},
      fontWeight: {
        normale: "400",
        medium: "500",
        bold: "600",
        extrabold: "700",
      },
      fontSize: {
        8: "8px",
        10: "10px",
        12: "12px",
        14: "14px",
        16: "16px",
        18: "18px",
        24: "24px",
        28: "28px",
        32: "32px",
        36: "36px",
        42: "42px",
        48: "48px",
      },
      textColor: {
        main: "#192655",
        secondary: "#DAB88A",
        light: "#F5F5F5",
        white: "#FFFFFF",
        dark: "#000000",
        gray: "#CCCCCC",
        "gray-100": "#CECECE",
        red: "#FF004D",
        "dark-gray": "#333333",
        blue: "#192655",
      },
      padding: {
        1: "2px",
        2: "4px",
        3: "8px",
        4: "12px",
        5: "16px",
      },
      backgroundColor: {
        "main-bg": "#192655",
        secondary: "#DAB88A",
        blue: "#192655",
        "main-color": "#192655",
        dark: "#000000",
        white: "#FFFFFF",
        gray: "#F0F0F0",
        red: "#FF004D",
        "slate-50": "rgb(248 250 252)",
        "slate-100": "rgb(241 245 249)",
        "slate-200": "rgb(226 232 240)",
        "slate-300": "rgb(203 213 225)",
        "slate-400": "rgb(148 163 184)",
        "slate-500": "rgb(100 116 139)",
        "slate-600": "rgb(71 85 105)",
        "slate-700": "rgb(30 41 59)",
        "gray-300": "rgb(209 213 219)",
        "gray-100": "rgb(206 206 206)",
      },
      borderWidth: {
        1: "1px",
        2: "2px",
      },
      borderColor: {
        main: "#192655",
        white: "#FFFFFF",
        dark: "#000000",
        red: "#FF004D",
        "gray-100": "rgb(206 206 206)",
        secondary: "#DAB88A",
      },
      borderRadius: {
        2: "2px",
        5: "5px",
        8: "8px",
      },
      width: {
        300: "300px",
        336: "336px",
        400: "400px",
        500: "500px",
        640: "640px",
        760: "760px",
        780: "780",
        800: "800px",
        1000: "1000px",
        1200: "1200px",
        1400: "1400px",
        1800: "1800px",
      },
      height: {
        80: "80px",
      },
    },
    colors: {
      main: "#192655",
    },
  },
  plugins: [],
};
