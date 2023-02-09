/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "main-blue": "#293B96",
        "gray-back": "#f9f9f9",
        "button-green": "#44CF95",
        "gray-border": "#E9E9E9",
        "dark-gray-text": "#666666",
        "orange-btn-text": "#F1992E",
        "green-btn-bg": "#F2FFF9",
        "orange-btn-bg": "#FFE4C2",
        "table-text": "#8F8F8F",
        "up-arrow-bg": "#FFF1F1",
        "down-arrow-bg": "#E3FFF3",
      },
    },
  },
  plugins: [],
};
