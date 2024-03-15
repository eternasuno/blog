// import type { Element } from 'hast';
// import rehypeMathjax from 'rehype-mathjax/svg';
// import rehypePrettyCode from 'rehype-pretty-code';
// import rehypeRewrite from 'rehype-rewrite';
// import rehypeStringify from 'rehype-stringify';
// import remarkGfm from 'remark-gfm';
// import remarkMath from 'remark-math';
// import remarkParse from 'remark-parse';
// import remarkRehype from 'remark-rehype';
// import { unified } from 'unified';
// import { getCDNUrl } from './github';

// const absolute = (url: string) => /^https?:\/\//.test(url);

// const rewriteAnchor = (node: Element) => {
//   const url = String(node.properties.href);
//   if (absolute(url)) {
//     node.properties.referrerpolicy = 'no-referrer';
//     node.properties.rel = 'noopener';
//     node.properties.target = '_blank';
//   }
// };

// const rewriteImg = (node: Element, parent: Element) => {
//   const src = String(node.properties.src);
//   const url = absolute(src) ? src : getCDNUrl(src);
//   const children = parent.children.filter((child) => child !== node);

//   children.push(
//     {
//       children: [node],
//       properties: {
//         href: url,
//         referrerpolicy: 'no-referrer',
//         rel: 'noopener',
//         target: '_blank',
//       },
//       tagName: 'a',
//       type: 'element',
//     },
//     {
//       type: 'text',
//       value: String(node.properties.alt || ''),
//     },
//   );

//   parent.children = children;
//   parent.properties.style = `text-align: center;${parent.properties.style}`;
//   node.properties.src = url;
//   node.properties.style = `margin-bottom: 0;${node.properties.style}`;
// };

// const rewriteSvg = (node: Element, parent: Element) => {
//   if (parent.tagName === 'mjx-container') {
//     const style = node.properties.style;
//     node.properties.style = `display: inline-block;${style}`;
//   }
// };

// export const processor = unified()
//   .use(remarkParse)
//   .use(remarkGfm, { singleTilde: false })
//   .use(remarkMath)
//   .use(remarkRehype)
//   .use(rehypeMathjax)
//   .use(rehypePrettyCode, {
//     defaultLang: 'plaintext',
//     keepBackground: false,
//     theme: {
//       dark: 'one-dark-pro',
//       light: 'github-light',
//     },
//   })
//   .use(rehypeRewrite, {
//     rewrite: (node, _, parent) => {
//       if (node.type !== 'element' || parent?.type !== 'element') {
//         return;
//       }

//       switch (node.tagName) {
//         case 'a':
//           rewriteAnchor(node);
//           break;
//         case 'img':
//           rewriteImg(node, parent);
//           break;
//         case 'svg':
//           rewriteSvg(node, parent);
//           break;
//         default:
//           break;
//       }
//     },
//     selector: 'a,img,svg',
//   })
//   .use(rehypeStringify);

// export const renderToHtml = async (markdown: string) =>
//   String(await processor.process(markdown));
