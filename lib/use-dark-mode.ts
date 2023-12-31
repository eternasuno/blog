import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

const useDarkMode = () => {
  const [isMounted, setIsMounted] = useState(false);
  const { theme, systemTheme, setTheme } = useTheme();

  useEffect(() => setIsMounted(true), []);

  const isDarkMode =
    (isMounted && theme === 'dark') ||
    (theme === 'system' && systemTheme === 'dark');

  const toggle = () => {
    if (isMounted) {
      setTheme(isDarkMode ? 'light' : 'dark');
    }
  };

  return { isDarkMode, toggle };
};

export default useDarkMode;
