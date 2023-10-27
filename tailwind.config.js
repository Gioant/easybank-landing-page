/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/js/*.js"
  ],
  theme: {
    extend: {
      fontfamily: {
        'public-sans': ["'Public Sans'", 'sans-serif'],
      },

      colors: {
        //Primary
        'Space-Cadet': '#2d314d',
        'Lime-Green': '#31d35c',
        'Aero': '#2bb7da',
        //Neutral
        'Cool-Gray': '##9698A6',
        'Flash-White': '##f3f4f6',
        'SeaSalt': '#fafafa',
        'White': '#ffffff',
      },

    },
  },
  plugins: [require('tailwind-hamburgers')],
}

