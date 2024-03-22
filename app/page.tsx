import Hero from '@/components/atoms/hero';
import Strong from '@/components/atoms/strong';
import Post from '@/components/organisms/post';
import { DESCRIPTION, TITLE } from '@/libs/config';
import { getPosts } from '@/libs/post';

const Page = async () => {
  const posts = (await getPosts()).slice(0, 10);

  return (
    <>
      <Hero className="space-y-4">
        <Strong asChild className="text-4xl md:text-6xl">
          <h1>{TITLE}</h1>
        </Strong>
        <p className="text-neutral">{DESCRIPTION}</p>
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
