import { promises as fsPromises } from 'fs';
import matter from 'gray-matter';
import { join } from 'path';
import readingTime from 'reading-time';

type Items = {
    [key: string]: any;
};

const postsDirectory = join(process.cwd(), '_posts');

export const getPostSlugs = async () => {
    return (await fsPromises.readdir(postsDirectory)).map(fileName =>
        fileName.replace(/\.md$/, '')
    );
};

export const getPostBySlug = async (slug: string, fields: string[]) => {
    const fileContents = await fsPromises.readFile(
        join(postsDirectory, `${slug}.md`),
        'utf8'
    );

    const { data, content } = matter(fileContents);

    const post: Items = {};
    fields.map(field => {
        switch (field) {
            case "slug":
                post[field] = slug;
                break;
            case "readTime":
                post[field] = readingTime(content).text;
                break;
            case "content":
                post[field] = content;
                break;
            default:
                post[field] = data[field];
                break;
        }
    });

    return post;
};

export const getPosts = async (fields: string[]) => {
    const slugs = await getPostSlugs();
    const posts = await Promise.all(slugs.map((slug: string) =>
        getPostBySlug(slug, fields)
    ));

    return posts;
};