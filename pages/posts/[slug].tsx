import { InferGetStaticPropsType } from "next";
import React from "react";
import NotionContent from "../../components/molecules/notion-content";
import Meta from "../../components/organisms/meta";
import Nav from "../../components/organisms/nav";
import Pagination from "../../components/organisms/pagination";
import PostTitle from "../../components/organisms/post-title";
import PostTemplate from "../../components/templates/post-template";
import { getPostBySlug, getPostSlugs } from "../../lib/post";

const Post = ({ lastPost, nextPost, post, content }: InferGetStaticPropsType<typeof getStaticProps>) => {
    return (
        <>
            <Meta title={post.title} description={post.excerpt} canonical={`posts/${post.slug}`} />
            <PostTemplate nav={<Nav />}
                header={<PostTitle title={post.title} date={post.date} />}
                content={<NotionContent content={content} />}
                pagination={<Pagination lastPost={lastPost} nextPost={nextPost} />}
            />
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