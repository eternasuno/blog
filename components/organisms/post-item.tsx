import Link from "../atoms/link";
import Prose from "../atoms/prose";
import Time from "../molecules/time";
import TitleLink from "../molecules/title-link";

export type Post = {
    slug: string;
    title: string;
    date: string;
    tags: string[];
    excerpt: string;
};

type Props = {
    posts: Post[];
};

const PostItem = ({ posts }: Props) => {
    return (
        <ol>
            {posts.map(({ slug, title, date, tags, excerpt }, index) => (
                <li key={index}>
                    <h2 className="underline">
                        <Link href={`/posts/${slug}`}>{title}</Link>
                    </h2>
                    <Time dateTime={date} />
                    <div>
                        <Prose>{excerpt}</Prose>
                    </div>
                    {tags &&
                        tags.map((tag, index) => (
                            <span key={index}>{tag}</span>
                        ))}
                </li>
            ))}
        </ol>
    );
};

export default PostItem;
