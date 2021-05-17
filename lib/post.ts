import { Serializable } from "child_process";
import { NotionAPI } from "notion-client";
import { Block, CollectionPropertySchemaMap, ExtendedRecordMap } from "notion-types";
import { getDateValue, getTextContent, idToUuid, uuidToId } from "notion-utils";
import pinyin from "pinyin";
import BLOG from "../blog.config";

export type Post = {
    pageId: string;
    slug: string;
    title: string;
    date: string;
    tags: string[];
    excerpt?: string;
};

export type Content = ExtendedRecordMap;

export const getPosts = async () => {
    const recordMap = await getRecordMap(BLOG.notion.pageId);
    if (recordMap.block[idToUuid(BLOG.notion.pageId)].value.type !== "collection_view_page") {
        console.info(`pageId "${BLOG.notion.pageId}" is not a database`);
        return [];
    }

    // get all properties schema
    const schema = Object.values(recordMap.collection)[0].value?.schema;

    return Object.values(recordMap.block)
        .map(({ value: block }) => {
            // get all page
            if (block.type === "page") {
                return getAllProperties(block, schema);
            }
        })
        .filter(item => item && item["status"] === "Published")
        .map(item => item && addSlugToItem(item)) as Post[];
};

export const getPostSlugs = async () => {
    return (await getPosts()).map(post => post && post.slug);
};

export const getPostBySlug = async (slug: string) => {
    const posts = (await getPosts()).sort((post1, post2) =>
        post1.date > post2.date ? -1 : 1
    );
    const index = posts.findIndex((post) => post.slug === slug);
    const content = await getRecordMap(posts[index].pageId);
    return {
        lastPost: index > 0 ? posts[index - 1] : null,
        nextPost: index < posts.length - 1 ? posts[index + 1] : null,
        post: posts[index],
        content
    };
};

const addSlugToItem = (item: Item) => {
    item["slug"] = pinyin(String(item["title"]), {
        heteronym: true,
        segment: true,
        style: pinyin.STYLE_NORMAL
    })
        .map(item => item[0])
        .join("-")
        .toLowerCase()
        .replace(/[^a-z0-9\-]/g, "-")
        .replace(/\-+/g, "-");
    return item;
};

type Item = {
    [key: string]: Serializable;
};

const getRecordMap = async (pageId: string) => {
    const notion = new NotionAPI({
        authToken: BLOG.notion.authToken
    });
    return await notion.getPage(pageId);
};

const getAllProperties = (block: Block, schema: CollectionPropertySchemaMap) => {
    const item: Item = { pageId: uuidToId(block.id) };
    const properties = block.properties as any;
    for (const key in schema) {
        if (schema[key].type) {
            switch (schema[key].type) {
                case "date":
                    item[schema[key].name] = getDateValue(properties[key])?.start_date || "";
                    break;
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