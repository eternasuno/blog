import React from "react";
import BlogTitle from "../components/organisms/blog-title";
import Meta from "../components/organisms/meta";
import Nav from "../components/organisms/nav";
import BlogTemplate from "../components/templates/blog-template";

const NotFound = () => (
    <>
        <Meta title="404 - Not Found" canonical="404" />
        <BlogTemplate nav={<Nav />}
            header={<BlogTitle title="404 - Not Found" subTitle="Sorry, the page does not exist!" />}
            content={<></>}
        />
    </>
);

export default NotFound;
