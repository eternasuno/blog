'use client';

import { ThemeProvider } from 'next-themes';

const Providers = ({ children }: { children: React.ReactNode }) => (
    <ThemeProvider>{children}</ThemeProvider>
);

export default Providers;
