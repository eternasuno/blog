/** @type {import('tailwindcss').Config} */

import themes from 'daisyui/src/theming/themes';
import defaultTheme from 'tailwindcss/defaultTheme';

module.exports = {
    content: [
        './app/**/*.{js,ts,jsx,tsx,mdx}',
        './components/**/*.{js,ts,jsx,tsx}',
        './pages/**/*.{js,ts,jsx,tsx}',
    ],
    daisyui: {
        logs: false,
        themes: [
            {
                light: {
                    ...themes['[data-theme=wireframe]'],
                    accent: '#1E50A2',
                    'base-100': '#FFFFFF',
                    'font-family': defaultTheme.fontFamily.sans.join(','),
                },
            },
            {
                dark: {
                    ...themes['[data-theme=black]'],
                    accent: '#BCE2E8',
                    'base-100': '#393F4C',
                    'font-family': defaultTheme.fontFamily.sans.join(','),
                },
            },
        ],
    },
    darkMode: ['class', '[data-theme="dark"]'],
    plugins: [require('@tailwindcss/typography'), require('daisyui')],
    theme: {},
};
