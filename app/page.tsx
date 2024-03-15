import Hero from '@/components/atoms/hero';
import Strong from '@/components/atoms/strong';
import Post from '@/components/organisms/post';
import { getPosts } from '@/libs/post';

const Page = async () => {
  const posts = (await getPosts()).slice(0, 10);

  return (
    <>
      <Hero asChild className="text-4xl md:text-6xl">
        <Strong asChild>
          <h1>Latest</h1>
        </Strong>
      </Hero>

      <ol className="divide-y divide-neutral/50">
        {posts.map((post) => (
          <li key={post.slug}>
            <Post {...post} />
          </li>
        ))}
      </ol>
    </>
  );
};

export default Page;
