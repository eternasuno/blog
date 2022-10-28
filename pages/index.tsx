import { InferGetStaticPropsType } from "next";
import Capitalize from "../components/atoms/capitalize";
import Link from "../components/atoms/link";
import MDContent from "../components/molecules/md-content";
import Time from "../components/molecules/time";
import BlogTemplate from "../components/templates/blog-template";
import BLOG from "../lib/config";
import { getPosts } from "../lib/post";
import { generateRssFile } from "../lib/rss";

type Post = {
    slug: string;
    title: string;
    date: string;
    excerpt: string;
    content: string;
};

const Index = ({ posts }: InferGetStaticPropsType<typeof getStaticProps>) => {
    return (
        <BlogTemplate>
            <ol className="space-y-16">
                {posts.map(({ slug, title, date, excerpt }, index) => (
                    <li key={index}>
                        <article className="flex flex-col gap-2 lg:flex-row lg:gap-8">
                            <Time
                                className="min-w-[10rem] text-sm text-slate-700 dark:text-slate-400"
                                dateTime={date}
                            />
                            <div className="space-y-2">
                                <h2 className="text-lg font-bold">
                                    <Capitalize>
                                        <Link href={`/posts/${slug}`}>
                                            {title}
                                        </Link>
                                    </Capitalize>
                                </h2>
                                <MDContent markdown={excerpt} />
                            </div>
                        </article>
                    </li>
                ))}
            </ol>
        </BlogTemplate>
    );
};

export default Index;

export const getStaticProps = async () => {
    const posts = await getPosts<Post>();

    BLOG.is_dev || (await generateRssFile(posts));

    return {
        props: { posts: posts.slice(0, 10) }
    };
};
