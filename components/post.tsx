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
    <div className="mb-6 md:mb-8">
        <p className="flex flex-col justify-between md:flex-row md:items-baseline">
            <Link href={`/posts/${slug}`}>
                <a>
                    <h2 className="mb-2 md:mr-8 text-lg md:text-2xl font-medium tracking-tight capitalize break-all">
                        {title}
                    </h2>
                </a>
            </Link>
            <time className="flex-shrink-0 text-gray-600 dark:text-gray-400">
                {format(parseISO(date), 'LLLL    d, yyyy')}
            </time>
        </p>
        <p className="hidden md:block leading-8 text-gray-700 dark:text-gray-300">
            {excerpt}
        </p>
    </div>
);

export default Post;