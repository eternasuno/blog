const withPWA = require("next-pwa")({
    disable: process.env.NODE_ENV === "development",
    dest: "public"
});

module.exports = withPWA({
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "cdn.jsdelivr.net",
                pathname: "/**"
            }
        ]
    }
});
