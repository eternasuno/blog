import Container from "../atoms/container";
import DarkModeButton from "../molecules/darkMode-button";
import HomeButton from "../molecules/home-button";
import RssButton from "../molecules/rss-button";

const StickyHeader = () => {
    return (
        <header className="sticky top-0 z-10 bg-white/95 backdrop-blur dark:bg-slate-900/75">
            <Container>
                <nav className="flex items-center justify-between py-4">
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
