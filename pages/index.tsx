import { InferGetStaticPropsType } from 'next';
import React from 'react';
import BLOG from "../blog.config";
import BlogTitle from '../components/organisms/blog-title';
import ListPosts from '../components/organisms/list-posts';
import Meta from '../components/organisms/meta';
import Nav from '../components/organisms/nav';
import StickyHeaderContent from '../components/templates/sticky-header-content';
import { getPosts } from '../lib/post';
import { generateRssFile } from '../lib/rss';

const Index = ({ posts }: InferGetStaticPropsType<typeof getStaticProps>) => (
    <>
        <Meta title={BLOG.title} description={BLOG.description} />
        <StickyHeaderContent header={<Nav />} content={
            <>
                <BlogTitle />
                <ListPosts posts={posts} />
            </>
        } />
    </>
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
        }
    };
};