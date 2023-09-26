import { Config } from 'tailwindcss';

export const animations: Config['theme'] = {
  extend: {
    animation: {
      'soft-slide': 'soft-slide 0.3s ease-in-out',
      'rotate-180': 'rotate-180 0.3s ease-in-out',
      'rotate-0': 'rotate-0 0.3s ease-in-out',
      'slide-up-in': 'slide-up-in 1s ease-in-out',
      'slide-up-out': 'slide-up-out 1s ease-in-out',
    },
    keyframes: {
      'soft-slide': {
        '0%': { opacity: '0', marginLeft: '-20px' },
        '100%': { opacity: '1', marginLeft: '0px' },
      },
      'rotate-180': {
        '0%': { transform: 'rotate(0deg)' },
        '100%': { transform: 'rotate(-180deg)' },
      },
      'rotate-0': {
        '0%': { transform: 'rotate(-180deg)' },
        '100%': { transform: 'rotate(0deg)' },
      },
    },
  },
};
