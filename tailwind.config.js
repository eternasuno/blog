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
            colors: {
                white: "#21252B"
            },
            colorClasses: [
                "divide"
            ],
            transitionDuration: false,
            typography: true
        },
    },
    variants: {}
};
