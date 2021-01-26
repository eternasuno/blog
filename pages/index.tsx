import React from 'react';
import Layout from '../components/layout';
import Post from '../components/post';
import { getPosts } from '../lib/post';
import { generateRssFile } from '../lib/rss';
import { WEB_DESC, WEB_DOMAIN, WEB_TITLE } from '../lib/web.config';

type Post = {
    title: string;
    slug: string;
    date: string;
    readTime: string;
    excerpt: string;
};

type Props = {
    posts: Post[];
};

const Index = ({ posts }: Props) => (
    <Layout title={WEB_TITLE} canonical={WEB_DOMAIN}
        subtitle={WEB_DESC} description={WEB_DESC}>
        {
            posts.map((post) => (
                <Post key={post.slug} {...post} />
            ))
        }
    </Layout>
);

export default Index;

export const getStaticProps = async () => {
    const posts = (await getPosts([
        "slug", "readTime", "title", "date", "excerpt"
    ])).sort((post1, post2) =>
        post1.date > post2.date ? -1 : 1
    ) as Post[];

    generateRssFile(posts);

    return {
        props: {
            posts
        }
    };
};
