import { promises as fs } from "fs";
import matter from "gray-matter";
import { join } from "path";

const postsDirectory = join(process.cwd(), "posts");

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
    const postFiles = await fs.readdir(postsDirectory);
    return postFiles.map((post) => post.replace(/\.md$/, ""));
};

export const getPostBySlug = async (slug: string, fields: Field[]) => {
    const postPath = join(postsDirectory, `${slug}.md`);
    const postContent = await fs.readFile(postPath, "utf-8");
    const { data, content } = matter(postContent);

    const items: Items = {};
    fields.forEach((field) => {
        switch (field) {
            case "slug":
                items["slug"] = slug;
                break;
            case "content":
                items["content"] = content;
                break;
            default:
                items[field] = data[field];
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
