import BLOG from '@/lib/config';
import { renderToHtml } from '@/lib/markdown';
import { Post, getPosts } from '@/lib/post';
import { NextResponse } from 'next/server';

export const GET = async () =>
    new NextResponse(await generateRss(), {
        headers: {
            'content-type': 'text/xml',
        },
    });

const generateRssItem = async ({ slug, title, date, content }: Post) => `
  <item>
    <guid>https://${BLOG.domain}/posts/${slug}</guid>
    <title><![CDATA[ ${title} ]]></title>
    <link>https://${BLOG.domain}/posts/${slug}</link>
    <description><![CDATA[ ${await renderToHtml(content)} ]]></description>
    <pubDate>${new Date(date).toUTCString()}</pubDate>
  </item>
`;

const generateRss = async () => `
  <rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
    <channel>
      <title><![CDATA[ ${BLOG.title} ]]></title>
      <link>https://${BLOG.domain}</link>
      <description><![CDATA[ ${BLOG.description} ]]></description>
      <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
      <atom:link href="https://${
          BLOG.domain
      }/rss.xml" rel="self" type="application/rss+xml"/>
      ${(
          await Promise.all(
              (await getPosts()).map((post) => generateRssItem(post))
          )
      ).join('')}
    </channel>
  </rss>
`;
