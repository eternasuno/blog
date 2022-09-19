import Link from "../atoms/link";
import Capitalize from "../atoms/capitalize";
import Rectangle from "../atoms/rectangle";
import DarkModeButton from "../molecules/darkMode-button";
import RssButton from "../molecules/rss-button";

export type Item = {
    href: string;
    title: string;
};

type Props = {
    items: Item[];
};

const Nav = ({ items }: Props) => {
    return (
        <nav className="flex flex-wrap justify-center lg:space-x-4">
            {items.map((item, index) => (
                <Link href={item.href} key={index}>
                    <Rectangle className="select-none p-2">
                        <Capitalize className="lg:text-xl">
                            {item.title}
                        </Capitalize>
                    </Rectangle>
                </Link>
            ))}
            <DarkModeButton />
            <RssButton />
        </nav>
    );
};

export default Nav;
