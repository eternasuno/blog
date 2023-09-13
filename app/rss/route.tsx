import BLOG from '@/lib/config';
import { renderToHtml } from '@/lib/markdown';
import { Post, getPosts } from '@/lib/post';
import { NextRequest, NextResponse } from 'next/server';

export const GET = async (request: NextRequest) => {
    const { protocol, host } = new URL(request.url);
    const domain = `${protocol}//${host}`;
    const rss = await generateRss(domain);

    return new NextResponse(rss, {
        headers: {
            'content-type': 'text/xml',
        },
    });
};

const generateRssItem = async (
    domain: string,
    { slug, title, date, content }: Post
) => `
  <item>
    <guid>${domain}/posts/${slug}</guid>
    <title><![CDATA[ ${title} ]]></title>
    <link>${domain}/posts/${slug}</link>
    <description><![CDATA[ ${await renderToHtml(content)} ]]></description>
    <pubDate>${new Date(date).toUTCString()}</pubDate>
  </item>
`;

const generateRss = async (domain: string) => `
  <rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
    <channel>
      <title><![CDATA[ ${BLOG.title} ]]></title>
      <link>${domain}</link>
      <description><![CDATA[ ${BLOG.description} ]]></description>
      <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
      <atom:link href="${domain}/rss.xml" rel="self" type="application/rss+xml"/>
      ${(
          await Promise.all(
              (await getPosts()).map((post) => generateRssItem(domain, post))
          )
      ).join('')}
    </channel>
  </rss>
`;
