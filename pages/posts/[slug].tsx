import { InferGetStaticPropsType } from "next";
import PostContent from "../../components/organisms/post-content";
import PostTitle from "../../components/organisms/post-title";
import BlogTemplate from "../../components/templates/blog-template";
import { getPostBySlug, getPostSlugs, getRelatedPost } from "../../lib/post";

const Post = ({
    lastPost,
    nextPost,
    post,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
    return (
        <BlogTemplate
            title={post.title}
            description={post.excerpt}
            canonical={`posts/${post.slug}`}>
            <PostTitle title={post.title} dateTime={post.date} />
            <PostContent
                content={post.content}
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
            params: { slug },
        })),
        fallback: false,
    };
};

export const getStaticProps = async ({ params }: any) => {
    const { slug } = params;
    const post = await getPostBySlug(slug, [
        "slug",
        "title",
        "date",
        "excerpt",
        "content",
    ]);
    const { lastPost, nextPost } = await getRelatedPost(slug);

    return {
        props: {
            post,
            lastPost,
            nextPost,
        },
    };
};
