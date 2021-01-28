import React from "react";
import { formatDateTime } from "../lib/datetime";
import NextLink from "./ui/next-link";

export type Props = {
    title: string;
    slug: string;
    date: string;
    readTime: string;
    excerpt: string;
};

const Post = ({ title, slug, date, readTime, excerpt }: Props) => (
    <div className="pb-4 mb-4">
        <NextLink href={`/posts/${slug}`}>
            <h2 className="text-lg md:text-2xl font-medium tracking-tight capitalize mb-2">
                {title}
            </h2>
        </NextLink>
        <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
            {`${formatDateTime(date)} / ${readTime}`}
        </p>
        <p className="text-gray-700 dark:text-gray-300">
            {excerpt}
        </p>
    </div>
);

export default Post;