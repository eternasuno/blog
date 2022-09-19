import { promises as fs } from "fs";
import { bundleMDX } from "mdx-bundler";
import { join } from "path";
import rehypeKatex from "rehype-katex";
import remarkGfm from "remark-gfm";
import remarkMath from "remark-math";
import remarkMdxImages from "remark-mdx-images";

type Items = {
    ["slug"]?: string;
    ["title"]?: string;
    ["date"]?: string;
    ["tags"]?: string[];
    ["excerpt"]?: string;
    ["content"]?: string;
};

const IS_DEV = process.env.NODE_ENV === "development";
const ROOT_PATH = process.cwd();
const POST_PATH = join(ROOT_PATH, "data/posts");

export const getPostSlugs = async () => {
    const postFiles = await fs.readdir(POST_PATH);
    return postFiles
        .filter(post => IS_DEV || post.lastIndexOf(".draft.mdx") < 0)
        .map(post => post.replace(/\.mdx$/, ""));
};

export const getPostBySlug = async (slug: string) => {
    const postPath = join(POST_PATH, `${slug}.mdx`);
    const { code, frontmatter } = await bundleMDX({
        file: postPath,
        mdxOptions: options => {
            options.remarkPlugins = [
                ...(options.remarkPlugins ?? []),
                remarkGfm,
                remarkMath,
                remarkMdxImages
            ];
            options.rehypePlugins = [
                ...(options.rehypePlugins ?? []),
                rehypeKatex
            ];
            return options;
        },
        esbuildOptions: options => {
            options.loader = {
                ...options.loader,
                ".png": "file",
                ".jpg": "file",
                ".jpeg": "file"
            };

            options.outdir = join(ROOT_PATH, "public/assets");
            options.publicPath = "/assets";
            options.write = true;

            return options;
        }
    });

    return {
        ...frontmatter,
        slug,
        content: code,
        tags: frontmatter["tags"] || null
    } as Items;
};

export const getPosts = async () => {
    const slugs = await getPostSlugs();
    return await Promise.all(slugs.map(slug => getPostBySlug(slug)));
};

export const getPostTags = async () => {
    const posts = await getPosts();
    const postTagSet = posts.reduce((previousValue, currentValue) => {
        const tags = currentValue.tags;
        tags && tags.forEach(tag => previousValue.add(tag));
        return previousValue;
    }, new Set<string>());
    return Array.from(postTagSet);
};

export const getPostsByTag = async (tag: string) => {
    const posts = (await getPosts()).sort((post1, post2) =>
        post1.date && post2.date && post1.date > post2.date ? -1 : 1
    );
    return posts.filter(post => {
        const tags = post.tags;
        return tags && tags.includes(tag);
    });
};

export const getRelatedPost = async (slug: string) => {
    const posts = (await getPosts()).sort((post1, post2) =>
        post1.date && post2.date && post1.date > post2.date ? -1 : 1
    );
    const index = posts.findIndex(post => post.slug === slug);
    return {
        lastPost: index > 0 ? posts[index - 1] : posts[posts.length - 1],
        nextPost: index < posts.length - 1 ? posts[index + 1] : posts[0]
    };
};
