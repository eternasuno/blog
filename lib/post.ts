import matter from 'gray-matter';
import BLOG from './config';
import { getCommits, getContent, getContents } from './github';

export type Post = {
    content: string;
    date: string;
    excerpt: string;
    slug: string;
    title: string;
};

export const getPostSlugs = async () => {
    const contents = (await getContents()) as { path: string }[];

    return contents
        .filter(
            ({ path }) =>
                path.lastIndexOf('.md') > 0 &&
                (BLOG.is_dev || path.lastIndexOf('.draft.md') < 0)
        )
        .map(({ path }) => path.replace(/\.md$/, ''));
};

export const getPostBySlug = async (slug: string) => {
    const path = `${slug}.md`;
    const [markdown, commits] = await Promise.all([
        getContent(path),
        getCommits(path),
    ]);

    const {
        data: { title },
        excerpt,
        content,
    } = matter(markdown, {
        excerpt: true,
        excerpt_separator: '<!-- excerpt -->',
    });

    const [
        {
            commit: {
                committer: { date },
            },
        },
    ] = commits;

    return {
        content,
        date,
        excerpt: excerpt || content.split('\n').find((line) => line),
        slug,
        title: title || slug,
    } as Post;
};

export const getPosts = async () => {
    const slugs = await getPostSlugs();
    const posts = await Promise.all(slugs.map(getPostBySlug));

    return posts.sort((post1, post2) => (post1.date > post2.date ? -1 : 1));
};

export const getRelatedPost = async (slug: string) => {
    const posts = await getPosts();
    const index = posts.findIndex((post) => post.slug === slug);

    return {
        nextPost: index < posts.length - 1 ? posts[index + 1] : posts[0],
        previousPost: index > 0 ? posts[index - 1] : posts[posts.length - 1],
    };
};
