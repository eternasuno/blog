import { promises as fsPromises } from 'fs';
import matter from 'gray-matter';
import { join } from 'path';
import readingTime from 'reading-time';

export type Post = {
    slug: string;
    title: string;
    date: string;
    readTime: string;
    content: string;
    excerpt: string;
};

const postsDirectory = join(process.cwd(), '_posts');

export const getPostSlugs = async () => {
    return (await fsPromises.readdir(postsDirectory)).map(fileName =>
        fileName.replace(/\.md$/, '')
    );
};

export const getPostBySlug = async (slug: string, needContent = true): Promise<Post> => {
    const fileContents = await fsPromises.readFile(
        join(postsDirectory, `${slug}.md`),
        'utf8'
    );

    const { data, content } = matter(fileContents);

    return {
        slug,
        title: data["title"],
        date: data["date"],
        readTime: readingTime(content).text,
        content: needContent ? content : "",
        excerpt: data["excerpt"] || ""
    };
};

export const getPosts = async () => {
    const slugs = await getPostSlugs();
    const posts = await Promise.all(slugs.map((slug: string) =>
        getPostBySlug(slug, false)
    ));

    return posts;
};