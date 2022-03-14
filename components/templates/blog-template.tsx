import BLOG from "../../blog.config";
import Container from "../atoms/container";
import Meta from "../organisms/meta";
import StickyHeader from "../organisms/sticky-header";
import Title from "../organisms/title";

type Props = {
    title: string;
    canonical: string;
    dateTime?: string;
    description?: string;
    children?: React.ReactNode;
};

const BlogTemplate = ({
    title,
    description,
    dateTime,
    canonical,
    children
}: Props) => {
    return (
        <>
            <Meta
                title={title}
                description={description}
                domain={BLOG.domain}
                canonical={`${BLOG.domain}/${canonical}`}
            />
            <StickyHeader />
            <Container>
                <Title
                    title={title}
                    description={description}
                    dateTime={dateTime}
                />
                <section className="py-4 md:py-16">{children}</section>
            </Container>
        </>
    );
};

export default BlogTemplate;
