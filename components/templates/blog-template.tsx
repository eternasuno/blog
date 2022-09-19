import BLOG from "../../blog.config";
import Container from "../atoms/container";
import Footer from "../organisms/footer";
import Header from "../organisms/header";
import Meta from "../organisms/meta";

type Props = {
    title?: string;
    canonical?: string;
    description?: string;
    children: React.ReactNode;
};

const BlogTemplate = ({
    title = BLOG.title,
    description = BLOG.description,
    canonical,
    children
}: Props) => {
    return (
        <Container className="flex min-h-screen flex-col flex-nowrap justify-between space-y-12">
            <Meta
                title={title}
                description={description}
                domain={BLOG.domain}
                canonical={`${BLOG.domain}/${canonical}`}
            />
            <Header
                title={BLOG.title}
                navItems={BLOG.routers}
                description={canonical ? undefined : BLOG.description}
            />
            <div className="grow lg:mx-8">{children}</div>
            <Footer author={BLOG.author} since={BLOG.since} />
        </Container>
    );
};

export default BlogTemplate;
