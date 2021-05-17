import React from "react";
import Time from "../atoms/time";

type Props = {
    title: string;
    date: string;
};

const PostTitle = ({ title, date }: Props) => {
    return (
        <header className="space-y-1 pb-9 text-center">
            <Time dateTime={date} format="EEEE,LLLL    d, yyyy" />
            <h1 className="font-extrabold tracking-tight capitalize text-3xl md:text-5xl">
                {title}
            </h1>
        </header>
    );
};

export default PostTitle;