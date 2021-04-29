import { InferGetStaticPropsType } from 'next';
import React from 'react';
import Layout from '../components/layout';
import Post from '../components/post';
import { getPosts } from '../lib/post';
import { generateRssFile } from '../lib/rss';
import { WEB_DESC, WEB_DOMAIN, WEB_TITLE } from '../lib/web.config';

const Index = ({ posts }: InferGetStaticPropsType<typeof getStaticProps>) => (
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
    const posts = (await getPosts()).sort((post1, post2) =>
        post1.date > post2.date ? -1 : 1
    );

    await generateRssFile(posts);

    return {
        props: {
            posts
        },
        revalidate: 10
    };
};
