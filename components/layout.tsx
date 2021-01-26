import { useTheme } from "next-themes";
import React, { useEffect, useState } from 'react';
import { RiMoonFill, RiRssFill, RiSunFill } from 'react-icons/ri';
import Meta from './meta';
import Container from './ui/container';
import Nav from './ui/nav';
import NextLink from './ui/next-link';

type Props = {
    title: string;
    subtitle?: string;
    canonical: string;
    description: string;
    children: React.ReactNode;
};

const Layout = ({ title, subtitle, canonical, description, children }: Props) => {
    const { theme, setTheme } = useTheme();
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    return (
        <>
            <Meta title={title} canonical={canonical}
                description={description} />
            <Nav className="sticky top-0 z-10 text-gray-900 dark:text-gray-100">
                <ul className="flex">
                    <li>
                        <NextLink href="/">
                            <span className="p-2 select-none capitalize rounded cursor-pointer hover:bg-gray-600 hover:bg-opacity-25">
                                home
                            </span>
                        </NextLink>
                    </li>
                </ul>
                <div className="flex justify-center">
                    <button className="p-3 h-10 w-10 focus:outline-none rounded cursor-pointer hover:bg-gray-600 hover:bg-opacity-25"
                        onClick={() => isMounted &&
                            setTheme(theme === "light" ? "dark" : "light")}>
                        {
                            isMounted && theme === "light" ?
                                <RiMoonFill /> :
                                <RiSunFill />
                        }
                    </button>
                    <a href="/rss.xml" target="_blank"
                        rel="noopener noreferrer nofollow"
                        className="p-3 h-10 w-10 rounded cursor-pointer hover:bg-gray-600 hover:bg-opacity-25">
                        <RiRssFill />
                    </a>
                </div>
            </Nav >
            <Container className="min-h-screen">
                <header className="pb-8 mb-8 border-b dark:border-gray-700">
                    <h1 className="my-4 font-bold text-gray-900 dark:text-gray-100">
                        {title}
                    </h1>
                    <p>
                        {subtitle}
                    </p>
                </header>
                <main className="pb-8 mb-8">
                    {children}
                </main>
            </Container>
        </>
    );
};

export default Layout;
