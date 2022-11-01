import Link from "next/link";
import Capitalize from "../atoms/capitalize";
import Container from "../atoms/container";
import DarkModeButton from "../molecules/darkMode-button";
import RssLinkButton from "../molecules/rss-button";

type Route = {
    href: string;
    title: string;
};

type Props = {
    routes: Route[];
};

const Header = ({ routes }: Props) => {
    return (
        <header className="sticky top-0 z-50 shadow-lg backdrop-blur">
            <Container className="flex items-center justify-between">
                <nav className="flex cursor-pointer select-none font-bold lg:gap-4 lg:text-xl">
                    {routes.map(({ href, title }, index) => (
                        <Link href={href} key={index}>
                            <Capitalize>{title}</Capitalize>
                        </Link>
                    ))}
                </nav>
                <div className="flex lg:gap-4">
                    <DarkModeButton className="h-10 w-10 p-3 lg:h-11 lg:w-11" />
                    <RssLinkButton
                        href="/rss.xml"
                        className="h-10 w-10 p-3 lg:h-11 lg:w-11"
                    />
                </div>
            </Container>
        </header>
    );
};

export default Header;
