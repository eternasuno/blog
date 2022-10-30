const BLOG = {
    title: "EternaSuno's Blog",
    author: "EternaSuno",
    description: "World is trash, and so am I.",
    domain: "https://eterna-suno.vercel.app",
    since: "2020",
    no_derivatives: false,
    share_alike: true,
    non_commercial: true,
    is_dev: process.env.NODE_ENV === "development",
    routers: [
        {
            href: "/",
            title: "home"
        }
    ],
    repository: {
        name: "posts",
        owner: "eternasuno",
        branch: "main"
    }
};

export default BLOG;
