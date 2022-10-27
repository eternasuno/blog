import matter from "gray-matter";
import fetch from "node-fetch";
import BLOG from "./config";

export const getPostSlugs = async () => {
    const { name, owner, branch } = BLOG.repository;
    const url = `https://api.github.com/repos/${owner}/${name}/contents?ref=${branch}`;
    const response = await fetch(url, {
        headers: {
            Accept: "application/vnd.github+json"
        }
    });
    const contents = (await response.json()) as {
        type: string;
        path: string;
    }[];

    return contents
        .filter(content => content.type === "file" && (BLOG.is_dev || content.path.lastIndexOf(".draft.md") < 0))
        .map(content => content.path.replace(/\.md$/, ""));
};

export const getPostBySlug = async <Post>(slug: string) => {
    const { name, owner, branch } = BLOG.repository;
    const url = `https://raw.githubusercontent.com/${owner}/${name}/${branch}/${slug}.md`;
    const response = await fetch(url);
    const markdown = await response.text();

    const { data, excerpt, content } = matter(markdown, {
        excerpt: true,
        excerpt_separator: "<!-- excerpt -->"
    });
    const { title, date, tags } = data;

    return {
        title,
        slug,
        date,
        tags: tags || null,
        excerpt,
        content
    } as Post;
};

export const getPosts = async <Post>() => {
    const slugs = await getPostSlugs();
    const posts = await Promise.all(slugs.map(slug => getPostBySlug<Post & { date: string }>(slug)));
    return posts.sort((post1, post2) => (post1.date && post2.date && post1.date > post2.date ? -1 : 1)) as Post[];
};

export const getPostTags = async () => {
    const posts = await getPosts<{ tags: string[] }>();
    const postTagSet = posts.reduce((previousValue, currentValue) => {
        const tags = currentValue.tags;
        tags && tags.forEach((tag: any) => previousValue.add(tag));
        return previousValue;
    }, new Set<string>());
    return Array.from(postTagSet);
};

export const getPostsByTag = async <Post>(tag: string) => {
    const posts = await getPosts<Post & { tags: string[] }>();
    return posts.filter(post => {
        const tags = post.tags;
        return tags && tags.includes(tag);
    }) as Post[];
};

export const getRelatedPost = async <Post>(slug: string) => {
    const posts = await getPosts<Post & { slug: string }>();
    const index = posts.findIndex(post => post.slug === slug);
    return {
        lastPost: index > 0 ? posts[index - 1] : posts[posts.length - 1],
        nextPost: index < posts.length - 1 ? posts[index + 1] : posts[0]
    };
};
