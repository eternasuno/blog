import { twc } from '@/libs/twc';
import NextLink from 'next/link';
import type { TwcComponentProps } from 'react-twc';

type Props = {
  $external?: boolean;
  $primary?: boolean;
} & Omit<TwcComponentProps<typeof NextLink>, 'asChild'>;

const Link = twc(NextLink).attrs<Props>(
  ({ $external }) =>
    $external && { target: '_blank', rel: 'noopener noreferrer', prefetch: false },
)(({ $primary }) => ['font-bold link no-underline', $primary && 'link-primary']);

export default Link;
