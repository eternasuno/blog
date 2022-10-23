import { InferGetStaticPropsType } from "next";
import Capitalize from "../../components/atoms/capitalize";
import Link from "../../components/atoms/link";
import PageTitle from "../../components/molecules/page-title";
import Time from "../../components/molecules/time";
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
            <ol className="pl-8">
                {posts.map(({ slug, title, date }, index) => (
                    <li className="list-disc" key={index}>
                        <Capitalize>
                            <Link href={`/posts/${slug}`}>{title}</Link>
                        </Capitalize>
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
