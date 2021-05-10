import Head from "next/head";
import { WEB_DESC, WEB_OG_IMG } from "../lib/web.config";

type Props = {
    title: string;
    canonical: string;
    description?: string;
    children?: React.ReactNode;
};

const getOgImage = (title: string) => {
    const cardUrl = `https://cards.microlink.io/?preset=article&image=${WEB_OG_IMG}&caption=${WEB_DESC}&headline=${title}&date=`;
    return `https://i.microlink.io/${encodeURIComponent(cardUrl)}`;
};

const Meta = ({ title, canonical, description, children }: Props) => (
    <Head>
        <meta charSet='utf-8' />
        <meta httpEquiv='X-UA-Compatible' content='IE=edge' />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name='description' content={description} />
        <title>{title}</title>

        <link rel="manifest" href="/manifest.json" />
        <link rel="icon" type="image/png" sizes="16x16" href="/icons/icon-16x16.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/icons/icon-32x32.png" />
        <link rel="apple-touch-icon" href="/icons/apple-touch-icon.png" />
        <meta name="theme-color" content="#555" />

        <meta property="og:type" content="website" />
        <meta property="og:title" content={title} />
        <meta property="og:url" content={canonical} />
        <meta property="og:image" content={getOgImage(title)} />
        <meta property="og:description" content={description} />

        <link rel="canonical" href={canonical} />
        <link rel="alternate" title="RSS feed"
            type="application/rss+xml" href="/feed" />

        {children}
    </Head>
);

export default Meta;