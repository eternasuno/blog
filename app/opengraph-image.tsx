import { env } from 'node:process';
import { withoutEmpty } from '@/libs/wrapper';
import { ImageResponse } from 'next/og';

const AUTHOR = withoutEmpty(env.BLOG_AUTHOR);

export const runtime = 'edge';

export const alt = `${AUTHOR}'s blog`;

export const size = {
  height: 630,
  width: 1200,
};

export const contentType = 'image/png';

const Image = () =>
  new ImageResponse(
    <div tw="relative flex h-full w-full flex-col bg-black font-serif text-white">
      <h1 tw="m-auto font-bold text-6xl capitalize tracking-tight">{alt}</h1>
      <p tw="absolute right-4 bottom-0">
        {`Copyright © ${new Date().getFullYear()} - All right reserved by ${AUTHOR}`}
      </p>
    </div>,
    {
      ...size,
    },
  );

export default Image;
