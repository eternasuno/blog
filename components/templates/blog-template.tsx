import BLOG from "../../lib/config";
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
        <Container className="flex min-h-screen flex-col flex-nowrap justify-between gap-16">
            <Meta
                title={title}
                description={description}
                domain={BLOG.domain}
                canonical={`${BLOG.domain}/${canonical}`}
            />
            <Header title={BLOG.title} navItems={BLOG.routers} />
            <main className="grow lg:mx-16">{children}</main>
            <Footer author={BLOG.author} since={BLOG.since} />
        </Container>
    );
};

export default BlogTemplate;
