import PageTitle from "../components/molecules/page-title";
import BlogTemplate from "../components/templates/blog-template";

const NotFound = () => (
    <BlogTemplate
        title="404 - Not Found"
        description="Not Found"
        canonical="404"
    >
        <div className="flex max-h-full min-h-[16rem] flex-col">
            <div className="m-auto flex items-center justify-center gap-4 text-base lg:text-2xl">
                <h1>404</h1>
                <h2 className="border-l-2 border-solid pl-4">
                    This page could not be found
                </h2>
            </div>
        </div>
    </BlogTemplate>
);

export default NotFound;
