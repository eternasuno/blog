import React from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vs as light, vscDarkPlus as dark } from "react-syntax-highlighter/dist/cjs/styles/prism";

type Props = {
    value: string;
    language?: string;
    darkMode?: boolean;
};

const Code = ({ value, language = "", darkMode = false }: Props) => {
    return (
        <SyntaxHighlighter
            language={language}
            style={darkMode ? dark : light}
            showLineNumbers={true}
            wrapLongLines={true}>
            {value}
        </SyntaxHighlighter>
    );
};

export default Code;