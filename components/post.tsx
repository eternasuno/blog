import React from "react";
import { formatDateTime } from "../lib/datetime";
import NextLink from "./ui/next-link";

type Props = {
    title: string;
    slug: string;
    date: string;
    readTime: string;
    excerpt: string;
};

const Post = ({ title, slug, date, readTime, excerpt }: Props) => (
    <div className="pb-4 mb-4">
        <NextLink href={`/posts/${slug}`}>
            <h4 className="font-medium mb-2 text-gray-900 dark:text-gray-100">
                {title}
            </h4>
        </NextLink>
        <p className="text-sm mb-4">
            {`${formatDateTime(date)} / ${readTime}`}
        </p>
        <p>
            {excerpt}
        </p>
    </div>
);

export default Post;