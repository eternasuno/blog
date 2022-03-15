import { Post } from "../../lib/post";
import Content from "../atoms/content";
import Prose from "../atoms/prose";
import Time from "../molecules/time";
import TitleLink from "../molecules/title-link";

type Props = {
    posts: Post[];
};

const PostList = ({ posts }: Props) => {
    return (
        <Content>
            <ol className="space-y-4 md:space-y-16">
                {posts.map(({ slug, date, title, excerpt }) => (
                    <li key={slug} className="flex flex-col md:flex-row">
                        <Time className="md:min-w-[25%]" dateTime={date} />
                        <div className="space-y-2 md:space-y-6">
                            <h2 className="text-lg font-semibold md:text-2xl">
                                <TitleLink
                                    slug={`/posts/${slug}`}
                                    title={title}
                                />
                            </h2>
                            <Prose>{excerpt}</Prose>
                        </div>
                    </li>
                ))}
            </ol>
        </Content>
    );
};

export default PostList;
