import MDXComponents from "../components/mdx-components";

export const renderToStringOptions = {
    components: MDXComponents,
    mdxOptions: {
        remarkPlugins: [
            require('remark-math'),
            require('remark-slug')
        ],
        rehypePlugins: [
            require('rehype-katex')
        ]
    }
};

export const hydrateOptions = {
    components: MDXComponents
};