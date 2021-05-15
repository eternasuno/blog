import Link from "../atoms/link";
import React from "react";
import Rectangle from "../atoms/rectangle";

const HomeButton = () => {
    return (
        <Link href="/">
            <Rectangle className="p-2 capitalize select-none">
                home
            </Rectangle>
        </Link>
    );
};

export default HomeButton;