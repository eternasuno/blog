import rehypeUrlInspector from "@jsdevtools/rehype-url-inspector";
import rehypeMathjax from "rehype-mathjax";
import rehypeSanitize, { defaultSchema } from "rehype-sanitize";
import rehypeStringify from "rehype-stringify";
import remarkGfm from "remark-gfm";
import remarkMath from "remark-math";
import remarkParse from "remark-parse";
import remarkRehype from "remark-rehype";
import { unified } from "unified";
import BLOG from "./config";

export const process = () => {
    return unified()
        .use(remarkParse)
        .use(remarkGfm, { singleTilde: false })
        .use(remarkMath)
        .use(remarkRehype)
        .use(rehypeSanitize, {
            ...defaultSchema,
            attributes: {
                ...defaultSchema.attributes,
                div: [
                    ...(defaultSchema?.attributes?.div || []),
                    ["className", "math", "math-display"]
                ],
                span: [
                    ...(defaultSchema?.attributes?.span || []),
                    ["className", "math", "math-inline"]
                ],
                code: [...(defaultSchema?.attributes?.code || []), "className"]
            }
        })
        .use(rehypeUrlInspector, {
            inspectEach: ({ url, propertyName, node }) => {
                switch (node.tagName) {
                    case "img":
                        node.properties &&
                            propertyName &&
                            (node.properties[propertyName] = convert2CDN(url));
                        break;
                    case "a":
                        if (/^https?:\/\//.test(url)) {
                            node.properties!["target"] = "_blank";
                            node.properties!["rel"] = "noopener";
                        }
                        break;
                    default:
                        break;
                }
            }
        })
        .use(rehypeMathjax);
};

export const renderToHtml = async (markdown: string) => {
    const file = await process().use(rehypeStringify).process(markdown);

    return String(file);
};

const convert2CDN = (url: string) => {
    if (/^https?:\/\//.test(url)) {
        return url;
    }

    const { name, owner, branch } = BLOG.repository;
    return `https://cdn.jsdelivr.net/gh/${owner}/${name}@${branch}${url}`;
};
