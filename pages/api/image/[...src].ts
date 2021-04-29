import { NextApiRequest, NextApiResponse } from "next";
import fetch from "node-fetch";
import { NOTION_AUTH_TOKEN } from "../../../lib/web.config";

export default async (req: NextApiRequest, res: NextApiResponse) => {
    const { src, table, id } = req.query;
    const url = `https://www.notion.so/image/${encodeURIComponent(src[0])}?table=${table}&id=${id}&cache=v2`;

    const response = await fetch(url, {
        headers: {
            cookie: `token_v2=${NOTION_AUTH_TOKEN}`
        }
    });

    response.headers.forEach((value, key) => {
        res.setHeader(key, value);
    });
    res.status(200).send(response.body);
};