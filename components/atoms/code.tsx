import { randomUUID } from 'node:crypto';
import { compose } from '@/libs/twc';
import type { CSSProperties } from 'react';
import { type BundledLanguage, type BundledTheme, codeToTokens } from 'shiki';

type Props = {
  className?: string;
  code: string;
  darkTheme?: BundledTheme;
  lang?: string;
  theme: BundledTheme;
};

const Code = async ({ className, code, darkTheme, lang, theme }: Props) => {
  const { tokens: lines, rootStyle } = await codeToTokens(code, {
    lang: (lang || 'text') as BundledLanguage,
    themes: {
      light: theme,
      dark: darkTheme || theme,
    },
    defaultColor: false,
  });

  return (
    <pre
      className={compose(
        'whitespace-pre-wrap break-words bg-[--shiki-light-bg] text-[--shiki-light] dark:bg-[--shiki-dark-bg] dark:text-[--shiki-dark]',
        className,
      )}
      data-language={lang}
      style={string2Style(rootStyle)}>
      <code>
        {lines.map((tokens, index) => (
          <div
            className="before:mr-4 before:inline-block before:w-[3ch] before:text-end before:text-neutral/70 before:content-[attr(data-line)]"
            data-line={index + 1}
            key={randomUUID()}>
            {tokens.map((token) => (
              <span
                className="text-[--shiki-light] dark:text-[--shiki-dark]"
                key={randomUUID()}
                style={string2Style(token.htmlStyle)}>
                {token.content}
              </span>
            ))}
          </div>
        ))}
      </code>
    </pre>
  );
};

const string2Style = (str?: string): CSSProperties | undefined =>
  str?.split(';').reduce(
    (style, item) => {
      const [key, value] = item.split(':', 2);
      style[key?.trim()] = value?.trim();

      return style;
    },
    {} as { [key: string]: string },
  );

export default Code;
