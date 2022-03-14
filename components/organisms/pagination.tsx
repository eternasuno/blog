import cn from "classnames";
import { Post } from "../../lib/post";
import PostLink from "../molecules/post-link";
import TitleLink from "../molecules/title-link";

type Props = {
    lastPost: Post | null;
    nextPost: Post | null;
    className?: string;
};

const Pagination = ({ lastPost, nextPost, className }: Props) => {
    return (
        <div className={cn("text-sm font-medium leading-5", className)}>
            <div className="space-y-8 py-8">
                <PostLink heading="Next Article" post={nextPost} />
                <PostLink heading="Previous Article" post={lastPost} />
            </div>
            <div className="py-8">
                <TitleLink slug="/" title="← Back to the blog" />
            </div>
        </div>
    );
};

export default Pagination;
