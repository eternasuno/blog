import { format, parseISO } from 'date-fns';
import { InferGetStaticPropsType } from "next";
import React from "react";
import Layout from "../../components/layout";
import MDContent from "../../components/md-content";
import { getPostBySlug, getPostSlugs } from "../../lib/post";
import { WEB_DOMAIN } from "../../lib/web.config";

const Post = ({ slug, title, date, readTime, content, excerpt }: InferGetStaticPropsType<typeof getStaticProps>) => (
    <Layout title={title} description={excerpt}
        canonical={`${WEB_DOMAIN}/posts/${slug}`}
        subtitle={`${format(parseISO(date), 'LLLL    d, yyyy')} / ${readTime}`} >
        <article className="prose dark:prose-dark max-w-none">
            <MDContent content={content} />
        </article>
    </Layout >
);

export default Post;

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
    const post = await getPostBySlug(params.slug);

    return {
        props: post
    };
};