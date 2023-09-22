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
    extend: {
      animation: {
        slide: 'slide 0.3s ease-in-out',
        'rotate-180': 'rotate-180 0.3s ease-in-out',
        'rotate-0': 'rotate-0 0.3s ease-in-out',
      },
      keyframes: {
        slide: {
          '0%': { opacity: 0, marginLeft: '-20px' },
          '100%': { opacity: 1, marginLeft: '0px' },
        },
        'rotate-180': {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(-180deg)' },
        },
        'rotate-0': {
          '0%': { transform: 'rotate(-180deg)' },
          '100%': { transform: 'rotate(0deg)' },
        }
      },
    },
  },
  plugins: [],
};
