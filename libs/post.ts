import { promises as fs } from 'fs';
import { join } from 'path';
import matter, { type GrayMatterFile } from 'gray-matter';
import { unstable_cache } from 'next/cache';
import { cache } from 'react';
import { POST_DIR } from './config';

export type Post = {
  title: string;
  slug: string;
  date: Date;
  tags: string[];
  excerpt: string;
  content: string;
};

export const getSlugs = async () =>
  (await fs.readdir(POST_DIR))
    .map((filename) => filename.replace(/\.md$/, ''))
    .sort((a, b) => (b > a ? 1 : -1));

export const getPostBySlug = unstable_cache(
  cache(async (slug: string) => {
    const [year, month, day] = slug.split('-', 3);
    const date = new Date(Number(year), Number(month) - 1, Number(day));

    const path = join(POST_DIR, `${slug}.md`);
    const fileContent = await fs.readFile(path, 'utf-8');
    const { data, excerpt, content } = matter(fileContent, {
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

    return { ...data, slug, date, excerpt, content } as Post;
  }),
  ['posts'],
);

export const getPosts = async () =>
  Promise.all((await getSlugs()).map((slug) => getPostBySlug(slug)));

export const getTags = async () =>
  Array.from(
    (await getPosts()).reduce<Set<string>>((tags, post) => {
      for (const tag of post.tags) {
        tags.add(tag);
      }

      return tags;
    }, new Set()),
  );

export const getPostsByTag = async (tag: string) =>
  (await getPosts()).filter(({ tags }) => tags.includes(tag));
