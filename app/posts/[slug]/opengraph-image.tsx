import { CREATOR, TITLE } from '@/libs/config';
import { getPostBySlug } from '@/libs/post';
import { ImageResponse } from 'next/og';

export const alt = TITLE;

export const size = {
  height: 630,
  width: 1200,
};

export const contentType = 'image/png';

const Image = async ({ params: { slug } }: { params: { slug: string } }) => {
  const { title } = await getPostBySlug(slug);

  return new ImageResponse(
    <div tw="relative flex h-full w-full flex-col bg-black font-serif text-white">
      <h1 tw="m-auto font-bold text-6xl capitalize tracking-tight">{title}</h1>
      <p tw="absolute right-4 bottom-0">
        {`Copyright © ${new Date().getFullYear()} - All right reserved by ${CREATOR}`}
      </p>
    </div>,
    {
      ...size,
    },
  );
};

export default Image;
