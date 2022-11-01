import cn from "classnames";
import Link from "next/link";
import Rectangle from "./rectangle";

type Props = {
    className?: string;
    tags: string[];
};

const Tags = ({ className, tags }: Props) => {
    return (
        <div className={cn("flex flex-wrap gap-x-4", className)}>
            {tags &&
                tags.map((tag, index) => (
                    <Link key={index} href={`/tags/${tag}`}>
                        <Rectangle className="select-none p-2">
                            #{tag}
                        </Rectangle>
                    </Link>
                ))}
        </div>
    );
};

export default Tags;
