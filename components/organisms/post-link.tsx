import React from "react";
import { Post } from "../../lib/post";
import TitleLink from "../molecules/title-link";

type Props = {
    heading: string;
    post: Post | null;
};

const PostLink = ({ heading, post }: Props) => {
    return post ? (
        <div>
            <h2 className="text-xs tracking-wide uppercase text-gray-500">
                {heading}
            </h2>
            <TitleLink href={`/posts/${post.slug}`} title={post.title} />
        </div>
    ) : (
        <></>
    );
};

export default PostLink;