import Highlight, { defaultProps, Language } from "prism-react-renderer";
import dark from "prism-react-renderer/themes/vsDark";

type Props = {
    code: string;
    language: string;
};

const Code = ({ code, language }: Props) => {
    language = language.toLowerCase();

    return (
        <Highlight {...defaultProps} theme={dark} code={code} language={language as Language}>
            {({ style, tokens, getLineProps, getTokenProps }) => (
                <pre className={"text-left mx-4 my-0 p-2"}
                    style={style}>
                    {tokens.map((line, i) => (
                        <div key={i} {...getLineProps({ line, key: i })} className="table-row">
                            <span className="table-cell text-right pr-4
                             select-none opacity-50">
                                {i + 1}
                            </span>
                            <span className="table-cell">
                                {line.map((token, key) => (
                                    <span key={key} {...getTokenProps({ token, key })} />
                                ))}
                            </span>
                        </div>
                    ))}
                </pre>
            )}
        </Highlight>
    );
};

export default Code;