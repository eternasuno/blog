import BLOG from '@/lib/config';
import { ImageResponse } from 'next/og';

export const runtime = 'edge';

const imageMetadatas = [
  {
    id: '192',
    size: { height: 192, width: 192 },
  },
  {
    id: '384',
    size: { height: 384, width: 384 },
  },
  {
    id: '512',
    size: { height: 512, width: 512 },
  },
  {
    id: '1024',
    size: { height: 1024, width: 1024 },
  },
];

const Icon = ({ id }: { id: string }) => {
  // biome-ignore lint/style/noNonNullAssertion: id is always in imageMetadatas
  const { size } = imageMetadatas.find((data) => data.id === id)!;

  return new ImageResponse(
    <div tw="flex h-full w-full rounded-full justify-center items-center bg-black text-[60vw] uppercase text-white">
      {BLOG.title[0]}
    </div>,
    { ...size },
  );
};

export const generateImageMetadata = () => {
  return imageMetadatas;
};

export default Icon;
