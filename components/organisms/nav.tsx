import React from "react";
import DarkModeButton from "../molecules/darkMode-button";
import HomeButton from "../molecules/home-button";
import RssButton from "../molecules/rss-button";

const Nav = () => {
    return (
        <nav className="py-4 flex justify-between items-center">
            <HomeButton />
            <div className="flex">
                <DarkModeButton />
                <RssButton />
            </div>
        </nav>
    );
};

export default Nav;
