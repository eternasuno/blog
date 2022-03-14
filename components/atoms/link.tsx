import NextLink from "next/link";
import { AnchorHTMLAttributes, DetailedHTMLProps } from "react";

type Props = {
    href: string;
    children: React.ReactNode;
} & DetailedHTMLProps<
    AnchorHTMLAttributes<HTMLAnchorElement>,
    HTMLAnchorElement
>;

const Link = ({ href, children, ...rest }: Props) => {
    return (
        <NextLink href={href}>
            <a {...rest}>{children}</a>
        </NextLink>
    );
};

export default Link;
