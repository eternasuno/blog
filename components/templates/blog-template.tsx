import BLOG from "../../blog.config";
import Container from "../atoms/container";
import Meta from "../organisms/meta";
import StickyHeader from "../organisms/sticky-header";

type Props = {
    title: string;
    canonical: string;
    description?: string;
    children: React.ReactNode;
};

const BlogTemplate = ({ title, description, canonical, children }: Props) => {
    return (
        <>
            <Meta
                title={title}
                description={description}
                domain={BLOG.domain}
                canonical={`${BLOG.domain}/${canonical}`}
            />
            <StickyHeader />
            <Container>{children}</Container>
        </>
    );
};

export default BlogTemplate;
