/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    extend: {
      keyframes: {
        'top-to-bottom': {
          '0%': { transform: 'translateY(-70%)' },
          '50%': { transform: 'translateY(0)' },
          '100%': { transform: 'translateY(-70%)' },
        },
        'bounce': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        'fade-in-out': {
          '0%, 100%': { opacity: 0 },
          '50%': { opacity: 1 },
        },
      },
      animation: {
        'top-to-bottom': 'top-to-bottom 4s ease-in-out infinite',
        'bounce': 'bounce 3s infinite',
        'fade-in-out': 'fade-in-out 4s ease-in-out infinite',
      },
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

