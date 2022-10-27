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
                        pre: {
                            "counter-reset": "step",
                            "counter-increment": "step 0",
                        },
                        "pre div::before": {
                            content: "counter(step)",
                            "counter-increment": "step",
                            "min-width": "2rem",
                            "text-align": "right",
                            opacity: 0.5,
                            "padding-right": "1rem",
                            display: "inline-block",
                        },
                        ".math-inline svg": {
                            display: "inline"
                        }
                    },
                },
            },
        },
    },
};
