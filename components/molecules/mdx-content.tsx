import { getMDXComponent } from "mdx-bundler/client";
import dynamic from "next/dynamic";
import { ReactElement, useMemo } from "react";
import Prose from "../atoms/prose";

const Code = dynamic(async () => await import("./code"), { ssr: false });

const Image = dynamic(async () => await import("../atoms/responsive-img"), {
    ssr: false
});

const PhotoProvider = dynamic(
    async () => (await import("react-photo-view")).PhotoProvider,
    { ssr: false }
);

const PhotoView = dynamic(
    async () => (await import("react-photo-view")).PhotoView,
    { ssr: false }
);

type Props = {
    content: string;
    className?: string;
};

const MDXContent = ({ content, className }: Props) => {
    const MDXComponent = useMemo(() => getMDXComponent(content), [content]);

    return (
        <Prose className={className}>
            <PhotoProvider>
                <MDXComponent
                    components={{
                        pre: ({ children }) => {
                            const codeElement = children as ReactElement;
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
                                return (
                                    <PhotoView src={src}>
                                        <span>
                                            <Image
                                                width={16}
                                                height={9}
                                                src={src}
                                                alt={alt}
                                                title={title}
                                            />
                                        </span>
                                    </PhotoView>
                                );
                            } else {
                                return <></>;
                            }
                        }
                    }}
                />
            </PhotoProvider>
        </Prose>
    );
};

export default MDXContent;
