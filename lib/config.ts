const BLOG = {
    title: "EternaSuno's Blog",
    author: "EternaSuno",
    description: "World is trash, and so am I.",
    domain: "https://eterna-suno.vercel.app",
    since: "2020",
    routers: [
        {
            href: "/",
            title: "home"
        },
        {
            href: "/tags",
            title: "tags"
        },
        {
            href: "/posts",
            title: "archive"
        }
    ],
    og: {
        bgImage:
            "https://images.unsplash.com/photo-1509223740887-8ab81082b074?w=1050&q=80"
    },
    is_dev: process.env.NODE_ENV === "development"
};

export default BLOG;
