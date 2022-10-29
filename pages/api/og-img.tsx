import { ImageResponse } from "@vercel/og";
import { NextRequest, NextResponse } from "next/server";
import BLOG from "../../lib/config";

export const config = {
    runtime: "experimental-edge"
};

const ogImg = async (req: NextRequest) => {
    try {
        const { searchParams } = new URL(req.url);
        const title = searchParams.get("title")?.slice(0, 100) || BLOG.title;

        return new ImageResponse(createElement(title), {
            width: 1200,
            height: 630
        });
    } catch (e: any) {
        console.log(e.message);
        return new NextResponse("Failed to generate the image", {
            status: 500
        });
    }
};
export default ogImg;

const createElement = (title: string) => {
    const { author, since } = BLOG;
    const now = new Date();
    return (
        <div tw="flex flex-col h-full w-full bg-[#282b34]">
            <h1 tw="my-auto text-6xl font-black capitalize tracking-tight pl-2 text-zinc-200">
                {title}
            </h1>
            <p tw="ml-auto text-zinc-200 pr-2">
                {`© ${since}-${now.getFullYear()} ${author}, All Rights
                Reserved.`}
            </p>
        </div>
    );
};
