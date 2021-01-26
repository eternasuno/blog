import Link from "next/link";
import React from 'react';

type Props = {
    href: string;
    children?: React.ReactNode;
} & React.AnchorHTMLAttributes<HTMLAnchorElement>;

const NextLink = ({ href, children, ...attributes }: Props) => (
    <Link href={href}>
        <a {...attributes}>
            {children}
        </a>
    </Link>
);

export default NextLink;