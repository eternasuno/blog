import { Serializable } from 'node:child_process';
import { NotionAPI } from 'notion-client';
import { Block, CollectionPropertySchemaMap, ExtendedRecordMap } from 'notion-types';
import { getDateValue, getTextContent, idToUuid, uuidToId } from 'notion-utils';
import { NOTION_AUTH_TOKEN, NOTION_PAGE_ID } from './web.config';

export type Post = {
    slug: string;
    title: string;
    date: string;
    tages: string[];
    excerpt?: string;
    content?: ExtendedRecordMap;
};

export const getPosts = async () => {
    const recordMap = await getRecordMap(NOTION_PAGE_ID);
    if (recordMap.block[idToUuid(NOTION_PAGE_ID)].value.type !== "collection_view_page") {
        console.info(`pageId "${NOTION_PAGE_ID}" is not a database`);
        return [];
    }

    // get all properties schema
    const schema = Object.values(recordMap.collection)[0].value?.schema;

    return Object.values(recordMap.block).map(({ value: block }) => {
        // get all page
        if (block.type === "page") {
            return getAllProperties(block, schema);
        }
    }).filter(item => item && item["status"] === "Published") as Post[];
};

export const getPostSlugs = async () => {
    return (await getPosts()).map(item => item && item["slug"]);
};

export const getPostBySlug = async (slug: string) => {
    const recordMap = await getRecordMap(slug);
    const schema = Object.values(recordMap.collection)[0].value?.schema;
    const block = recordMap.block[idToUuid(slug)].value;

    const post = getAllProperties(block, schema) as Post;
    post.content = recordMap;

    return post;
};

type Item = {
    [key: string]: Serializable;
};

const getRecordMap = async (pageId: string) => {
    const notion = new NotionAPI({
        authToken: NOTION_AUTH_TOKEN
    });
    return await notion.getPage(pageId);
};

const getAllProperties = (block: Block, schema: CollectionPropertySchemaMap) => {
    const item: Item = { slug: uuidToId(block.id) };
    const properties = block.properties as any;
    for (let key in schema) {
        if (schema[key].type) {
            switch (schema[key].type) {
                case "date":
                    item[schema[key].name] = getDateValue(properties[key])?.start_date || "";
                    break;
                // case "select":
                case "multi_select":
                    item[schema[key].name] = getTextContent(properties[key]).split(",");
                    break;
                default:
                    item[schema[key].name] = getTextContent(properties[key]);
                    break;
            }
        }
    }
    return item;
};