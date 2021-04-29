import { GetServerSideProps } from "next";
import { getPosts } from "../lib/post";
import { generateRss } from "../lib/rss";

export const getServerSideProps: GetServerSideProps = async ({ res }) => {
    const posts = (await getPosts())
        .sort((post1, post2) => post1.date > post2.date ? -1 : 1)
        .slice(0, 5);
    console.log(posts);
    const rss = generateRss(posts);
    console.log(rss);

    res.setHeader('Content-Type', 'text/xml');
    res.write(rss);
    res.end();

    return {
        props: {}
    };
};

const Feed = () => null;
export default Feed;

