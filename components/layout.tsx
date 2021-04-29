import { useTheme } from "next-themes";
import Link from "next/link";
import React, { useEffect, useState } from 'react';
import { RiMoonFill, RiRssFill, RiSunFill } from 'react-icons/ri';
import Meta from './meta';

type Props = {
    title: string;
    subtitle?: string;
    canonical: string;
    description?: string;
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
            <nav className="w-full py-4">
                <div className="max-w-3xl mx-auto px-4 flex justify-between items-center">
                    <Link href="/">
                        <a className="p-2 select-none capitalize rounded cursor-pointer hover:bg-gray-600 hover:bg-opacity-25" >
                            home
                        </a>
                    </Link>
                    <div className="flex">
                        <button className="p-3 h-10 w-10 focus:outline-none rounded cursor-pointer hover:bg-gray-600 hover:bg-opacity-25"
                            onClick={() => isMounted &&
                                setTheme(theme === "light" ? "dark" : "light")}>
                            {
                                isMounted && theme === "light" ?
                                    <RiMoonFill /> :
                                    <RiSunFill />
                            }
                        </button>
                        <a href="/feed" target="_blank"
                            rel="noopener noreferrer nofollow"
                            className="p-3 h-10 w-10 rounded cursor-pointer hover:bg-gray-600 hover:bg-opacity-25">
                            <RiRssFill />
                        </a>
                    </div>
                </div>
            </nav>
            <div className="max-w-3xl mx-auto px-4">
                <header className="pb-8 mb-8 border-b dark:border-gray-700">
                    <h1 className="tracking-tight capitalize text-3xl md:text-5xl font-bold my-4">
                        {title}
                    </h1>
                    <p className="text-gray-700 dark:text-gray-300">
                        {subtitle}
                    </p>
                </header>
                <div className="pb-8 mb-8">
                    {children}
                </div>
            </div>
        </>
    );
};

export default Layout;
