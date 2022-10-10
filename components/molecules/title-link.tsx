import cn from "classnames";
import Capitalize from "../atoms/capitalize";
import Link from "../atoms/link";

type Props = {
    href: string;
    title: string;
    className?: string;
};

const TitleLink = ({ href, title, className }: Props) => {
    return (
        <Capitalize>
            <Link href={href}>{title}</Link>
        </Capitalize>
    );
};

export default TitleLink;
