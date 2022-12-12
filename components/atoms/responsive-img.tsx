import cn from "classnames";
import Image from "next/image";

type Props = {
    src: string;
    width: number;
    height: number;
    alt?: string;
    title?: string;
    className?: string;
};

const shimmer = (width: number, height: number) => `
<svg width="${width}" height="${height}" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs>
    <linearGradient id="g">
      <stop stop-color="#333" offset="20%" />
      <stop stop-color="#222" offset="50%" />
      <stop stop-color="#333" offset="70%" />
    </linearGradient>
  </defs>
  <rect width="${width}" height="${height}" fill="#333" />
  <rect id="r" width="${width}" height="${height}" fill="url(#g)" />
  <animate xlink:href="#r" attributeName="x" from="-${width}" to="${width}" dur="1s" repeatCount="indefinite"  />
</svg>`;

const toBase64 = (str: string) =>
    typeof window === "undefined"
        ? Buffer.from(str).toString("base64")
        : window.btoa(str);

const ResponsiveImg = ({
    src,
    alt,
    title,
    width,
    height,
    className
}: Props) => {
    return (
        <Image
            src={src}
            alt={alt || "image"}
            title={title}
            width={width}
            height={height}
            objectFit="cover"
            layout="responsive"
            placeholder="blur"
            blurDataURL={`data:image/svg+xml;base64,${toBase64(
                shimmer(width, height)
            )}`}
            className={cn("dark:brightness-75", className)}
        />
    );
};

export default ResponsiveImg;
