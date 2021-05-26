import React from "react";
import useDarkMode from "../../lib/hooks/useDarkMode";
import Rectangle from "../atoms/rectangle";

const DarkModeButton = () => {
    const { isDarkMode, switchDarkMode } = useDarkMode();

    return (
        <button className="focus:outline-none" aria-label="darkMode"
            onClick={switchDarkMode}>
            <Rectangle className="p-3 h-10 w-10 ">
                <svg className={isDarkMode ? "night" : "day"}
                    viewBox="0 0 24 24" fill="currentColor" stroke="currentColor">
                    <defs>
                        <mask id="mask">
                            <rect x="0" y="0" width="100%" height="100%" fill="white" />
                            <circle className="moon" r="9" strokeWidth="0" fill="black" />
                        </mask>
                    </defs>
                    <circle className="sun" cx="12" cy="12" r="5" mask="url(#mask)" />
                    <path className="sun-shine" strokeWidth="2" strokeLinecap="round" strokeDasharray="16"
                        d="M 12 3 L 12 1
                           M 18.36 5.64 L 19.78 4.22
                           M 21 12 L 23 12
                           M 18.36 18.36 L 19.78 19.78
                           M 12 21 L 12 23
                           M 5.64 18.36 L 4.22 19.78
                           M 3 12 L 1 12
                           M 5.64 5.64 L 4.22 4.22" />
                </svg>
            </Rectangle>
            <style jsx>{`
                .day {
                    animation: day 0.5s forwards;
                }

                @keyframes day {
                    from {
                        transform: rotate(40deg);
                    }

                    to {
                        transform: rotate(90deg);
                    }
                }

                .day .sun {
                    animation: day-sun 0.5s forwards;
                }

                @keyframes day-sun {
                    from {
                        r: 9;
                    }

                    to {
                        r: 5;
                    }
                }

                .day .sun-shine {
                    animation: day-sun-shine 0.5s forwards;
                }

                @keyframes day-sun-shine {
                    from {
                        opacity: 0;
                    }

                    to {
                        opacity: 100;
                    }
                }

                .day .moon {
                    animation: day-moon 0.5s forwards;
                }

                @keyframes day-moon {
                    from {
                        cx: 50%;
                        cy: 23%
                    }

                    to {
                        cx: 100%;
                        cy: 0%
                    }
                }

                .night {
                    animation: night 0.5s forwards;
                }

                @keyframes night {
                    from {
                        transform: rotate(90deg);
                    }

                    to {
                        transform: rotate(40deg);
                    }
                }

                .night .sun {
                    animation: night-sun 0.5s forwards;
                }

                @keyframes night-sun {
                    from {
                        r: 5;
                    }

                    to {
                        r: 9;
                    }
                }

                .night .sun-shine {
                    animation: night-sun-shine 0.5s forwards;
                }

                @keyframes night-sun-shine {
                    from {
                        opacity: 100;
                    }

                    to {
                        opacity: 0;
                    }
                }

                .night .moon {
                    animation: night-moon 0.5s forwards;
                }

                @keyframes night-moon {
                    from {
                        cx: 100%;
                        cy: 0%;
                    }

                    to {
                        cx: 50%;
                        cy: 23%
                    }
                }
            `}</style>
        </button>
    );
};

export default DarkModeButton;