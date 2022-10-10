import { promises as fs } from "fs";
import { join } from "path";
import CONSTANT from "./config";

type Post = {
    slug: string;
    title: string;
    date: string;
    excerpt: string;
};

const generateRssItem = ({ slug, title, date, excerpt }: Post): string => `
  <item>
    <guid>${CONSTANT.domain}/posts/${slug}</guid>
    <title><![CDATA[ ${title} ]]></title>
    <link>${CONSTANT.domain}/posts/${slug}</link>
    <description><![CDATA[ ${excerpt} ]]></description>
    <pubDate>${new Date(date).toUTCString()}</pubDate>
  </item>
`;

const generateRss = (posts: Post[]): string => `
  <rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
    <channel>
      <title><![CDATA[ ${CONSTANT.title} ]]></title>
      <link>${CONSTANT.domain}</link>
      <description><![CDATA[ ${CONSTANT.description} ]]></description>
      <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
      <atom:link href="${
          CONSTANT.domain
      }/rss.xml" rel="self" type="application/rss+xml"/>
      ${posts.map(generateRssItem).join("")}
    </channel>
  </rss>
`;

export const generateRssFile = async (posts: Post[]) => {
    const rss = generateRss(posts);
    await fs.writeFile(join(process.cwd(), "public", "rss.xml"), rss);
};
