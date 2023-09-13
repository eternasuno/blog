import Container from '@/components/atoms/container';
import Footer from '@/components/organisms/footer';
import Nav from '@/components/organisms/nav';
import BLOG from '@/lib/config';
import { Metadata } from 'next';
import Providers from './providers';

import './global.css';

const layout = ({ children }: { children: React.ReactNode }) => (
    <html suppressHydrationWarning>
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
    description: BLOG.description,
    themeColor: [
        { color: 'white', media: '(prefers-color-scheme: light)' },
        { color: '#282b34', media: '(prefers-color-scheme: dark)' },
    ],
    title: {
        default: BLOG.title,
        template: `%s | ${BLOG.title}`,
    },
};

export default layout;
