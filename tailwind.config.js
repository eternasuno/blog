module.exports = {
    mode: "jit",
    darkMode: "class",
    plugins: [
        require("nightwind"),
        require("@tailwindcss/typography")
    ],
    purge: [
        "./components/**/*.tsx",
        "./pages/**/*.tsx"
    ],
    theme: {
        nightwind: {
            colorClasses: [
                "divide"
            ],
            transitionDuration: "500ms",
            typography: true
        },
    },
    variants: {}
};
