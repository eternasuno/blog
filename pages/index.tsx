import { InferGetStaticPropsType } from "next";
import PostItem from "../components/organisms/post-item";
import BlogTemplate from "../components/templates/blog-template";
import BLOG from "../lib/config";
import { getPosts } from "../lib/post";
import { generateRssFile } from "../lib/rss";

type Post = {
    slug: string;
    title: string;
    date: string;
    tags: string[];
    excerpt: string;
};

const Index = ({ posts }: InferGetStaticPropsType<typeof getStaticProps>) => {
    return (
        <BlogTemplate>
            <ol className="space-y-8">
                {posts.map((post, index) => (
                    <li key={index}>
                        <PostItem {...post} />
                    </li>
                ))}
            </ol>
        </BlogTemplate>
    );
};

export default Index;

export const getStaticProps = async () => {
    const posts = ((await getPosts()) as Post[])
        .sort((post1, post2) => (post1.date > post2.date ? -1 : 1))
        .slice(0, 10);

    BLOG.is_dev || (await generateRssFile(posts));

    return {
        props: { posts }
    };
};
