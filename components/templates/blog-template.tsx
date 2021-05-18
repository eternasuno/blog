import React from "react";
import Container from "../atoms/container";
import StickyHeader from "../molecules/sticky-header";

type Props = {
    nav: React.ReactNode;
    header: React.ReactNode;
    content: React.ReactNode;
};

const BlogTemplate = ({ nav, header, content }: Props) => {
    return (
        <>
            <StickyHeader>
                {nav}
            </StickyHeader>
            <Container className="divide-y divide-gray-200 dark:divide-gray-700">
                {header}
                {content}
            </Container>
        </>
    );
};

export default BlogTemplate;