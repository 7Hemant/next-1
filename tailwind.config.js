/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    container: {
      center: true,
      padding: "1rem",
    },
    colors: {
      current: "currentColor",
      transparent: "transparent",
      dark: "#1D2144",
      white: "#FFFFFF",
      primary: "#4A6CF7",
      black: "#090E34",
      yellow: "#FBB040",
      "body-color": "#959CB1",
    },
  },

  plugins: [],
};
