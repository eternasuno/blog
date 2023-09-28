import Time from '@/components/atoms/time';
import MDProse from '@/components/molecules/md-prose';
import Hero from '@/components/organisms/hero';
import Pagination from '@/components/organisms/pagination';
import { getPostBySlug, getPostSlugs } from '@/lib/post';
import { Metadata } from 'next';

export const dynamicParams = false;

const Page = async ({ params: { slug } }: { params: { slug: string } }) => {
    const post = await getPostBySlug(slug);

    return (
        <>
            <Hero title={post.title}>
                <span className="inline-flex items-center gap-4">
                    <span>
                        Written on{' '}
                        <Time dateTime={post.date} format="LLLL do, yyyy" />
                    </span>
                </span>
            </Hero>

            <div className="flex flex-col gap-8 pb-8 pt-10 xl:flex-row xl:gap-0">
                <MDProse className="flex-1" markdown={post.content} />
                <Pagination slug={slug} className="xl:order-first xl:w-1/4" />
            </div>
        </>
    );
};

export const generateStaticParams = async () =>
    (await getPostSlugs()).map((slug) => ({
        slug,
    }));

export const generateMetadata = async ({
    params: { slug },
}: {
    params: { slug: string };
}) => {
    const { title, excerpt: description } = await getPostBySlug(slug);

    return {
        alternates: { canonical: `/posts/${slug}` },
        description,
        title,
    } as Metadata;
};

export default Page;
