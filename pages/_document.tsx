import Document, { Head, Html, Main, NextScript } from "next/document";
import React from "react";

export default class MyDocument extends Document {
    render() {
        return (
            <Html lang="zh-cmn-Hans">
                <Head />
                <body className="nightwind min-h-screen">
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}