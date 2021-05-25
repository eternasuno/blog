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
            transitionDuration: "500ms",
            typography: true
        },
    },
    variants: {}
};
