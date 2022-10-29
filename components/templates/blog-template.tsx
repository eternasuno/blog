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
    canonical = "",
    children
}: Props) => {
    return (
        <div className="flex min-h-screen max-w-full flex-col justify-between dark:bg-[#282b34] dark:text-zinc-200">
            <Meta
                title={title}
                description={description}
                domain={BLOG.domain}
                canonical={`${BLOG.domain}/${canonical}`}
            />
            <Header routes={BLOG.routers} />
            <main className="mb-8 grow sm:mb-16">
                <Container className="space-y-8 sm:space-y-16">
                    {children}
                </Container>
            </main>
            <Footer author={BLOG.author} since={BLOG.since} />
        </div>
    );
};

export default BlogTemplate;
