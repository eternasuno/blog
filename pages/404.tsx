import Capitalize from "../components/atoms/capitalize";
import BlogTemplate from "../components/templates/blog-template";

const NotFound = () => (
    <BlogTemplate
        title="404 - Not Found"
        description="Not Found"
        canonical="404"
    >
        <div className="absolute top-0 left-0 z-10 flex h-screen w-screen flex-col">
            <h1 className="m-auto select-none text-4xl font-bold lg:text-6xl">
                <Capitalize className="space-x-4">
                    <span>404</span>
                    <span>|</span>
                    <span>Not Found</span>
                </Capitalize>
            </h1>
        </div>
    </BlogTemplate>
);

export default NotFound;
