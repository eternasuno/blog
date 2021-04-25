import "katex/dist/katex.min.css";
import { useTheme } from "next-themes";
import React, { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import rehypeKatex from 'rehype-katex';
import gfm from 'remark-gfm';
import remarkMath from 'remark-math';
import Article from "./ui/article";
import Code from "./ui/code";
import Img from "./ui/img";

const components = {
    img: ({ src, alt, title }: any) =>
        <Img src={src} alt={alt} title={title} />,
    pre: ({ children }: any) => <>{children}</>,
    code: ({ className, children, inline }: any) => {
        if (inline) {
            return (<code>{children}</code>);
        }

        const { theme } = useTheme();
        const [isMounted, setIsMounted] = useState(false);
        useEffect(() => {
            setIsMounted(true);
        }, []);

        const language = className?.match(/language-(\w+)/)[1];
        return (
            <Code value={String(children).replace(/\n$/, '')}
                language={language}
                darkMode={isMounted && theme === "dark"} />
        );
    }
};

type Props = {
    content: string;
};

const MDArticle = ({ content }: Props) => (
    <Article>
        <ReactMarkdown
            remarkPlugins={[remarkMath, gfm]}
            rehypePlugins={[rehypeKatex]}
            components={components}>
            {content}
        </ReactMarkdown>
    </Article>
);

export default MDArticle;