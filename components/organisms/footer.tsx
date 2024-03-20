import { AUTHOR } from '@/libs/config';
import { getYear } from 'date-fns';
import Container from '../atoms/container';
import Link from '../atoms/link';

const Footer = () => (
  <Container asChild>
    <footer className="footer place-items-center gap-y-2 p-4 md:justify-between">
      <span className="block">
        Copyright © {getYear(new Date())} - <Link href="/">{AUTHOR}</Link>
      </span>
      <span className="grid-flow-col items-center">
        <Link $external href="https://creativecommons.org/licenses/by-nd/4.0">
          CC BY-NC 4.0
        </Link>
        <Link $external aria-label="rss" className="leading-none" href="/rss">
          <i className="i-heroicons-rss-solid size-5" />
        </Link>
      </span>
    </footer>
  </Container>
);

export default Footer;
