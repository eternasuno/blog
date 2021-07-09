import Head from "next/head";
import BLOG from "../../blog.config";

type Props = {
    title: string;
    canonical?: string;
    description?: string;
    children?: React.ReactNode;
};

const Meta = ({ title, canonical = "", description, children }: Props) => {
    const cardUrl = `https://cards.microlink.io/?preset=adobe&border=5px&gradient=linear-gradient%28to+right%2C%2334d399%2C+%233b82f6%29&title=${title}`;
    const image = `https://i.microlink.io/${encodeURIComponent(cardUrl)}`;

    return (
        <Head>
            <meta charSet="utf-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <meta name="description" content={description} />
            <title>{title}</title>

            <link rel="manifest" href="/site.webmanifest" />
            <link rel="icon" type="image/png" sizes="16x16" href="/icons/icon-16x16.png" />
            <link rel="icon" type="image/png" sizes="32x32" href="/icons/icon-32x32.png" />
            <link rel="apple-touch-icon" href="/icons/apple-touch-icon.png" />

            <meta property="og:url" content={`${BLOG.domain}/${canonical}`} />
            <meta property="og:type" content="website" />
            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />
            <meta property="og:image" content={image} />

            <meta name="twitter:card" content="summary_large_image" />
            <meta property="twitter:domain" content={BLOG.domain} />
            <meta property="twitter:url" content={`${BLOG.domain}/${canonical}`} />
            <meta name="twitter:title" content={title} />
            <meta name="twitter:description" content={description} />
            <meta name="twitter:image" content={image} />

            <link rel="canonical" href={`${BLOG.domain}/${canonical}`} />
            <link rel="alternate" title="RSS feed"
                type="application/rss+xml" href="/rss.xml" />

            <link rel="preconnect" href="https://cdn.jsdelivr.net" />

            {children}
        </Head>
    );
};

export default Meta;