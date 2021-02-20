import React from 'react';
import Layout from '../components/layout';
import Post, { Props as PostProps } from '../components/post';
import { getPosts } from '../lib/post';
import { generateRssFile } from '../lib/rss';
import { WEB_DESC, WEB_DOMAIN, WEB_TITLE } from '../lib/web.config';

type Props = {
    posts: PostProps[];
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

export const getStaticProps = () => {
    const posts = getPosts([
        "slug", "readTime", "title", "date", "excerpt"
    ]).sort((post1, post2) =>
        post1.date > post2.date ? -1 : 1
    ) as PostProps[];

    generateRssFile(posts);

    return {
        props: {
            posts
        }
    };
};
