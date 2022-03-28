import { InferGetStaticPropsType } from "next";
import BLOG from "../blog.config";
import BlogTitle from "../components/organisms/blog-title";
import PostList from "../components/organisms/post-list";
import BlogTemplate from "../components/templates/blog-template";
import { getPosts } from "../lib/post";
import { generateRssFile } from "../lib/rss";

const Index = ({ posts }: InferGetStaticPropsType<typeof getStaticProps>) => {
    return (
        <BlogTemplate
            title={BLOG.title}
            description={BLOG.description}
            canonical="">
            <BlogTitle title={BLOG.title} description={BLOG.description} />
            <PostList posts={posts} />
        </BlogTemplate>
    );
};

export default Index;

export const getStaticProps = async () => {
    const posts = await getPosts();

    await generateRssFile(posts);

    return {
        props: {
            posts,
        },
    };
};
