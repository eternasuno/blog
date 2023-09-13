/** @type {import('tailwindcss').Config} */

module.exports = {
    content: [
        './app/**/*.{js,ts,jsx,tsx,mdx}',
        './components/**/*.{js,ts,jsx,tsx}',
        './pages/**/*.{js,ts,jsx,tsx}',
    ],
    daisyui: {
        logs: false,
        theme: false,
    },
    darkMode: ['class', '[data-theme="dark"]'],
    plugins: [require('@tailwindcss/typography'), require('daisyui')],
    theme: {},
};
