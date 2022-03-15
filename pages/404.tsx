import BlogTitle from "../components/organisms/blog-title";
import BlogTemplate from "../components/templates/blog-template";

const NotFound = () => (
    <BlogTemplate
        title="404 - Not Found"
        description="Not Found"
        canonical="404">
        <BlogTitle
            title="404 - Not Found"
            description="Sorry, the page does not exist!"
        />
    </BlogTemplate>
);

export default NotFound;
