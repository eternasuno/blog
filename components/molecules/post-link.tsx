import { Post } from "../../lib/post";
import TitleLink from "./title-link";

type Props = {
    heading: string;
    post: Post | null;
};

const PostLink = ({ heading, post }: Props) => {
    return post ? (
        <div>
            <p className="text-xs uppercase tracking-wide text-slate-500">
                {heading}
            </p>
            <TitleLink slug={`/posts/${post.slug}`} title={post.title} />
        </div>
    ) : (
        <></>
    );
};

export default PostLink;
