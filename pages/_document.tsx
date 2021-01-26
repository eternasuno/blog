import Document, { Head, Html, Main, NextScript } from "next/document";
import React from "react";

export default class MyDocument extends Document {
    render() {
        return (
            <Html>
                <Head />
                <body className="bg-gray-100 dark:bg-dark text-gray-700 dark:text-gray-300">
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}