module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  theme: {
    extend: {
      colors: {
        darkorange: "rgb(234 88 12)",
        lightorange: "rgb(249 115 22)",
        red: "#ff0000",
        darkneutral: "rgb(115 115 115)",
        lightneutral: "rgb(212 212 212)",
        black: "rgb(0 0 0)",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
