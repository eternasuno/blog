import React from 'react';

type Props = {
    alt: string;
    src: string;
    title?: string;
};

const Img = ({ alt, src, title }: Props) => (
    <>
        <img src={src} alt={alt} className="dark:filter dark:brightness-90" />
        {
            title ?
                <span className="block text-center text-sm break-words">
                    {title}
                </span> : ""
        }

    </>
);

export default Img;