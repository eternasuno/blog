import { useTheme } from "next-themes";
import Highlight, { Language, Prism } from "prism-react-renderer";
import dark from "prism-react-renderer/themes/vsDark";
import light from "prism-react-renderer/themes/vsLight";

type Props = {
    code: string;
    language: string;
};

const Code = ({ code, language }: Props) => {
    const { theme } = useTheme();
    return (
        <Highlight
            {...{ Prism, code }}
            theme={theme == "light" ? light : dark}
            language={language.toLowerCase() as Language}>
            {({ style, tokens, getLineProps, getTokenProps }) => (
                <pre
                    style={{
                        tabSize: 4,
                        whiteSpace: "pre-wrap",
                        wordBreak: "break-word",
                        ...style,
                    }}>
                    <code>
                        {tokens.map((line, i) => (
                            <p
                                key={i}
                                {...getLineProps({ line, key: i })}
                                className="table-row">
                                <span
                                    className="table-cell min-w-[3em] select-none
                             pr-4 text-right opacity-50">
                                    {i + 1}
                                </span>
                                <span className="table-cell">
                                    {line.map((token, key) => (
                                        <span
                                            key={key}
                                            {...getTokenProps({ token, key })}
                                        />
                                    ))}
                                </span>
                            </p>
                        ))}
                    </code>
                </pre>
            )}
        </Highlight>
    );
};

export default Code;
