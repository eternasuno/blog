import Hero from '@/components/organisms/hero';
import PostList from '@/components/organisms/post-list';
import BLOG from '@/lib/config';

const page = () => {
    const { title, description } = BLOG;

    return (
        <>
            <Hero title={title}>{description}</Hero>
            <PostList />
        </>
    );
};

export default page;