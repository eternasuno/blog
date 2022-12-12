import dynamic from "next/dynamic";
import { createElement, Fragment, useEffect, useState } from "react";
import rehypeReact from "rehype-react";
import { process } from "../../lib/markdown";
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
    markdown: string;
    className?: string;
};

const MDContent = ({ markdown, className }: Props) => {
    const content = useProcessor(markdown);

    return (
        <Prose className={className}>
            <PhotoProvider>{content}</PhotoProvider>
        </Prose>
    );
};

export default MDContent;

const useProcessor = (markdown: string) => {
    const [Content, setContent] = useState(Fragment as any);

    useEffect(() => {
        process()
            .use(rehypeReact, {
                createElement,
                Fragment,
                components: {
                    pre: Pre,
                    img: Img
                }
            })
            .process(markdown)
            .then(file => {
                setContent(file.result);
            });
    }, [markdown]);

    return Content;
};

const Pre = ({ children }: any) => {
    const { className, children: code } = children[0].props;
    const match = /language-(\w+)/.exec(className || "");
    return (
        <Code
            language={match ? match[1] : "markup"}
            code={String(code).replace(/\n$/, "")}
        />
    );
};

const Img = ({ src, alt, title }: any) => {
    if (src) {
        return (
            <>
                <PhotoView src={src}>
                    <Image
                        width={16}
                        height={9}
                        src={src}
                        alt={alt}
                        title={title}
                    />
                </PhotoView>
                <span className="mb-8 mt-[-2rem] block text-center text-sm">
                    {title}
                </span>
            </>
        );
    } else {
        return <></>;
    }
};
