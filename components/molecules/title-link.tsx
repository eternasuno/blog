import Link from "next/link";
import Capitalize from "../atoms/capitalize";

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
