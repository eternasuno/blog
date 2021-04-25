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
                        code: {
                            color: theme("colors.gray.700"),
                        },
                        "code::before": false,
                        "code::after": false,
                        img: {
                            "margin-bottom": "0.5em"
                        },
                        "li[class='task-list-item']": {
                            "&:before": {
                                display: "none"
                            },
                            "input[type='checkbox']": {
                                "margin-right": "0.7em"
                            },
                            "padding-left": 0
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
                        code: {
                            color: theme("colors.gray.300")
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
