import { promises as fs } from "fs";
import { join } from "path";
import BLOG from "./config";
import { renderToHtml } from "./markdown";

type Post = {
    slug: string;
    title: string;
    date: string;
    content: string;
};

const generateRssItem = async ({ slug, title, date, content }: Post) => `
  <item>
    <guid>${BLOG.domain}/posts/${slug}</guid>
    <title><![CDATA[ ${title} ]]></title>
    <link>${BLOG.domain}/posts/${slug}</link>
    <description><![CDATA[ ${await renderToHtml(content)} ]]></description>
    <pubDate>${new Date(date).toUTCString()}</pubDate>
  </item>
`;

const generateRss = async (posts: Post[]) => `
  <rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
    <channel>
      <title><![CDATA[ ${BLOG.title} ]]></title>
      <link>${BLOG.domain}</link>
      <description><![CDATA[ ${BLOG.description} ]]></description>
      <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
      <atom:link href="${BLOG.domain}/rss.xml" rel="self" type="application/rss+xml"/>
      ${(await Promise.all(posts.map(generateRssItem))).join("")}
    </channel>
  </rss>
`;

export const generateRssFile = async (posts: Post[]) => {
    const rss = await generateRss(posts);
    await fs.writeFile(join(process.cwd(), "public", "rss.xml"), rss);
};
