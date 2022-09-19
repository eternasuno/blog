import cn from "classnames";
import Link from "./link";

type Props = {
    className?: string;
    tags: string[];
};

const Tags = ({ className, tags }: Props) => {
    return (
        <div className={cn("flex flex-wrap gap-x-4", className)}>
            {tags &&
                tags.map((tag, index) => (
                    <Link
                        key={index}
                        className="hover:text-sky-600/75"
                        href={`/tags/${tag}`}
                    >
                        <span>#{tag}</span>
                    </Link>
                ))}
        </div>
    );
};

export default Tags;
