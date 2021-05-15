import React from "react";
import Link from "../atoms/link";

type Props = {
    title: string;
    href: string;
};

const TitleLink = ({ title, href }: Props) => {
    return (
        <Link href={href} className="tracking-tight capitalize">
            {title}
        </Link>
    );
};

export default TitleLink;