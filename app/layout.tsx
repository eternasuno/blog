import Container from '@/components/atoms/container';
import Footer from '@/components/organisms/footer';
import Header from '@/components/organisms/header';
import { AUTHOR, BASE_URL } from '@/libs/config';
import type { Metadata } from 'next';
import type { ReactNode } from 'react';

import './global.css';

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
  metadataBase: new URL(BASE_URL),
  title: { default: AUTHOR, template: `%s | ${AUTHOR}` },
};

export default Layout;
