import Capitalize from "../atoms/capitalize";
import Nav, { Item as NavItem } from "./Nav";

type Props = {
    title: string;
    navItems: NavItem[];
};

const Header = ({ title, navItems }: Props) => {
    return (
        <header className="mt-8 flex flex-col space-y-8 lg:flex-row lg:justify-between lg:space-y-0">
            <Capitalize className="text-center text-4xl font-extrabold">
                {title}
            </Capitalize>
            <Nav items={navItems} />
        </header>
    );
};

export default Header;
