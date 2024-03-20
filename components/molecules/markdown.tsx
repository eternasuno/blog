import { createBaseProcessor } from '@/libs/markdown';
import { Fragment, jsx, jsxs } from 'react/jsx-runtime';
import rehypeReact from 'rehype-react';
import Code from '../atoms/code';
import Image from '../atoms/image';
import Link from '../atoms/link';

const Markdown = async ({ markdown }: { markdown: string }) =>
  (
    await createBaseProcessor()
      // @ts-ignore
      .use(rehypeReact, {
        components: {
          a: ({ children, href, ...rest }) =>
            href ? (
              <Link {...rest} $external={/^https?:\/\//.test(href)} href={href}>
                {children}
              </Link>
            ) : (
              <>{children}</>
            ),
          code: ({ children, className, ...rest }) => {
            const match = /language-(\w+)/.exec(String(className).toLowerCase());

            return match ? (
              <Code
                code={String(children).replace(/\n$/, '')}
                lang={match[1]}
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
            src ? (
              <Link $external href={src.replace(/^\/public/, '')}>
                <Image alt={alt || 'img'} src={src.replace(/^\/public/, '')} title={title} />
                <span className="block text-center text-base-content/50">{title}</span>
              </Link>
            ) : (
              <></>
            ),
          pre: ({ children }) => <>{children}</>,
        },
        Fragment,
        jsx,
        jsxs,
      })
      .process(markdown)
  ).result;

export default Markdown;
