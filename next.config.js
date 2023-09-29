const withPWA = require('@ducanh2912/next-pwa').default({
    aggressiveFrontEndNavCaching: true,
    cacheOnFrontEndNav: true,
    dest: 'public',
    disable: process.env.NODE_ENV === 'development',
});

module.exports = withPWA({
    reactStrictMode: true,
});
