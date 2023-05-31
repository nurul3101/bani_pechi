/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
    colors: {
      "main-color": "#214E4B",
      "green-middle": "#8BB59E",
      "light-green": "#D9EDC1",
      orange: "#FF6F31",
      "orange-dark": "#FF560E",
      beige: "#FFFEFE",
      grey: "#CAD1CF",
      "grey-light": "#F8F8F8",
      "white-1": "#ffffff",
    },
    backgroundColor: {
      "main-color": "#214E4B",
      "green-middle": "#8BB59E",
      "light-green": "#D9EDC1",
      orange: "#FF6F31",
      "orange-dark": "#FF560E",
      beige: "#FFFEFE",
      grey: "#CAD1CF",
      "grey-light": "#F8F8F8",
      "white-1": "#ffffff",
    },
  },
  plugins: [],
};
