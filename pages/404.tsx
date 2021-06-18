import React from "react";
import BlogTitle from "../components/organisms/blog-title";
import Meta from "../components/organisms/meta";
import BlogTemplate from "../components/templates/blog-template";

const NotFound = () => (
    <>
        <Meta title="404 - Not Found" canonical="404" />
        <BlogTemplate header={
            <BlogTitle title="404 - Not Found" subTitle="Sorry, the page does not exist!" />
        }
            content={<></>}
        />
    </>
);

export default NotFound;
