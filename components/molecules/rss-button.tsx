import React from "react";
import { RiRssFill } from "react-icons/ri";
import Rectangle from "../atoms/rectangle";

const RssButton = () => {
    return (
        <a href="/rss.xml" aria-label="rss" target="_blank"
            rel="noopener noreferrer nofollow">
            <Rectangle className="p-3 h-10 w-10">
                <RiRssFill />
            </Rectangle>
        </a>
    );
};

export default RssButton;