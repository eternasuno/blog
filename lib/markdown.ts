import rehypeUrlInspector from '@jsdevtools/rehype-url-inspector';
import rehypeMathjax from 'rehype-mathjax/chtml';
import rehypePrettyCode from 'rehype-pretty-code';
import rehypeStringify from 'rehype-stringify';
import rehypeTitleFigure from 'rehype-title-figure';
import remarkGfm from 'remark-gfm';
import remarkMath from 'remark-math';
import remarkParse from 'remark-parse';
import remarkRehype from 'remark-rehype';
import { unified } from 'unified';
import { getCDNUrl } from './github';

const absolute = (url: string) => /^https?:\/\//.test(url);

const processor = unified()
    .use(remarkParse)
    .use(remarkGfm, { singleTilde: false })
    .use(remarkMath)
    .use(remarkRehype)
    .use(rehypeUrlInspector, {
        inspectEach: ({ url, propertyName, node }) => {
            switch (node.tagName) {
                case 'img':
                    if (!absolute(url)) {
                        node.properties![propertyName!] = getCDNUrl(url);
                    }
                    break;
                case 'a':
                    if (absolute(url)) {
                        node.properties!['referrerpolicy'] = 'no-referrer';
                        node.properties!['rel'] = 'noopener';
                        node.properties!['target'] = '_blank';
                    }
                    break;
                default:
                    break;
            }
        },
    })
    .use(rehypeTitleFigure)
    .use(rehypeMathjax, {
        chtml: {
            fontURL:
                'https://cdn.jsdelivr.net/npm/mathjax@3/es5/output/chtml/fonts/woff-v2',
        },
    })
    .use(rehypePrettyCode, {
        defaultLang: 'plaintext',
        theme: 'css-variables',
    })
    .use(rehypeStringify);

const style = `
<style>
    pre {
        --shiki-color-background: hsl(230, 1%, 98%);
        --shiki-color-text: hsl(344, 84%, 43%);
        --shiki-token-comment: hsl(230, 6%, 44%);
        --shiki-token-constant: hsl(35, 99%, 40%);
        --shiki-token-function: hsl(221, 87%, 60%);
        --shiki-token-keyword: hsl(301, 63%, 40%);
        --shiki-token-link: hsl(198, 99%, 37%);
        --shiki-token-parameter: hsl(344, 84%, 43%);
        --shiki-token-punctuation: hsl(230, 8%, 24%);
        --shiki-token-string-expression: hsl(119, 34%, 47%);
        --shiki-token-string: hsl(119, 34%, 47%);

        counter-reset: line;
        direction: ltr;
        tab-size: 4;
        text-align: left;
    }

    [data-theme='dark'] pre {
        --shiki-color-background: hsl(220, 13%, 18%);
        --shiki-color-text: hsl(35, 91%, 63%);
        --shiki-token-comment: hsl(23, 13%, 80%);
        --shiki-token-constant: hsl(39, 67%, 69%);
        --shiki-token-function: hsl(207, 82%, 66%);
        --shiki-token-keyword: hsl(286, 60%, 67%);
        --shiki-token-link: hsl(187, 47%, 55%);
        --shiki-token-parameter: hsl(35, 91%, 63%);
        --shiki-token-punctuation: hsl(220, 14%, 71%);
        --shiki-token-string-expression: hsl(95, 38%, 62%);
        --shiki-token-string: hsl(95, 38%, 62%);
    }

    pre > code > *::before {
        color: var(--shiki-token-comment);
        content: counter(line);
        counter-increment: line;
        display: inline-block;
        margin-right: 1rem;
        min-width: 1rem;
        opacity: 0.7;
        text-align: right;
    }

    figure > img {
        width: 100%;
    }

    figure > figcaption {
        text-align: center;
    }
</style>`;

export const renderToHtml = async (markdown: string) => {
    const html = String(await processor.process(markdown));

    return `${html}${style}`;
};
