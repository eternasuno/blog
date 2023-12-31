import Container from '@/components/atoms/container';
import Footer from '@/components/organisms/footer';
import Nav from '@/components/organisms/nav';
import BLOG from '@/lib/config';
import { Metadata } from 'next';
import Providers from './providers';

import './global.css';

const Layout = ({ children }: { children: React.ReactNode }) => (
  <html lang="en" suppressHydrationWarning>
    <head />
    <body>
      <Providers>
        <div className="flex min-h-screen flex-col">
          <Nav />
          <Container className="flex-1">{children}</Container>
          <Footer />
        </div>
      </Providers>
    </body>
  </html>
);

export const metadata: Metadata = {
  alternates: {
    canonical: '/',
    types: {
      'application/rss+xml': '/rss',
    },
  },
  appleWebApp: {
    capable: true,
    statusBarStyle: 'black-translucent',
    title: BLOG.title,
  },
  description: BLOG.description,
  metadataBase: new URL(`https://${BLOG.domain}`),
  title: {
    default: BLOG.title,
    template: `%s | ${BLOG.title}`,
  },
};

export default Layout;
