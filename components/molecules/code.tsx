import Highlight, { Language, Prism } from "prism-react-renderer";
import dark from "prism-react-renderer/themes/vsDark";

type Props = {
    code: string;
    language: string;
};

const Code = ({ code, language }: Props) => {
    return (
        <Highlight Prism={Prism} code={code}
            theme={dark}
            language={language.toLowerCase() as Language}>
            {({ style, tokens, getLineProps, getTokenProps }) => (
                <pre
                    style={{ tabSize: 4, whiteSpace: "pre-wrap", wordBreak: "break-word", ...style }}>
                    {tokens.map((line, i) => (
                        <div key={i} {...getLineProps({ line, key: i })} className="table-row">
                            <span className="table-cell text-right pr-4
                             select-none opacity-50 min-w-[3em]">
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