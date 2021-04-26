import "katex/dist/katex.min.css";
import React from "react";
import ReactMarkdown from "react-markdown";
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus as style } from "react-syntax-highlighter/dist/cjs/styles/prism";
import rehypeKatex from 'rehype-katex';
import gfm from 'remark-gfm';
import remarkMath from 'remark-math';

const components = {
    img: ({ src, alt, title }: any) => (
        <>
            <img src={src} alt={alt} className="dark:filter dark:brightness-90" />
            <span className="block text-center text-sm break-words">
                {title}
            </span>
        </>
    ),
    pre: ({ children }: any) => <>{children}</>,
    code: ({ className, children, inline }: any) => {
        if (inline) {
            return (<code>{children}</code>);
        }

        const value = String(children).replace(/\n$/, '');
        const language = className?.match(/language-(\w+)/)[1];
        return (
            <SyntaxHighlighter style={style}
                showLineNumbers language={language}>
                {value}
            </SyntaxHighlighter>
        );
    }
};

type Props = {
    content: string;
};

const MDContent = ({ content }: Props) => (
    <ReactMarkdown components={components}
        remarkPlugins={[remarkMath, gfm]}
        rehypePlugins={[rehypeKatex]}>
        {content}
    </ReactMarkdown>
);

export default MDContent;