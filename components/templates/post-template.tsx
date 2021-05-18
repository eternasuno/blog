import React from "react";
import Container from "../atoms/container";
import StickyHeader from "../molecules/sticky-header";

type Props = {
    nav: React.ReactNode;
    header: React.ReactNode;
    content: React.ReactNode;
    pagination: React.ReactNode;
};

const PostTemplate = ({ nav, header, content, pagination }: Props) => {
    return (
        <>
            <StickyHeader>
                {nav}
            </StickyHeader>
            <Container
                className="grid grid-flow-row-dense xl:grid-cols-4 divide-y divide-gray-200 dark:divide-gray-700">
                <div className="xl:col-span-full">
                    {header}
                </div>
                <div className="xl:col-span-3 xl:col-start-2">
                    {content}
                </div>
                <div>
                    {pagination}
                </div>
            </Container>
        </>
    );
};

export default PostTemplate;