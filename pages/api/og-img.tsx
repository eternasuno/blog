import { ImageResponse } from "@vercel/og";
import { NextRequest, NextResponse } from "next/server";
import BLOG from "../../lib/config";

export const config = {
    runtime: "experimental-edge"
};

const ogImg = (req: NextRequest) => {
    try {
        const { searchParams } = new URL(req.url);
        const hasTitle = searchParams.has("title");
        const title = hasTitle
            ? searchParams.get("title")?.slice(0, 100)
            : BLOG.title;

        return new ImageResponse(
            (
                <div
                    style={{
                        display: "flex",
                        height: "100%",
                        width: "100%",
                        alignItems: "center",
                        justifyContent: "center",
                        flexDirection: "column",
                        backgroundImage:
                            "linear-gradient(to bottom, #dbf4ff, #fff1f1)",
                        fontSize: 60,
                        letterSpacing: -1,
                        fontWeight: 700
                    }}
                >
                    <div
                        style={{
                            padding: "5px 40px",
                            width: "auto",
                            textAlign: "center",
                            backgroundImage:
                                "linear-gradient(90deg, rgb(121, 40, 202), rgb(255, 0, 128))",
                            backgroundClip: "text",
                            color: "transparent"
                        }}
                    >
                        {title}
                    </div>
                </div>
            ),
            {
                width: 1200,
                height: 630
            }
        );
    } catch (e: any) {
        console.log(`${e.message}`);
        return new NextResponse(`Failed to generate the image`, {
            status: 500
        });
    }
};
export default ogImg;
