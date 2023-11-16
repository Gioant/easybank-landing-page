/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/js/*.js"
  ],
  theme: {
    fontFamily: {
      sans: ['Public Sans'],
      serif: ['sans-serif']
    },
    colors: {
      //Primary
      'SpaceCadet': 'hsl(233, 26%, 24%)',
      'LimeGreen': 'hsl(136, 65%, 51%)',
      'Cyan': 'hsl(192, 70%, 51%)',
      //Neutral
      'CoolGray': 'hsl(233, 8%, 62%)',
      'FlashWhite': 'hsl(220, 16%, 96%)',
      'SeaSalt': 'hsl(0, 0%, 98%)',
      'White': 'hsl(0, 0%, 100%)',
    },

  },
  plugins: [require('tailwind-hamburgers')],
}

