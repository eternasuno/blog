import Document, { Head, Html, Main, NextScript } from "next/document";

export default class MyDocument extends Document {
    render() {
        return (
            <Html lang="en">
                <Head />
                <body className="dark:bg-[#282b34] dark:text-slate-200">
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}
