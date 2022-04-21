import { Post } from "../../lib/post";
import Content from "../atoms/content";
import MdContent from "../molecules/md-content";
import Pagination from "../molecules/pagination";

type Props = {
    content: string;
    lastPost: Post | null;
    nextPost: Post | null;
};

const PostContent = ({ content, lastPost, nextPost }: Props) => {
    return (
        <Content className="flex flex-col xl:flex-row">
            {/* <MdContent content={content} /> */}
            <Pagination
                lastPost={lastPost}
                nextPost={nextPost}
                className="xl:order-first xl:mr-4 xl:max-w-[16rem] xl:flex-[0_0_20%]"
            />
        </Content>
    );
};

export default PostContent;
