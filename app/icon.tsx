import BLOG from '@/lib/config';
import { ImageResponse } from 'next/server';

export const runtime = 'edge';

const Icon = () =>
    new ImageResponse(
        (
            <div tw="flex h-full w-full rounded-xl bg-white p-12">
                <div tw="flex h-full w-full items-center justify-center rounded-full bg-black shadow">
                    <div tw="text-[24rem] uppercase text-white">
                        {BLOG.title[0]}
                    </div>
                </div>
            </div>
        ),
        {
            height: 512,
            width: 512,
        }
    );

export const generateImageMetadata = () => {
    return [
        {
            id: 'small',
            size: { height: 180, width: 180 },
        },
        {
            id: 'medium',
            size: { height: 192, width: 192 },
        },
        {
            id: 'large',
            size: { height: 512, width: 512 },
        },
    ];
};

export default Icon;
