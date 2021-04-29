import { NextApiRequest, NextApiResponse } from "next";
import fetch from "node-fetch";
import { NOTION_AUTH_TOKEN } from "../../../lib/web.config";

export default async (req: NextApiRequest, res: NextApiResponse) => {
    const { name, region, token, table, id } = req.query;
    const awsUrl = `https://${region}.amazonaws.com/secure.notion-static.com/${token}/${name}`;
    const url = `https://www.notion.so/image/${encodeURIComponent(awsUrl)}?table=${table}&id=${id}&cache=v2`;

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