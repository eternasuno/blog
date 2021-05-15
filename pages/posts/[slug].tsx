import { InferGetStaticPropsType } from "next";
import React from "react";
import Article from "../../components/organisms/article";
import Meta from "../../components/organisms/meta";
import Nav from "../../components/organisms/nav";
import StickyHeaderContent from "../../components/templates/sticky-header-content";
import { getPostBySlug, getPostSlugs } from "../../lib/post";

const Post = ({ lastPost, nextPost, post, content }: InferGetStaticPropsType<typeof getStaticProps>) => {
    return (
        <>
            <Meta title={post.title} description={post.excerpt} canonical={`posts/${post.slug}`} />
            <StickyHeaderContent header={<Nav />} content={
                <Article lastPost={lastPost} nextPost={nextPost}
                    post={post} content={content} />
            } />
        </>
    );
};

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
    const props = await getPostBySlug(params.slug);

    return {
        props
    };
};