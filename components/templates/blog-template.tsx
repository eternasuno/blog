import BLOG from "../../lib/config";
import Footer from "../organisms/footer";
import Header from "../organisms/header";
import Main from "../organisms/main";
import Meta from "../organisms/meta";

type Props = {
    title?: string;
    canonical?: string;
    description?: string;
    children?: React.ReactNode;
};

const BlogTemplate = ({
    title = BLOG.title,
    description = BLOG.description,
    canonical = "",
    children
}: Props) => {
    return (
        <div className="flex min-h-screen max-w-full flex-col justify-between dark:bg-[#282b34] dark:text-slate-200">
            <Meta
                title={title}
                description={description}
                domain={BLOG.domain}
                canonical={`${BLOG.domain}/${canonical}`}
            />
            <Header routes={BLOG.routers} />
            <Main title={title} className="grow">
                {children}
            </Main>
            <Footer author={BLOG.author} since={BLOG.since} className="mt-8" />
        </div>
    );
};

export default BlogTemplate;
