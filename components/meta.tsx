import Head from "next/head";

type Props = {
    title: string;
    canonical: string;
    description?: string;
};

const Meta = ({ title, canonical, description }: Props) => (
    <Head>
        <meta charSet='utf-8' />
        <meta httpEquiv='X-UA-Compatible' content='IE=edge' />
        <meta name='viewport' content='width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no' />
        <meta name='description' content={description} />
        <title>{title}</title>

        <link rel="canonical" href={canonical} />
        <link rel="manifest" href="/manifest.json" />
        <link rel='icon' type='image/png' sizes='16x16'
            href='/images/icons/icon-16x16.png' />
        <link rel='icon' type='image/png' sizes='32x32'
            href='/images/icons/icon-32x32.png' />
        <link rel="apple-touch-icon"
            href="/images/icons/apple-icon.png" />
        <meta name="theme-color" content="#555" />

        <meta property="og:type" content="website" />
        <meta property="og:title" content={title} />
        <meta property="og:url" content={canonical} />
        <meta property="og:image" content="/images/icons/icon-512x512.png" />
        <meta property="og:image:alt" content={description} />
        <meta property="og:image:height" content="512" />
        <meta property="og:image:width" content="512" />

        <link rel="alternate" title="RSS feed"
            type="application/rss+xml" href="/feed" />
        <link rel="stylesheet" crossOrigin="anonymous"
            href="https://cdn.jsdelivr.net/npm/katex@0.12.0/dist/katex.min.css"
            integrity="sha384-AfEj0r4/OFrOo5t7NnNe46zW/tFgW6x/bCJG8FqQCEo3+Aro6EYUG4+cU+KJWu/X" />
    </Head>
);

export default Meta;