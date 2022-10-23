import { InferGetStaticPropsType } from "next";
import PageTitle from "../../components/molecules/page-title";
import Time from "../../components/molecules/time";
import TitleLink from "../../components/molecules/title-link";
import BlogTemplate from "../../components/templates/blog-template";
import { getPosts } from "../../lib/post";

type Post = {
    slug: string;
    title: string;
    date: string;
};

const Index = ({ posts }: InferGetStaticPropsType<typeof getStaticProps>) => (
    <BlogTemplate title="All tags" description="All tags" canonical="/tags">
        <ol className="space-y-2 pl-8">
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

export default Index;

export const getStaticProps = async () => {
    const posts = ((await getPosts()) as Post[]).sort((post1, post2) =>
        post1.date > post2.date ? -1 : 1
    );

    return {
        props: { posts }
    };
};
