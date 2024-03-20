import type { Element, Text } from 'hast';
import rehypeKatex from 'rehype-katex';
import rehypeRewrite from 'rehype-rewrite';
import rehypeStringify from 'rehype-stringify';
import remarkGfm from 'remark-gfm';
import remarkMath from 'remark-math';
import remarkParse from 'remark-parse';
import remarkRehype from 'remark-rehype';
import { unified } from 'unified';
import { BASE_URL } from './config';

export const createBaseProcessor = () =>
  unified()
    .use(remarkParse)
    .use(remarkGfm, { singleTilde: false })
    .use(remarkMath)
    .use(remarkRehype)
    .use(rehypeKatex, { output: 'mathml' });

export const renderToHtml = async (markdown: string) =>
  String(
    await createBaseProcessor()
      .use(rehypeRewrite, {
        rewrite: (node) => {
          if (node.type !== 'element') {
            return;
          }

          switch (node.tagName) {
            case 'a':
              return rewriteAnchor(node);
            case 'code':
              return rewriteCode(node);
            case 'img':
              return rewriteImg(node);
            default:
              return;
          }
        },
        selector: 'a,img,pre>code',
      })
      .use(rehypeStringify)
      .process(markdown),
  );

const rewriteAnchor = (node: Element) => {
  const { properties } = node;
  const { href } = properties;
  if (typeof href !== 'string') {
    return;
  }

  properties.referrerpolicy = 'no-referrer';
  properties.rel = 'noopener';
  properties.target = '_blank';
  properties.href = new URL(href, BASE_URL).toString();
};

const rewriteImg = (node: Element) => {
  const { properties } = node;
  const { src } = properties;
  if (typeof src !== 'string') {
    return;
  }

  properties.src = new URL(src.replace(/^\/public/, ''), BASE_URL).toString();
};

const rewriteCode = async (node: Element) => {
  const { children, properties } = node;
  const text = children.find(({ type }) => type === 'text');
  if (!text) {
    return;
  }

  properties.style = 'white-space: pre-wrap;overflow-wrap: break-word;';
  const { value: code } = text as Text;
  node.children = code
    .split('\n')
    .map(
      (value) =>
        ({ children: [{ type: 'text', value }], tagName: 'div', type: 'element' }) as Element,
    );
};
