import path from 'path';
import { type Config } from 'tailwindcss';
import { animations } from './animations';

const theme: Config = {
  content: [
    path.join(process.cwd(), 'src', '**', '*.[j|t]s?(x)'),
    path.join(process.cwd(), 'index.html'),
  ],
  theme: {
    ...animations,
    fontFamily: {
      sans: ['Outfit', `sans-serif`],
      serif: ['Merriweather', 'serif'],
    },
  },
};

export default theme;
