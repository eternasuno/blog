import React from 'react';
import { RiMoonFill, RiSunFill } from 'react-icons/ri';
import useDarkMode from "../../lib/hooks/useDarkMode";
import Rectangle from "../atoms/rectangle";

const DarkModeButton = () => {
    const { isDarkMode, switchDarkMode } = useDarkMode();

    return (
        <button className="focus:outline-none" aria-label="darkMode"
            onClick={switchDarkMode}>
            <Rectangle className="p-3 h-10 w-10 ">
                {
                    isDarkMode ?
                        <RiSunFill /> :
                        <RiMoonFill />

                }
            </Rectangle>
        </button>
    );
};

export default DarkModeButton;