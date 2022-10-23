import { useTheme } from "next-themes";
import { useState, useEffect } from "react";
import Rectangle from "../atoms/rectangle";

type Props = {
    className?: string;
};

const DarkModeButton = ({ className }: Props) => {
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    const { theme, systemTheme, setTheme } = useTheme();

    const isDarkMode =
        (isMounted && theme === "dark") ||
        (theme === "system" && systemTheme === "dark");

    const switchDarkMode = () => {
        if (isMounted) {
            setTheme(isDarkMode ? "light" : "dark");
        }
    };

    return (
        <button
            type="button"
            className="focus:outline-none"
            aria-label="darkMode"
            onClick={switchDarkMode}
        >
            <Rectangle className={className}>
                <svg
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    stroke="currentColor"
                >
                    <g
                        transform={
                            isDarkMode ? "rotate(40,12,12)" : "rotate(90,12,12)"
                        }
                        style={{
                            transitionProperty: "transform",
                            transitionDuration: "0.5s"
                        }}
                    >
                        <defs>
                            <mask id="mask">
                                <rect
                                    x="0"
                                    y="0"
                                    width="100%"
                                    height="100%"
                                    fill="white"
                                />
                                <circle
                                    strokeWidth="0"
                                    fill="black"
                                    r="9"
                                    cx={isDarkMode ? "50%" : "100%"}
                                    cy={isDarkMode ? "23%" : "0"}
                                    style={{
                                        transitionProperty: "cx,cy",
                                        transitionDuration: "0.5s"
                                    }}
                                />
                            </mask>
                        </defs>
                        <circle
                            cx="12"
                            cy="12"
                            r={isDarkMode ? "9" : "5"}
                            mask="url(#mask)"
                            style={{
                                transitionProperty: "r",
                                transitionDuration: "0.5s"
                            }}
                        />
                        <path
                            opacity={isDarkMode ? "0" : "100"}
                            strokeWidth="2"
                            strokeLinecap="round"
                            style={{
                                transitionProperty: "opacity",
                                transitionDuration: "0.5s"
                            }}
                            d="M 12 3 L 12 1
                               M 18.36 5.64 L 19.78 4.22
                               M 21 12 L 23 12
                               M 18.36 18.36 L 19.78 19.78
                               M 12 21 L 12 23
                               M 5.64 18.36 L 4.22 19.78
                               M 3 12 L 1 12
                               M 5.64 5.64 L 4.22 4.22"
                        />
                    </g>
                </svg>
            </Rectangle>
        </button>
    );
};

export default DarkModeButton;
