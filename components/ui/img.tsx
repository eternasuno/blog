import React from 'react';

type Props = {
    alt: string;
    src: string;
    title?: string;
    darkMode?: boolean;
};

const Img = ({ alt, src, title, darkMode = false }: Props) => (
    <>
        <img src={src} alt={alt}
            style={{
                filter: `brightness(${darkMode ? 0.8 : 1})`
            }} />
        {
            title ?
                <span className="block text-center text-sm break-words">
                    {title}
                </span> : ""
        }

    </>
);

export default Img;