import dynamic from 'next/dynamic';
import { Block, ExtendedRecordMap } from 'notion-types';
import { uuidToId } from 'notion-utils';
import React from "react";
import { NotionRenderer } from "react-notion-x";

const Code = dynamic(async () =>
    (await import('react-notion-x')).Code,
    { ssr: false }
);

const Equation = dynamic(async () =>
    (await import('react-notion-x')).Equation,
    { ssr: false }
);

const Pdf = dynamic(async () =>
    (await import('react-notion-x')).Pdf,
    { ssr: false }
);

const Modal = dynamic(async () =>
    (await import('react-notion-x')).Modal,
    { ssr: false }
);

type Props = {
    content: ExtendedRecordMap;
};

const Artilce = ({ content }: Props) => {
    return (
        <article className="prose dark:prose-dark max-w-none">
            <NotionRenderer recordMap={content}
                darkMode={false} fullPage={false}
                components={{
                    code: Code,
                    collection: () => <></>,
                    collectionRow: () => <></>,
                    modal: Modal,
                    pdf: Pdf,
                    equation: Equation
                }}
                mapPageUrl={id => `/posts/${uuidToId(id)}`}
                mapImageUrl={mapImageUrl}
            />
        </article>
    );
};

export default Artilce;

const mapImageUrl = (url: string, block: Block) => {
    // proxy notion image url
    if (url) {
        const found = url.match(/https:\/\/(\S+)\.amazonaws\.com\/secure\.notion-static\.com\/(\S+)\/(\S+)$/);
        if (found) {
            const table = block.parent_table === "space"
                || block.parent_table === "collection"
                ? "block"
                : block.parent_table;
            url = `/api/image/${found[3]}?region=${found[1]}&token=${found[2]}&table=${table}&id=${block.id}`;
        }
    }
    return url;
};