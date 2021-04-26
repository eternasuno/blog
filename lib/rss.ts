import { promises as fsPromises } from 'fs';
import { join } from "path";
import { Post } from './post';
import { WEB_DESC, WEB_DOMAIN, WEB_TITLE } from './web.config';

const generateRssItem = ({ slug, title, date, excerpt }: Post): string => `
  <item>
    <guid>${WEB_DOMAIN}/posts/${slug}</guid>
    <title><![CDATA[ ${title} ]]></title>
    <link>${WEB_DOMAIN}/posts/${slug}</link>
    <description><![CDATA[ ${excerpt} ]]></description>
    <pubDate>${new Date(date).toUTCString()}</pubDate>
  </item>
`;

const generateRss = (posts: Post[]): string => `
  <rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
    <channel>
      <title><![CDATA[ ${WEB_TITLE} ]]></title>
      <link>${WEB_DOMAIN}</link>
      <description><![CDATA[ ${WEB_DESC} ]]></description>
      <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
      <atom:link href="${WEB_DOMAIN}/rss.xml" rel="self" type="application/rss+xml"/>
      ${posts.map(generateRssItem).join('')}
    </channel>
  </rss>
`;

export const generateRssFile = async (posts: Post[]) => {
  const rss = generateRss(posts);

  await fsPromises.writeFile(join(process.cwd(), "public", "rss.xml"), rss);
};