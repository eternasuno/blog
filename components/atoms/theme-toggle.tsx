'use client';

import { useEffect, useState } from 'react';

type Props = { className: string; value?: string; defaultValue?: string };

const ThemeToggle = ({ className, value = 'dark', defaultValue = 'light' }: Props) => {
  const [theme, setTheme] = useState(defaultValue);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const defaultTheme = window.localStorage.getItem('theme') || defaultValue;
      setTheme(defaultTheme);
      document.documentElement.dataset.theme = defaultTheme;
    }
  }, [defaultValue]);

  return (
    <>
      <input
        checked={theme === value}
        className={className}
        onChange={({ currentTarget: { checked } }) => {
          const selectedTheme = checked ? value : defaultValue;
          setTheme(selectedTheme);
          window.localStorage.setItem('theme', selectedTheme);
          document.documentElement.dataset.theme = selectedTheme;
        }}
        type="checkbox"
        value={value}
      />
      <script
        // biome-ignore lint/security/noDangerouslySetInnerHtml: must run before mounted
        dangerouslySetInnerHTML={{
          __html: `document.documentElement.dataset.theme = window.localStorage.getItem("theme")||"${defaultValue}"`,
        }}
      />
    </>
  );
};

export default ThemeToggle;
