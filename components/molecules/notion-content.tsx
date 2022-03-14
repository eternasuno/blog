import dynamic from "next/dynamic";
import { Block, ExtendedRecordMap } from "notion-types";
import { NotionRenderer } from "react-notion-x";
import Prose from "../atoms/prose";

const Code = dynamic(async () => await import("./code"), { ssr: false });

const Equation = dynamic(
    async () => (await import("react-notion-x")).Equation,
    { ssr: false }
);

const Modal = dynamic(async () => (await import("react-notion-x")).Modal, {
    ssr: false
});

type Props = {
    className?: string;
    content: ExtendedRecordMap;
};

const NotionContent = ({ className, content }: Props) => {
    return (
        <Prose className={className}>
            <NotionRenderer
                recordMap={content}
                components={{
                    code: Code,
                    collection: () => <></>,
                    collectionRow: () => <></>,
                    modal: Modal,
                    equation: Equation
                }}
                mapImageUrl={mapImageUrl}
            />
        </Prose>
    );
};

export default NotionContent;

const mapImageUrl = (url: string, block: Block) => {
    // proxy notion image url
    const found = url.match(
        /https:\/\/(\S+)\.amazonaws\.com\/secure\.notion-static\.com\/(\S+)\/(\S+)\?/
    );
    if (found) {
        const table =
            block.parent_table === "space" ||
            block.parent_table === "collection"
                ? "block"
                : block.parent_table;
        url = `/api/image/${found[3]}?region=${found[1]}&token=${found[2]}&table=${table}&id=${block.id}`;
    }
    return url;
};
