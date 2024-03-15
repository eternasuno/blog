import { getIconCollections, iconsPlugin } from '@egoist/tailwindcss-icons';
import typography from '@tailwindcss/typography';
import daisyui from 'daisyui';
import { cmyk, dracula } from 'daisyui/src/theming/themes';

/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: ['class', '[data-theme="dark"]'],
  /** @type {import('daisyui').Config} */
  daisyui: {
    logs: false,
    themes: [
      { light: { ...cmyk, neutral: '#94a3b8' } },
      { dark: { ...dracula, neutral: '#64748b' } },
    ],
  },
  plugins: [
    iconsPlugin([
      iconsPlugin({
        collections: getIconCollections(['heroicons']),
      }),
    ]),
    typography,
    daisyui,
  ],
  theme: {
    extend: {
      animation: {
        type: 'grow 1s steps(20, end) forwards, blink 1s steps(1) 1s infinite',
      },
      keyframes: {
        blink: {
          '50%': { 'border-color': 'transparent' },
        },
        grow: {
          '0%': { width: '0' },
          '100%': { width: '100%' },
        },
      },
    },
  },
};

export default config;
