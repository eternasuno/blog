import { NextApiRequest, NextApiResponse } from "next";

export default async function hello(req: NextApiRequest, res: NextApiResponse) {
    const { path } = req.query;
    res.status(200).json({ path });
}