const path = require('path');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    path.join(process.cwd(), 'src', '**', '*.[j|t]s?(x)'),
    path.join(process.cwd(), 'index.html'),
  ],
  theme: {
    fontFamily: {
      sans: ['Outfit', `sans-serif`],
      serif: ['Merriweather', 'serif'],
    },
    extend: {},
  },
  plugins: [],
};
