import { InferGetStaticPropsType } from "next";
import PageTitle from "../../components/molecules/page-title";
import Tags from "../../components/atoms/tags";
import BlogTemplate from "../../components/templates/blog-template";
import { getPostTags } from "../../lib/post";

const Index = ({ tags }: InferGetStaticPropsType<typeof getStaticProps>) => (
    <BlogTemplate
        title="Browse by tag"
        description="Browse by tag"
        canonical="/tags"
    >
        <PageTitle>Browse by tag</PageTitle>
        <Tags className="px-4" tags={tags} />
    </BlogTemplate>
);

export default Index;

export const getStaticProps = async () => {
    const tags = await getPostTags();

    return {
        props: { tags }
    };
};
