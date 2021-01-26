import { useTheme } from "next-themes";
import React from 'react';
import Code from './ui/code';
import Img from "./ui/img";

type ImgProps = {
    alt: string;
    src: string;
    title?: string;
};

const MDXImg = (imgProps: ImgProps) => {
    const { theme } = useTheme();

    return (
        <Img {...imgProps} darkMode={theme === "dark"} />
    );
};

type CodeProps = {
    className?: string;
    children: string;
};

const MDXCode = ({ className, children }: CodeProps) => {
    const language = className?.match(/^language-(\w+)$/);
    const { theme } = useTheme();

    return (
        <Code code={children}
            language={language ? language[1] : ""}
            darkMode={theme === "dark"} />
    );
};

const MDXPre = ({ children }: any) => <>{children}</>;

const MDXComponents = {
    img: MDXImg,
    code: MDXCode,
    pre: MDXPre
};

export default MDXComponents;