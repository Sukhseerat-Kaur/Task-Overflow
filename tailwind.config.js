module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        Rajdhani: ["Rajdhani", "sans-serif"],
      },
      colors: {
        orange: "#dd614a",
        orangeDark: "#c03d25",
      },
      outline: {
        blue: ["2px solid #49B2fd", "1px"],
      },
    },
  },
  variants: {},
  plugins: [],
};
