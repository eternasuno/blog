import fs from 'fs';
import matter from 'gray-matter';
import renderToString from 'next-mdx-remote/render-to-string';
import { join } from 'path';
import readingTime from 'reading-time';
import { renderToStringOptions } from './mdx';

type Items = {
    [key: string]: any;
};

const postsDirectory = join(process.cwd(), '_posts');

export const getPostSlugs = () => {
    return fs.readdirSync(postsDirectory).map(fileName =>
        fileName.replace(/\.mdx$/, '')
    );
};

export const getPostBySlug = async (slug: string, fields: string[]) => {
    const fileContents = fs.readFileSync(
        join(postsDirectory, `${slug}.mdx`),
        'utf8'
    );

    const { data, content } = matter(fileContents);

    const post: Items = {};
    for (let field of fields) {
        switch (field) {
            case "slug":
                post[field] = slug;
                break;
            case "readTime":
                post[field] = readingTime(content).text;
                break;
            case "content":
                post[field] = await renderToString(content, renderToStringOptions);
                break;
            default:
                post[field] = data[field];
                break;
        }
    }

    return post;
};

export const getPosts = async (fields: string[]) => {
    const slugs = getPostSlugs();
    const posts = await Promise.all(slugs.map(slug =>
        getPostBySlug(slug, fields)
    ));

    return posts;
};