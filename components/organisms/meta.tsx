import Head from "next/head";

type Props = {
    title: string;
    domain: string;
    canonical: string;
    description?: string;
};

const Meta = ({ title, domain, canonical, description }: Props) => {
    const ogImg = `${domain}/api/og-image?title=${encodeURIComponent(title)}`;

    return (
        <Head>
            <meta charSet="utf-8" />

            <meta
                name="viewport"
                content="width=device-width, initial-scale=1.0"
            />

            <meta
                name="theme-color"
                media="(prefers-color-scheme: light)"
                content="white"
            />
            <meta
                name="theme-color"
                media="(prefers-color-scheme: dark)"
                content="#282b34"
            />

            <meta name="description" content={description} />

            <meta property="og:url" content={canonical} />
            <meta property="og:type" content="website" />
            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />
            <meta property="og:image" content={ogImg} />

            <meta name="twitter:card" content="summary_large_image" />
            <meta property="twitter:domain" content={domain} />
            <meta property="twitter:url" content={canonical} />
            <meta name="twitter:title" content={title} />
            <meta name="twitter:description" content={description} />
            <meta name="twitter:image" content={ogImg} />

            <title>{title}</title>

            <link rel="manifest" href="/site.webmanifest" />

            <link
                rel="icon"
                type="image/png"
                sizes="16x16"
                href="/icons/icon-16x16.png"
            />
            <link
                rel="icon"
                type="image/png"
                sizes="32x32"
                href="/icons/icon-32x32.png"
            />
            <link rel="apple-touch-icon" href="/icons/apple-touch-icon.png" />

            <link rel="canonical" href={canonical} />

            <link
                rel="alternate"
                title="RSS feed"
                type="application/rss+xml"
                href="/rss.xml"
            />
        </Head>
    );
};

export default Meta;
