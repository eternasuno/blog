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
                    transform: rotate(90deg);
                    transition-property: transform;
                    transition-duration: 0.5s;
                }
                
                .day .sun {
                    r: 5;
                    transition-property: r;
                    transition-duration: 0.5s;
                }

                .day .sun-shine {
                    opacity: 100;
                    transition-property: opacity;
                    transition-duration: 0.5s;
                }

                .day .moon {
                    cx: 100%;
                    cy: 0%;
                    transition-property: cx, cy;
                    transition-duration: 0.5s, 0.5s;
                }

                .night {
                    transform: rotate(40deg);
                    transition-property: transform;
                    transition-duration: 0.5s;
                }

                .night .sun {
                    r: 10;
                    transition-property: r;
                    transition-duration: 0.5s;
                }

                .night .sun-shine {
                    opacity: 0;
                    transition-property: opacity;
                    transition-duration: 0.5s;
                }

                .night .moon {
                    cx: 50%;
                    cy: 23%;
                    transition-property: cx, cy;
                    transition-duration: 0.5s, 0.5s;
                }
            `}</style>
        </button>
    );
};

export default DarkModeButton;