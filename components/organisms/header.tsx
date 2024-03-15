import { env } from 'node:process';
import { withoutEmpty } from '@/libs/wrapper';
import Button from '../atoms/button';
import Container from '../atoms/container';
import Glass from '../atoms/glass';
import Link from '../atoms/link';
import Shell from '../atoms/shell';
import Strong from '../atoms/strong';
import ThemeToggle from '../atoms/theme-toggle';

const AUTHOR = withoutEmpty(env.BLOG_AUTHOR);

const Header = () => (
  <Glass asChild>
    <header className="sticky top-0 z-10">
      <Container asChild>
        <nav className="navbar md:py-4">
          <span className="flex-1">
            <Link href="/">
              <Shell className="md:text-lg">cd /home/{AUTHOR}</Shell>
            </Link>
          </span>
          <span>
            <Strong asChild className="md:text-lg">
              <Link $as="button" href="/tags">
                tags
              </Link>
            </Strong>
            <Button asChild className="btn-square swap swap-rotate">
              <label>
                <ThemeToggle className="hidden" />
                <i className="i-heroicons-sun-solid swap-on size-6 md:size-7" />
                <i className="i-heroicons-moon-solid swap-off size-6 md:size-7" />
              </label>
            </Button>
          </span>
        </nav>
      </Container>
    </header>
  </Glass>
);

export default Header;
