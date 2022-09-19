import { InferGetStaticPropsType } from "next";
import PageTitle from "../../components/molecules/page-title";
import Time from "../../components/molecules/time";
import TitleLink from "../../components/molecules/title-link";
import BlogTemplate from "../../components/templates/blog-template";
import { getPostsByTag, getPostTags } from "../../lib/post";

type Post = {
    slug: string;
    title: string;
    date: string;
};

const Tag = ({
    tag,
    posts
}: InferGetStaticPropsType<typeof getStaticProps>) => {
    return (
        <BlogTemplate
            title={`Tagged "${tag}"`}
            description={`Tagged "${tag}"`}
            canonical={`tags/${tag}`}
        >
            <PageTitle>{`Tagged "${tag}"`}</PageTitle>
            <ol className="pl-8">
                {posts.map(({ slug, title, date }, index) => (
                    <li className="list-disc" key={index}>
                        <TitleLink href={`/posts/${slug}`} title={title} />
                        <Time
                            dateTime={date}
                            format="dd LLL yyyy"
                            className="ml-2 text-slate-700 dark:text-slate-400"
                        />
                    </li>
                ))}
            </ol>
        </BlogTemplate>
    );
};

export default Tag;

export const getStaticPaths = async () => {
    const tags = await getPostTags();

    return {
        paths: tags.map(tag => ({
            params: { tag }
        })),
        fallback: false
    };
};

export const getStaticProps = async ({ params }: any) => {
    const { tag } = params;
    const posts = (await getPostsByTag(tag)) as Post[];

    return {
        props: {
            tag,
            posts
        }
    };
};
