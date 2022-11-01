import cn from "classnames";
import Link from "next/link";
import Capitalize from "../atoms/capitalize";

type Props = {
    href: string;
    title: string;
    subTitle: string;
    className?: string;
};

const Pagination = ({ href, title, subTitle, className }: Props) => {
    return (
        <Link
            className={cn(
                "rounded border border-solid p-2 lg:space-y-4 lg:p-4",
                className
            )}
            href={href}
        >
            <small className="text-xs lg:text-sm">{subTitle}</small>
            <p className="text-sm lg:text-base">
                <Capitalize>{title}</Capitalize>
            </p>
        </Link>
    );
};

export default Pagination;
