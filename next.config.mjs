/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  rewrites: () => [
    {
      source: '/admin',
      destination: '/admin/index.html',
    },
  ],
};

export default nextConfig;
