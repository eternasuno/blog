import BLOG from '@/lib/config';
import { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
    return {
        background_color: '#282b34',
        description: BLOG.description,
        display: 'standalone',
        icons: [],
        name: BLOG.title,
        orientation: 'any',
        prefer_related_applications: false,
        scope: '/',
        short_name: BLOG.title,
        start_url: '/',
        theme_color: '#282b34',
    };
}
