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
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
