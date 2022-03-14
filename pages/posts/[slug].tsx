import { InferGetStaticPropsType } from "next";
import NotionContent from "../../components/molecules/notion-content";
import Pagination from "../../components/organisms/pagination";
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
            dateTime={post.date}
            canonical={`posts/${post.slug}`}>
            <div className="flex flex-col xl:flex-row">
                <NotionContent content={content} />
                <Pagination
                    lastPost={lastPost}
                    nextPost={nextPost}
                    className="xl:order-first xl:mr-4 xl:max-w-[16rem] xl:flex-[0_0_20%]"
                />
            </div>
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
