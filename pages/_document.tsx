import Document, { Head, Html, Main, NextScript } from "next/document";
import React from "react";

export default class MyDocument extends Document {
    render() {
        return (
            <Html lang="zh-cmn-Hans">
                <Head />
                <body className="nightwind bg-gray-50 text-gray-900 min-h-screen">
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}