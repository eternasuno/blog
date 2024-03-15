import type { MetadataRoute } from 'next';

const Robots = () =>
  ({
    rules: {
      disallow: '/',
      userAgent: '*',
    },
  }) as MetadataRoute.Robots;

export default Robots;
