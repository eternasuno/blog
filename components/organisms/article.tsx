import React from "react";
import { Content, Post } from "../../lib/post";
import NotionContent from "../molecules/notion-content";
import Pagination from "./pagination";
import PostTitle from "./post-title";

type Props = {
    lastPost: Post | null;
    nextPost: Post | null;
    post: Post;
    content: Content;
};

const Article = ({ lastPost, nextPost, post, content }: Props) => {
    return (
        <article className="divide-y divide-gray-200 dark:divide-gray-700">
            <PostTitle title={post.title} date={post.date} />
            <div className="flex flex-col xl:flex-row divide-y xl:divide-y-0 divide-gray-200 dark:divide-gray-700">
                <NotionContent content={content} />
                <Pagination lastPost={lastPost} nextPost={nextPost}
                    className="xl:min-w-[20%] xl:order-first xl:mr-6" />
            </div>
        </article>
    );
};

export default Article;