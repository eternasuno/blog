import { NextApiRequest, NextApiResponse } from "next";
import { NOTION_AUTH_TOKEN } from "../../lib/web.config";

export default async function hello(req: NextApiRequest, res: NextApiResponse) {
    const url = "https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F42ab7624-d049-4f49-8f4d-7debf3758939%2FPortainer-stacks.png?table=block&id=5a27abc6-05d3-4d17-ac69-4fc6836a054d&cache=v2";
    const token = NOTION_AUTH_TOKEN;
    console.log(url, token);

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
}