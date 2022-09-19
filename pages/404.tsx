import PageTitle from "../components/molecules/page-title";
import BlogTemplate from "../components/templates/blog-template";

const NotFound = () => (
    <BlogTemplate
        title="404 - Not Found"
        description="Not Found"
        canonical="404"
    >
        <PageTitle>Page Not Found</PageTitle>
    </BlogTemplate>
);

export default NotFound;
