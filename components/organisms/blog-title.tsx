import Capitalize from "../atoms/capitalize";
import Title from "../atoms/title";

type Props = {
    title: string;
    description: string;
};

const BlogTitle = ({ title, description }: Props) => {
    return (
        <Title>
            <h1 className="text-3xl font-extrabold md:text-6xl">
                <Capitalize>{title}</Capitalize>
            </h1>
            <p className="text-slate-700 dark:text-slate-300">{description}</p>
        </Title>
    );
};

export default BlogTitle;
