import { InferGetStaticPropsType } from "next";
import Capitalize from "../../components/atoms/capitalize";
import CCIcons from "../../components/atoms/cc-icons";
import Title from "../../components/atoms/title";
import MDContent from "../../components/molecules/md-content";
import Pagination from "../../components/molecules/pagination";
import Time from "../../components/molecules/time";
import BlogTemplate from "../../components/templates/blog-template";
import BLOG from "../../lib/config";
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
            <Title title={post.title}>
                <span className="inline-flex items-center gap-4">
                    <span>
                        Written on <Time dateTime={post.date} />
                    </span>
                    <CCIcons
                        noDerivatives={BLOG.no_derivatives}
                        shareAlike={BLOG.share_alike}
                        nonCommercial={BLOG.non_commercial}
                        className="h-4 w-4"
                    />
                </span>
            </Title>
            <MDContent markdown={post.content} />
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
