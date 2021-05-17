import React from "react";
import { Post } from "../../lib/post";
import Time from "../atoms/time";
import TitleLink from "../molecules/title-link";

type Props = {
    posts: Post[];
};

const ListPosts = ({ posts }: Props) => {
    return (
        <ol className="divide-y dark:divide-gray-700">
            {posts.map(({ slug, date, title, excerpt }) => (
                <li key={slug}
                    className="py-6 md:py-12 flex flex-col md:flex-row md:items-baseline">
                    <div className="md:min-w-[25%]">
                        <Time dateTime={date} />
                    </div>
                    <div className="space-y-2 md:space-y-6">
                        <h2 className="text-lg md:text-2xl font-semibold">
                            <TitleLink href={`/posts/${slug}`} title={title} />
                        </h2>
                        <div className="prose dark:prose-dark max-w-none">
                            {excerpt}
                        </div>
                    </div>
                </li>
            ))}
        </ol>
    );
};

export default ListPosts;