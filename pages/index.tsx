import { InferGetStaticPropsType } from "next";
import Capitalize from "../components/atoms/capitalize";
import Link from "../components/atoms/link";
import Prose from "../components/atoms/prose";
import Tags from "../components/atoms/tags";
import Time from "../components/molecules/time";
import TitleLink from "../components/molecules/title-link";
import BlogTemplate from "../components/templates/blog-template";
import { getPosts } from "../lib/post";
import { generateRssFile } from "../lib/rss";

type Post = {
    slug: string;
    title: string;
    date: string;
    tags: string[];
    excerpt: string;
};

const Index = ({ posts }: InferGetStaticPropsType<typeof getStaticProps>) => {
    return (
        <BlogTemplate>
            <ol className="space-y-12">
                {posts.map(({ slug, title, date, tags, excerpt }, index) => (
                    <li className="space-y-2" key={index}>
                        <h2 className="text-2xl lg:text-4xl">
                            <TitleLink href={`/posts/${slug}`} title={title} />
                        </h2>
                        <div className="text-sm text-slate-700 dark:text-slate-400">
                            Written on <Time dateTime={date} />
                        </div>
                        <Prose>{excerpt}</Prose>
                        <Tags tags={tags} />
                    </li>
                ))}
            </ol>
        </BlogTemplate>
    );
};

export default Index;

export const getStaticProps = async () => {
    const posts = ((await getPosts()) as Post[])
        .sort((post1, post2) => (post1.date > post2.date ? -1 : 1))
        .slice(0, 10);

    if (process.env.NODE_ENV === "production") {
        await generateRssFile(posts);
    }

    return {
        props: { posts }
    };
};
