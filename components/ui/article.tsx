import cn from "classnames";
import React from "react";

type Props = {
    className?: string;
    children: React.ReactNode;
};

const Article = ({ children, className }: Props) => (
    <article className={cn("prose dark:prose-dark max-w-none", className)}>
        {children}
    </article>
);

export default Article;