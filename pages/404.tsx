import PageTitle from "../components/molecules/page-title";
import BlogTemplate from "../components/templates/blog-template";

const NotFound = () => (
    <BlogTemplate
        title="404 - Not Found"
        description="Not Found"
        canonical="404"
    >
        <div className="absolute top-0 left-0 -z-10 flex h-full w-full flex-col">
            <div className="m-auto flex select-none items-center justify-center gap-4 text-base lg:text-2xl">
                <h1>404</h1>
                <h2 className="border-l-2 border-solid pl-4">
                    This page could not be found
                </h2>
            </div>
        </div>
    </BlogTemplate>
);

export default NotFound;
