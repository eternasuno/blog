import React from "react";
import Container from "../atoms/container";
import StickyHeader from "../organisms/sticky-header";

type Props = {
    header: React.ReactNode;
    content: React.ReactNode;
};

const BlogTemplate = ({ header, content }: Props) => {
    return (
        <>
            <StickyHeader />
            <Container className="divide-y divide-gray-200">
                {header}
                {content}
            </Container>
        </>
    );
};

export default BlogTemplate;