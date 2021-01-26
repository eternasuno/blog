import cn from 'classnames';
import Highlight, { defaultProps, Language } from 'prism-react-renderer';
import github from 'prism-react-renderer/themes/github';
import vsDark from 'prism-react-renderer/themes/vsDark';
import React from 'react';

type Props = {
    code: string;
    language: string;
    darkMode?: boolean;
};

const Code = ({ code, language, darkMode = false }: Props) => (
    <Highlight {...defaultProps} theme={darkMode ? vsDark : github}
        code={code.trim()} language={language as Language}>
        {({ className, style, tokens, getLineProps, getTokenProps }) => (
            <pre className={className} style={style}>
                <code className="table">
                    {
                        tokens.map((line, i) => {
                            const { className, ...props } = getLineProps({ line, key: i });
                            return (
                                <div {...props} key={i}
                                    className={cn("table-row", className)}>
                                    <span className="table-cell text-right pr-4 select-none opacity-50">
                                        {i + 1}
                                    </span>
                                    <span className="table-cell">
                                        {
                                            line.map((token, key) => (
                                                <span key={key}
                                                    {...getTokenProps({ token, key })} />
                                            ))
                                        }
                                    </span>
                                </div>
                            );
                        })
                    }
                </code>
            </pre>
        )}
    </Highlight>
);

export default Code;