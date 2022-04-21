import { promises as fs } from "fs";
import { bundleMDX } from "mdx-bundler";
import { join } from "path";
import rehypeKatex from "rehype-katex";
import remarkGfm from "remark-gfm";
import remarkMath from "remark-math";
import { remarkMdxImages } from "remark-mdx-images";

const rootPath = process.cwd();
const postsPath = join(rootPath, "data/posts");

type Field = "slug" | "title" | "date" | "excerpt" | "content";

type Items = {
    [key in Field]?: string;
};

export type Post = {
    slug: string;
    title: string;
    date: string;
    excerpt: string;
    content: string;
};

export const getPostSlugs = async () => {
    const postFiles = await fs.readdir(postsPath);
    return postFiles.map((post) => post.replace(/\.mdx$/, ""));
};

export const getPostBySlug = async (slug: string, fields: Field[]) => {
    const postPath = join(postsPath, `${slug}.mdx`);
    const { code, frontmatter } = await bundleMDX({
        file: postPath,
        bundleDirectory: join(rootPath, "public/assets"),
        bundlePath: "/assets",
        mdxOptions: (options) => {
            options.remarkPlugins = [
                ...(options.remarkPlugins ?? []),
                remarkGfm,
                remarkMath,
                remarkMdxImages,
            ];
            options.rehypePlugins = [
                ...(options.rehypePlugins ?? []),
                rehypeKatex,
            ];
            return options;
        },
        esbuildOptions: (options) => {
            options.loader = {
                ...options.loader,
                ".png": "file",
            };

            return options;
        },
    });

    const items: Items = {};
    fields.forEach((field) => {
        switch (field) {
            case "slug":
                items["slug"] = slug;
                break;
            case "content":
                items["content"] = code;
                break;
            default:
                items[field] = frontmatter[field];
                break;
        }
    });
    return items as Post;
};

export const getPosts = async (fields: Field[]) => {
    const slugs = await getPostSlugs();
    return await Promise.all(slugs.map((slug) => getPostBySlug(slug, fields)));
};

export const getRelatedPost = async (slug: string) => {
    const posts = (await getPosts(["slug", "title", "date"])).sort(
        (post1, post2) => (post1.date > post2.date ? -1 : 1)
    );

    const index = posts.findIndex((post) => post.slug === slug);
    return {
        lastPost: index > 0 ? posts[index - 1] : null,
        nextPost: index < posts.length - 1 ? posts[index + 1] : null,
    };
};
