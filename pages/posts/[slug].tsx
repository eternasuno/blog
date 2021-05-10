import { format, parseISO } from 'date-fns';
import { InferGetStaticPropsType } from "next";
import { useRouter } from 'next/router';
import React from "react";
import Artilce from '../../components/article';
import Layout from "../../components/layout";
import { getPostBySlug, getPostSlugs } from "../../lib/post";
import { WEB_DOMAIN } from "../../lib/web.config";

const Post = ({ slug, title, date, content, excerpt }: InferGetStaticPropsType<typeof getStaticProps>) => {
    const router = useRouter();
    if (router.isFallback) {
        return <div>Loading...</div>;
    }

    return (
        <Layout title={title} description={excerpt}
            canonical={`${WEB_DOMAIN}/posts/${slug}`}
            subtitle={format(parseISO(date), 'LLLL    d, yyyy')} >
            {content ? <Artilce content={content} /> : ""}
        </Layout >
    );
};

export default Post;

export const getStaticPaths = async () => {
    const slugs = await getPostSlugs();

    return {
        paths: slugs.map(slug => ({
            params: { slug }
        })),
        fallback: true
    };
};

export const getStaticProps = async ({ params }: any) => {
    const post = await getPostBySlug(params.slug);

    return {
        props: post,
        revalidate: 10
    };
};