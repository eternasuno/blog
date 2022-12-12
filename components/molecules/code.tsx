import { useTheme } from "next-themes";
import Highlight, { Language, Prism } from "prism-react-renderer";
import dark from "prism-react-renderer/themes/vsDark";
import light from "prism-react-renderer/themes/vsLight";

// @ts-ignore
(typeof global !== "undefined" ? global : window).Prism = Prism;
require("prismjs/components/prism-php");

type Props = {
    code: string;
    language: string;
};

const Code = ({ code, language }: Props) => {
    const { theme } = useTheme();
    return (
        <Highlight
            code={code}
            Prism={Prism}
            theme={theme == "light" ? light : dark}
            language={language.toLowerCase() as Language}
        >
            {({ className, style, tokens, getLineProps, getTokenProps }) => (
                <pre
                    style={{
                        tabSize: 4,
                        whiteSpace: "pre-wrap",
                        wordBreak: "break-word",
                        ...style
                    }}
                    className={className}
                >
                    <code className={className}>
                        {tokens.map((line, i) => (
                            <div {...getLineProps({ line, key: i })}>
                                {line.map((token, key) => (
                                    <span {...getTokenProps({ token, key })} />
                                ))}
                            </div>
                        ))}
                    </code>
                </pre>
            )}
        </Highlight>
    );
};

export default Code;
