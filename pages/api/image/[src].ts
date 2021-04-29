import { NextApiRequest, NextApiResponse } from "next";
import fetch from "node-fetch";
import { NOTION_AUTH_TOKEN } from "../../../lib/web.config";

export default async (req: NextApiRequest, res: NextApiResponse) => {
    const { src, table, id } = req.query;
    console.log(src, table, id);
    const url = `https://www.notion.so/image/${encodeURIComponent(Array.isArray(src) ? src[0] : src)}?table=${table}&id=${id}&cache=v2`;

    const response = await fetch(url, {
        headers: {
            cookie: `token_v2=${NOTION_AUTH_TOKEN}`
        }
    });

    console.log(response);
    response.headers.forEach((value, key) => {
        console.log(value, key);
        res.setHeader(key, value);
    });
    res.status(200).send(response.body);
};