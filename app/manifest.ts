import BLOG from '@/lib/config';
import { MetadataRoute } from 'next';

const Manifest = () =>
    ({
        background_color: '#F7FCFE',
        description: BLOG.description,
        display: 'fullscreen',
        icons: [
            {
                purpose: 'any',
                sizes: '192x192',
                src: '/icon/192',
                type: 'image/png',
            },
            {
                purpose: 'any',
                sizes: '384x384',
                src: '/icon/384',
                type: 'image/png',
            },
            {
                purpose: 'any',
                sizes: '512x512',
                src: '/icon/512',
                type: 'image/png',
            },
            {
                purpose: 'maskable',
                sizes: '1024x1024',
                src: '/icon/1024',
                type: 'image/png',
            },
        ],
        id: BLOG.title,
        name: BLOG.title,
        orientation: 'any',
        prefer_related_applications: false,
        scope: '/',
        short_name: BLOG.title,
        start_url: '/',
        theme_color: '#F7FCFE',
    }) as MetadataRoute.Manifest;

export default Manifest;
