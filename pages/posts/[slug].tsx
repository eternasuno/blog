import { InferGetStaticPropsType } from "next";
import MDXContent from "../../components/molecules/mdx-content";
import PageTitle from "../../components/molecules/page-title";
import Pagination from "../../components/molecules/pagination";
import Time from "../../components/molecules/time";
import BlogTemplate from "../../components/templates/blog-template";
import { getPostBySlug, getPostSlugs, getRelatedPost } from "../../lib/post";

type Post = {
    slug: string;
    title: string;
    date: string;
    excerpt: string;
    content: string;
};

type RelatedPost = {
    slug: string;
    title: string;
};

const Slug = ({
    lastPost,
    nextPost,
    post
}: InferGetStaticPropsType<typeof getStaticProps>) => {
    return (
        <BlogTemplate
            title={post.title}
            description={post.excerpt}
            canonical={`posts/${post.slug}`}
        >
            <div className="mb-8 text-center">
                <PageTitle>{post.title}</PageTitle>
                <p className="text-sm text-slate-700 dark:text-slate-400">
                    Written on <Time dateTime={post.date} />
                </p>
            </div>
            <MDXContent content={post.content} />
            <div className="mt-16 flex flex-col justify-between gap-4 lg:flex-row lg:gap-8">
                <Pagination
                    title={lastPost.title}
                    subTitle="Previous post"
                    href={`/posts/${lastPost.slug}`}
                    className="lg:w-[50%]"
                />
                <Pagination
                    title={nextPost.title}
                    subTitle="Next post"
                    href={`/posts/${nextPost.slug}`}
                    className="lg:w-[50%]"
                />
            </div>
        </BlogTemplate>
    );
};

export default Slug;

export const getStaticPaths = async () => {
    const slugs = await getPostSlugs();

    return {
        paths: slugs.map(slug => ({
            params: { slug }
        })),
        fallback: false
    };
};

export const getStaticProps = async ({ params }: any) => {
    const { slug } = params;
    const post = (await getPostBySlug(slug)) as Post;
    const { lastPost, nextPost } = (await getRelatedPost(slug)) as {
        lastPost: RelatedPost;
        nextPost: RelatedPost;
    };

    return {
        props: {
            post,
            lastPost,
            nextPost
        }
    };
};
