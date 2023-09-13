import Link from 'next/link';
import Container from '../atoms/container';
import DarkModeButton from '../molecules/dark-mode-button';
import HomeButton from '../molecules/home-button';
import RssButton from '../molecules/rss-button';

const Nav = () => (
    <nav className="sticky top-0 z-10 shadow backdrop-blur-sm">
        <Container className="navbar">
            <div className="navbar-start">
                <Link href="/">
                    <HomeButton />
                </Link>
            </div>
            <div className="navbar-end">
                <Link
                    href="/rss"
                    target="_blank"
                    rel="noopener"
                    prefetch={false}>
                    <RssButton />
                </Link>
                <DarkModeButton />
            </div>
        </Container>
    </nav>
);

export default Nav;
