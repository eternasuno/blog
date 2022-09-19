import cn from "classnames";
import Link from "../atoms/link";

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
                "rounded border-[1px] border-solid p-2 lg:space-y-4 lg:p-4",
                className
            )}
            href={href}
        >
            <small className="text-xs lg:text-sm">{subTitle}</small>
            <p className="text-sm lg:text-base">{title}</p>
        </Link>
    );
};

export default Pagination;
