import React from "react";
import Container from "../atoms/container";
import DarkModeButton from "../molecules/darkMode-button";
import HomeButton from "../molecules/home-button";
import RssButton from "../molecules/rss-button";

const StickyHeader = () => {
    return (
        <header className="backdrop-filter backdrop-blur-2xl sticky top-0 z-10">
            <Container>
                <nav className="py-4 flex justify-between items-center">
                    <HomeButton />
                    <div className="flex">
                        <DarkModeButton />
                        <RssButton />
                    </div>
                </nav>
            </Container>
        </header>
    );
};

export default StickyHeader;