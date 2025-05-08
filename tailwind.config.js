module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        discord: {
          dark: "#1e1f22",
          darker: "#111214",
          darkest: "#040405",
          light: "#2b2d31",
          lighter: "#313338",
          blue: "#5865f2",
          blueHover: "#4752c4",
          text: "#dbdee1",
          textMuted: "#949ba4"
        }
      }
    },
  },
  plugins: [],
}
