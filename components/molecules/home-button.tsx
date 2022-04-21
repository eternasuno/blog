import Capitalize from "../atoms/capitalize";
import Link from "../atoms/link";
import Rectangle from "../atoms/rectangle";

const HomeButton = () => {
    return (
        <Link href="/">
            <Rectangle className="select-none p-2">
                <Capitalize>home</Capitalize>
            </Rectangle>
        </Link>
    );
};

export default HomeButton;
