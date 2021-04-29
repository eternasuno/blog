import { format, parseISO } from 'date-fns';
import Link from "next/link";
import React from "react";

export type Props = {
    title: string;
    slug: string;
    date: string;
    excerpt?: string;
};

const Post = ({ title, slug, date, excerpt }: Props) => (
    <div className="pb-4 mb-4">
        <Link href={`/posts/${slug}`}>
            <a>
                <h2 className="text-lg md:text-2xl font-medium tracking-tight capitalize mb-2">
                    {title}
                </h2>
            </a>
        </Link>
        <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
            {`Published at ${format(parseISO(date), 'LLLL    d, yyyy')}`}
        </p>
        <p className="text-gray-700 dark:text-gray-300">
            {excerpt}
        </p>
    </div>
);

export default Post;