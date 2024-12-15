/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    extend: {
      colors: {
        'primary': "#212121",
        'secondary': "#383838",
        'wild-sand': "#F6F6F6",
        'black': "#161616",
        'snow': "#F6F4FA",
        'background': "#F1F2F5",
        'custom-purple': "#755FFF",
        'silver': "#c1c1c1"
      },
    },
  },
  plugins: [],
}

