import cn from "classnames";
import React from "react";
import { Post } from "../../lib/post";
import Link from "../atoms/link";
import PostLink from "./post-link";

type Props = {
    lastPost: Post | null;
    nextPost: Post | null;
    className?: string;
};

const Pagination = ({ lastPost, nextPost, className }: Props) => {
    return (
        <div className={cn("text-sm font-medium leading-5 divide-y divide-gray-200 dark:divide-gray-700",
            className)}>
            <div className="space-y-8 py-8">
                <PostLink heading="Next Article" post={nextPost} />
                <PostLink heading="Previous Article" post={lastPost} />
            </div>
            <div className="py-8">
                <Link href="/">
                    ← Back to the blog
                </Link>
            </div>
        </div>
    );
};

export default Pagination;