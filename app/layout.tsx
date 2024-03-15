import { env } from 'node:process';
import Container from '@/components/atoms/container';
import Footer from '@/components/organisms/footer';
import Header from '@/components/organisms/header';
import { withoutEmpty } from '@/libs/wrapper';
import type { Metadata } from 'next';
import type { ReactNode } from 'react';

import './global.css';

const AUTHOR = withoutEmpty(env.BLOG_AUTHOR);
const DOMAIN = env.BLOG_DOMAIN || env.VERCEL_URL || `localhost:${env.PORT || 3000}`;

const Layout = async ({ children }: { children: ReactNode }) => (
  <html lang="en" suppressHydrationWarning>
    <head />
    <body className="flex min-h-screen flex-col">
      <Header />
      <Container asChild className="flex-grow">
        <main>{children}</main>
      </Container>
      <Footer />
    </body>
  </html>
);

export const metadata: Metadata = {
  alternates: { canonical: '/', types: { 'application/rss+xml': '/rss' } },
  appleWebApp: { capable: true, statusBarStyle: 'black-translucent', title: AUTHOR },
  creator: AUTHOR,
  description: `${AUTHOR}'s blog.`,
  metadataBase: new URL(`https://${DOMAIN}`),
  title: { default: AUTHOR, template: `%s | ${AUTHOR}` },
};

export default Layout;
