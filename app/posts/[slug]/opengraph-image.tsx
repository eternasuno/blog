import BLOG from '@/lib/config';
import { getPostBySlug } from '@/lib/post';
import { ImageResponse } from 'next/server';

export const runtime = 'edge';

export const alt = BLOG.title;

export const size = {
    height: 630,
    width: 1200,
};

export const contentType = 'image/png';

const Image = async ({ params: { slug } }: { params: { slug: string } }) => {
    const post = await getPostBySlug(slug);

    return new ImageResponse(
        (
            <div tw="relative flex h-full w-full flex-col bg-black text-white font-serif">
                <h1 tw="m-auto text-6xl font-bold capitalize tracking-tight">
                    {post.title}
                </h1>
                <p tw="absolute bottom-0 right-4">
                    {`Copyright © ${new Date().getFullYear()} - All right reserved by ${
                        BLOG.repository.owner
                    }`}
                </p>
            </div>
        ),
        {
            ...size,
        }
    );
};

export default Image;
