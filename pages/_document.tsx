import Document, { Head, Html, Main, NextScript } from "next/document";

export default class MyDocument extends Document {
    render() {
        return (
            <Html lang="zh-cmn-Hans">
                <Head />
                <body className="min-h-screen   dark:bg-slate-900 dark:text-white">
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}
