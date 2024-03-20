import { promises as fs } from 'fs';
import { join } from 'path';
import { formatISO } from 'date-fns';
import matter, { type GrayMatterFile } from 'gray-matter';
import { unstable_cache } from 'next/cache';
import { cache } from 'react';
import { DEV, POST_DIR } from './config';

export type Post = {
  content: string;
  date: string;
  excerpt: string;
  slug: string;
  tags: string[];
  title: string;
};

export const getSlugs = async () =>
  (await fs.readdir(POST_DIR))
    .filter((filename) => filename.lastIndexOf('.md') > 0)
    .filter((filename) => DEV || filename.lastIndexOf('.draft.md') < 0)
    .map((filename) => filename.replace(/\.md$/, ''));

export const getPostBySlug = unstable_cache(
  cache(async (slug: string) => {
    const path = join(POST_DIR, `${slug}.md`);
    const fileContent = await fs.readFile(path, 'utf-8');

    const {
      data: { title, date, tags },
      excerpt,
      content,
    } = matter(fileContent, {
      // @ts-ignore
      excerpt: (file: GrayMatterFile<typeof fileContent>, { excerpt_separator }): void => {
        const [excerpt, rest] = file.content.split(excerpt_separator, 2);
        if (rest) {
          file.excerpt = excerpt;
          file.content = excerpt + rest;
        } else {
          file.excerpt = file.content.split('\n').find((line) => line) || file.content;
        }
      },
      excerpt_separator: '<!-- excerpt -->',
    });

    return {
      content,
      date: date || formatISO(new Date()),
      excerpt,
      slug,
      tags: tags || [],
      title: title || slug,
    } as Post;
  }),
  ['post'],
);

export const getPosts = async () =>
  (await Promise.all((await getSlugs()).map((slug) => getPostBySlug(slug)))).sort(
    (post1, post2) => (post1.date > post2.date ? -1 : 1),
  );

export const getTags = async () =>
  Array.from(
    new Set((await getPosts()).reduce<string[]>((tags, post) => tags.concat(post.tags), [])),
  );

export const getPostsByTag = async (tag: string) =>
  (await getPosts()).filter(({ tags }) => tags.includes(tag));
