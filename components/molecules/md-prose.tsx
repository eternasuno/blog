import Image from 'next/image';
import type { ComponentProps } from 'react';
import Markdown from 'react-markdown';
import rehypeKatex from 'rehype-katex';
import remarkGfm from 'remark-gfm';
import remarkMath from 'remark-math';
import Code from '../atoms/code';
import Figure from '../atoms/figure';
import Link from '../atoms/link';
import Prose from '../atoms/prose';

type Props = Omit<ComponentProps<typeof Prose>, 'asChild' | 'children'> & {
  markdown: string;
};

const MDProse = async ({ markdown, ...rest }: Props) => {
  return (
    <Prose {...rest}>
      <Markdown
        components={{
          a: ({ children, href, ...rest }) =>
            href ? (
              <Link {...rest} $external={/^https?:\/\//.test(href)} href={href}>
                {children}
              </Link>
            ) : (
              <>{children}</>
            ),
          code: ({ children, className, ...rest }) => {
            const match = /language-(\w+)/.exec(className || '');

            return match ? (
              <Code
                code={String(children).replace(/\n$/, '')}
                lang={match[1].toLowerCase()}
                theme="github-light"
                darkTheme="one-dark-pro"
              />
            ) : (
              <code {...rest} className={className}>
                {children}
              </code>
            );
          },
          img: ({ src, alt, title }) =>
            src ? <Figure alt={alt || 'img'} src={src} title={title} /> : <></>,
          p: ({ children, node, ...rest }) =>
            node?.children.find((ele) => ele.type === 'element' && ele.tagName === 'img') ? (
              <>{children}</>
            ) : (
              <p {...rest}>{children}</p>
            ),
          pre: ({ children }) => <>{children}</>,
        }}
        remarkPlugins={[[remarkGfm, { singleTilde: false }], remarkMath]}
        rehypePlugins={[[rehypeKatex, { output: 'mathml' }]]}
        urlTransform={(url) => (url.startsWith('/public') ? url.slice(7) : url)}>
        {markdown}
      </Markdown>
    </Prose>
  );
};

export default MDProse;
