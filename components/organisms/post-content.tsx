import { ExtendedRecordMap } from "notion-types";
import { Post } from "../../lib/post";
import Content from "../atoms/content";
import NotionContent from "../molecules/notion-content";
import Pagination from "../molecules/pagination";

type Props = {
    content: ExtendedRecordMap;
    lastPost: Post | null;
    nextPost: Post | null;
};

const PostContent = ({ content, lastPost, nextPost }: Props) => {
    return (
        <Content className="flex flex-col xl:flex-row">
            <NotionContent content={content} />
            <Pagination
                lastPost={lastPost}
                nextPost={nextPost}
                className="xl:order-first xl:mr-4 xl:max-w-[16rem] xl:flex-[0_0_20%]"
            />
        </Content>
    );
};

export default PostContent;
