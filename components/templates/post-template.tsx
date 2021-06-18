import React from "react";
import Container from "../atoms/container";
import StickyHeader from "../organisms/sticky-header";

type Props = {
    header: React.ReactNode;
    content: React.ReactNode;
    pagination: React.ReactNode;
};

const PostTemplate = ({ header, content, pagination }: Props) => {
    return (
        <>
            <StickyHeader />
            <Container
                className="grid grid-flow-row-dense xl:grid-cols-4 divide-y divide-gray-200">
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