import Link from 'next/link';
import Container from '../atoms/container';
import DarkModeButton from '../molecules/dark-mode-button';
import HomeButton from '../molecules/home-button';
import RssButton from '../molecules/rss-button';

const Nav = () => (
    <nav className="sticky top-0 z-10 bg-base-100/50 shadow backdrop-blur-sm">
        <Container className="navbar">
            <div className="navbar-start">
                <Link aria-label="home" href="/">
                    <HomeButton />
                </Link>
            </div>
            <div className="navbar-end">
                <Link
                    aria-label="rss"
                    href="/rss"
                    prefetch={false}
                    rel="noopener"
                    target="_blank">
                    <RssButton />
                </Link>
                <DarkModeButton />
            </div>
        </Container>
    </nav>
);

export default Nav;
