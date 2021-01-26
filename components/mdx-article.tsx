import hydrate from "next-mdx-remote/hydrate";
import React from 'react';
import { hydrateOptions } from "../lib/mdx";
import Article from "./ui/article";

type Props = {
    content: any;
};

export const MDXArticle = ({ content }: Props) => (
    <Article>
        {hydrate(content, hydrateOptions)}
    </Article>
);