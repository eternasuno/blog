import rehypeUrlInspector from '@jsdevtools/rehype-url-inspector';
import rehypeMathjax from 'rehype-mathjax';
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
    .use(rehypeMathjax)
    .use(rehypePrettyCode, {
        defaultLang: 'plaintext',
        theme: 'css-variables',
    })
    .use(rehypeStringify);

export const renderToHtml = async (markdown: string) =>
    String(await processor.process(markdown));
