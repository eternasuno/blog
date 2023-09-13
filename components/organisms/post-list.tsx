import { getPosts } from '@/lib/post';
import Link from 'next/link';
import Time from '../atoms/time';
import Title from '../atoms/title';
import MDProse from '../molecules/md-prose';

const PostList = async () => {
    const posts = await getPosts();

    return (
        <ol className="divide-y">
            {posts.map(({ slug, title, date, excerpt }) => (
                <li
                    key={slug}
                    className="w-full py-12 xl:flex xl:items-baseline">
                    <Time
                        dateTime={date}
                        className="mb-2 block italic xl:mb-0 xl:w-1/4"
                    />
                    <div className="space-y-6 xl:flex-1">
                        <Link href={`/posts/${slug}`}>
                            <Title className="text-2xl">{title}</Title>
                        </Link>
                        <MDProse className="prose-p:my-2" markdown={excerpt} />
                        <Link
                            href={`/posts/${slug}`}
                            className="block font-medium leading-6">
                            Read more →
                        </Link>
                    </div>
                </li>
            ))}
        </ol>
    );
};

export default PostList;
