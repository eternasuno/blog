import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus as style } from 'react-syntax-highlighter/dist/cjs/styles/prism';

type Props = {
    code: string;
    language: string;
};

const Code = ({ code, language }: Props) => {
    language = language.toLowerCase();

    return (
        <SyntaxHighlighter language={language}
            style={style}
            showLineNumbers wrapLongLines >
            {code}
        </SyntaxHighlighter>
    );
};

export default Code;