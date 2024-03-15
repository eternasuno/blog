import Hero from '@/components/atoms/hero';
import Link from '@/components/atoms/link';
import Strong from '@/components/atoms/strong';
import Tag from '@/components/atoms/tag';
import Post from '@/components/organisms/post';
import { getPostsByTag, getTags } from '@/libs/post';

const Page = async ({ params: { tag } }: { params: { tag: string } }) => {
  const currentTag = decodeURIComponent(tag);
  const [posts, tags] = await Promise.all([
    getPostsByTag(decodeURIComponent(currentTag)),
    getTags(),
  ]);

  return (
    <>
      <Hero className="space-y-8">
        <Strong asChild className="text-3xl md:text-5xl">
          <h1>
            exploring <span className="text-primary">{currentTag}</span>
          </h1>
        </Strong>
        <ul className="flex flex-wrap gap-2">
          <li key="all">
            <Tag asChild className="link-primary">
              <Link href="/tags">All</Link>
            </Tag>
          </li>
          {tags.map((tag) => (
            <li key={tag}>
              {currentTag === tag ? (
                <Tag className="cursor-not-allowed bg-primary text-primary-content">{tag}</Tag>
              ) : (
                <Tag asChild className="link-primary">
                  <Link href={`/tags/${tag}`}>{tag}</Link>
                </Tag>
              )}
            </li>
          ))}
        </ul>
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
