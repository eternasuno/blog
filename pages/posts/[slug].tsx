import { InferGetStaticPropsType } from "next";
import PostContent from "../../components/organisms/post-content";
import PostTitle from "../../components/organisms/post-title";
import BlogTemplate from "../../components/templates/blog-template";
import { getPostBySlug, getPostSlugs } from "../../lib/post";

const Post = ({
    lastPost,
    nextPost,
    post,
    content
}: InferGetStaticPropsType<typeof getStaticProps>) => {
    return (
        <BlogTemplate
            title={post.title}
            description={post.excerpt}
            canonical={`posts/${post.slug}`}>
            <PostTitle title={post.title} dateTime={post.date} />
            <PostContent
                content={content}
                lastPost={lastPost}
                nextPost={nextPost}
            />
        </BlogTemplate>
    );
};

export default Post;

export const getStaticPaths = async () => {
    const slugs = await getPostSlugs();

    return {
        paths: slugs.map((slug) => ({
            params: { slug }
        })),
        fallback: false
    };
};

export const getStaticProps = async ({ params }: any) => {
    const props = await getPostBySlug(params.slug);

    return {
        props
    };
};
