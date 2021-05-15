import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { duotoneLight as light, duotoneSea as dark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import useDarkMode from '../../lib/hooks/useDarkMode';

type Props = {
    code: string;
    language: string;
};

const Code = ({ code, language }: Props) => {
    const { isDarkMode } = useDarkMode();
    return (
        <SyntaxHighlighter language={language.toLowerCase()}
            style={isDarkMode ? dark : light}
            showLineNumbers wrapLongLines >
            {code}
        </SyntaxHighlighter>
    );
};

export default Code;