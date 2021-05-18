import BLOG from "../../blog.config";

type Props = {
    title?: string;
    subTitle?: string;
};

const BlogTitle = ({ title = BLOG.title, subTitle = BLOG.description }: Props) => {
    return (
        <div className="space-y-2 md:space-y-5 pt-16 pb-20">
            <h1 className="font-extrabold tracking-tight capitalize text-3xl md:text-6xl">
                {title}
            </h1>
            <p className="text-gray-600">
                {subTitle}
            </p>
        </div>
    );
};

export default BlogTitle;