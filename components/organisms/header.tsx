import BLOG from "../../blog.config";
import Capitalize from "../atoms/capitalize";
import Container from "../atoms/container";
import SlopingLine from "../atoms/sloping-line";
import Nav, { Item as NavItem } from "./Nav";

type Props = {
    title: string;
    navItems: NavItem[];
    description?: string;
};

const Header = ({ title, navItems, description }: Props) => {
    return (
        <header className="space-y-8">
            <h1 className="mt-12 text-center text-4xl font-extrabold lg:text-6xl">
                <Capitalize>{title}</Capitalize>
            </h1>
            <Nav items={navItems} />
            {description && (
                <>
                    <SlopingLine />
                    <p className="before:mr-2 before:content-['★']">
                        <em className="italic">{BLOG.description}</em>
                    </p>
                </>
            )}
            <SlopingLine />
        </header>
    );
};

export default Header;
