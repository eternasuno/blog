import { ThemeProvider } from "next-themes";
import { AppProps } from "next/app";
import "../styles/index.css";
import "katex/dist/katex.min.css";
import "react-photo-view/dist/react-photo-view.css";

export default function App({ Component, pageProps }: AppProps) {
    return (
        <ThemeProvider attribute="class">
            <Component {...pageProps} />
        </ThemeProvider>
    );
}
