const BLOG = {
    description: 'World is trash, and so am I.',
    is_dev: process.env.NODE_ENV === 'development',
    no_derivatives: false,
    non_commercial: true,
    repository: {
        branch: 'main',
        name: 'posts',
        owner: 'eternasuno',
        token: process.env.GITHUB_TOKEN,
    },
    routers: [
        {
            href: '/',
            title: 'home',
        },
    ],
    share_alike: true,
    title: "EternaSuno's Blog",
};

export default BLOG;
