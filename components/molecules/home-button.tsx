import Link from "../atoms/link";
import Rectangle from "../atoms/rectangle";

const HomeButton = () => {
    return (
        <Link href="/">
            <Rectangle className="select-none p-2 capitalize">home</Rectangle>
        </Link>
    );
};

export default HomeButton;
