import Tex from "@matejmazur/react-katex";
import "katex/dist/katex.min.css";
import { useTheme } from "next-themes";
import React from "react";
import ReactMarkdown from "react-markdown";
import math from "remark-math";
import Article from "./ui/article";
import Code from "./ui/code";
import Img from "./ui/img";

const renderers = {
    inlineMath: ({ value }: any) => <Tex math={value} />,
    math: ({ value }: any) => <Tex block math={value} />,
    image: ({ src, alt, title }: any) => {
        const { theme } = useTheme();

        return (
            <Img src={src} alt={alt} title={title}
                darkMode={theme === "dark"} />
        );
    },
    code: ({ value, language }: any) => {
        const { theme } = useTheme();

        return (
            <Code value={value}
                language={language}
                darkMode={theme === "dark"} />
        );
    }
};

type Props = {
    content: string;
};

export const MDArticle = ({ content }: Props) => (
    <Article>
        <ReactMarkdown plugins={[math]} renderers={renderers}>
            {content}
        </ReactMarkdown>
    </Article>
);