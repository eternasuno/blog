import { ReactElement } from "react";
import ReactMarkdown from "react-markdown";
import { PhotoProvider, PhotoView } from "react-photo-view";
import rehypeKatex from "rehype-katex";
import remarkGfm from "remark-gfm";
import remarkMath from "remark-math";
import Prose from "../atoms/prose";
import ResponsiveImg from "../atoms/responsive-img";
import Code from "./code";

// const Code = dynamic(async () => await import("./code"), { ssr: false });

// const Image = dynamic(async () => await import("../atoms/responsive-img"), {
//     ssr: false,
// });

// const PhotoProvider = dynamic(
//     async () => (await import("react-photo-view")).PhotoProvider,
//     { ssr: false }
// );

// const PhotoView = dynamic(
//     async () => (await import("react-photo-view")).PhotoView,
//     { ssr: false }
// );

type Props = {
    content: string;
    className?: string;
};

const MdContent = ({ content, className }: Props) => {
    return (
        <Prose className={className}>
            <PhotoProvider>
                <ReactMarkdown
                    components={{
                        pre: ({ children }) => {
                            const codeElement = children[0] as ReactElement;
                            const { className, children: code } =
                                codeElement.props;
                            const match = /language-(\w+)/.exec(
                                className || ""
                            );
                            return (
                                <Code
                                    language={match ? match[1] : "markup"}
                                    code={String(code).replace(/\n$/, "")}
                                />
                            );
                        },
                        img: ({ src, alt, title }) => {
                            if (src) {
                                const match = /..\/public(.+)/.exec(src);
                                const imgSrc = match ? match[1] : src;
                                return (
                                    <PhotoView src={imgSrc}>
                                        <span>
                                            <ResponsiveImg
                                                width={16}
                                                height={9}
                                                src={imgSrc}
                                                alt={alt}
                                                title={title}
                                            />
                                        </span>
                                    </PhotoView>
                                );
                            } else {
                                return <></>;
                            }
                        },
                    }}
                    remarkPlugins={[remarkGfm, remarkMath]}
                    rehypePlugins={[rehypeKatex]}>
                    {content}
                </ReactMarkdown>
            </PhotoProvider>
        </Prose>
    );
};

export default MdContent;
