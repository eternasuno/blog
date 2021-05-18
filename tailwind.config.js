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
        extend: {
            typography: {
                DEFAULT: {
                    css: {
                        "blockquote p:first-of-type::before": false,
                        "blockquote p:last-of-type::after": false,
                        "code::before": false,
                        "code::after": false
                    }
                }
            }
        },
        nightwind: {
            typography: true
        },
    },
    variants: {}
};
