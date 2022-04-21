module.exports = {
    darkMode: "class",
    plugins: [require("@tailwindcss/typography")],
    content: [
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            typography: {
                DEFAULT: {
                    css: {
                        "code::before": false,
                        "code::after": false,
                    },
                },
            },
        },
    },
};
