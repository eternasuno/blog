import React from "react";
import Layout from "../../components/layout";
import { MDArticle } from "../../components/md-article";
import { formatDateTime } from "../../lib/datetime";
import { getPostBySlug, getPostSlugs } from "../../lib/post";
import { WEB_DOMAIN } from "../../lib/web.config";

type Props = {
    slug: string;
    title: string;
    date: string;
    readTime: string;
    content: any;
    excerpt: string;
};

const Post = ({ slug, title, date, readTime, content, excerpt }: Props) => (
    <Layout title={title} description={excerpt}
        canonical={`${WEB_DOMAIN}/posts/${slug}`}
        subtitle={`${formatDateTime(date)} / ${readTime}`} >
        <MDArticle content={content} />
    </Layout >
);

export default Post;

export const getStaticPaths = () => {
    const slugs = getPostSlugs();

    return {
        paths: slugs.map(slug => ({
            params: { slug }
        })),
        fallback: false
    };
};

export const getStaticProps = ({ params }: any) => {
    const post = getPostBySlug(params.slug, [
        "slug", "readTime", "content", "title", "date", "excerpt"
    ]);

    return {
        props: post
    };
};