import { ThemeProvider } from "next-themes";
import { AppProps } from "next/app";
import React from "react";
import "../styles/index.css";
import "../styles/notion.css";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider
      attribute="class"
      storageKey="nightwind-mode"
      defaultTheme="system" // default "light"
    >
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

