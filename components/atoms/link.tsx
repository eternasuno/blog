import { twc } from '@/libs/twc';
import NextLink from 'next/link';
import type { TwcComponentProps } from 'react-twc';

type Props = {
  $as?: 'link' | 'button';
  $external?: boolean;
} & Omit<TwcComponentProps<typeof NextLink>, 'asChild'>;

const Link = twc(NextLink).attrs<Props>(({ $external }) =>
  $external ? { target: '_blank', rel: 'noopener noreferrer', prefetch: false } : {},
)(({ $as }) => ['font-bold', $as === 'button' ? 'btn btn-ghost' : 'link no-underline']);

export default Link;
