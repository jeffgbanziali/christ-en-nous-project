/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        'zoom': 'zoom 2s ease-in-out infinite',
      },
    },
    keyframes: {
      zoom: {
        '0%, 100%': { transform: 'scale(1)' },
        '50%': { transform: 'scale(1.2)' },
      },
    },

  },
  plugins: [],
}

