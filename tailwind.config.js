module.exports = {
    mode: 'jit',
    darkMode: 'class',
    plugins: [
        require('@tailwindcss/typography')
    ],
    purge: [
        './components/**/*.tsx',
        './pages/**/*.tsx'
    ],
    theme: {
        extend: {
            colors: {
                dark: "#282c34"
            },
            typography: (theme) => ({
                DEFAULT: {
                    css: {
                        a: {
                            color: theme("colors.gray.700"),
                        },
                        'blockquote p:first-of-type::before': false,
                        'blockquote p:last-of-type::after': false,
                        color: theme("colors.gray.700"),
                        pre: {
                            color: theme("colors.gray.700"),
                            backgroundColor: "#FAF8F5",
                        },
                        "code::before": false,
                        "code::after": false,
                        figure: {
                            "margin-top": 0,
                            "margin-bottom": 0
                        },
                        ul: {
                            "margin-top": 0,
                            "margin-bottom": 0
                        },
                        ol: {
                            "margin-top": 0,
                            "margin-bottom": 0
                        }
                    },
                },
                dark: {
                    css: {
                        a: {
                            color: theme("colors.gray.300"),
                        },
                        blockquote: {
                            borderLeftColor: theme('colors.gray.700'),
                            color: theme('colors.gray.300')
                        },
                        color: theme("colors.gray.300"),
                        pre: {
                            color: theme("colors.gray.300"),
                            backgroundColor: "#1D262F",
                        },
                        h1: {
                            color: theme("colors.gray.100")
                        },
                        h2: {
                            color: theme("colors.gray.100")
                        },
                        h3: {
                            color: theme("colors.gray.100")
                        },
                        h4: {
                            color: theme("colors.gray.100")
                        },
                        h5: {
                            color: theme("colors.gray.100")
                        },
                        h6: {
                            color: theme("colors.gray.100")
                        },
                        hr: {
                            borderColor: theme('colors.gray.700')
                        },
                        "li::before": {
                            color: theme('colors.gray.300')
                        },
                        strong: {
                            color: theme("colors.gray.100")
                        },
                        thead: {
                            color: theme('colors.gray.100')
                        },
                        "tbody tr": {
                            borderBottomColor: theme('colors.gray.700')
                        }
                    }
                },
            }),
        }
    },
    variants: {
        typography: ['dark']
    }
};
