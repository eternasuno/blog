import CCIcons from '@/components/atoms/cc-icons';
import Time from '@/components/atoms/time';
import MDProse from '@/components/molecules/md-prose';
import Hero from '@/components/organisms/hero';
import Pagination from '@/components/organisms/pagination';
import BLOG from '@/lib/config';
import { getPostBySlug, getPostSlugs } from '@/lib/post';
import { Metadata } from 'next';

const page = async ({ params: { slug } }: { params: { slug: string } }) => {
    const post = await getPostBySlug(slug);

    return (
        <>
            <Hero title={post.title}>
                <span className="inline-flex items-center gap-4">
                    <span>
                        Written on{' '}
                        <Time dateTime={post.date} format="LLLL do, yyyy" />
                    </span>
                    <CCIcons
                        noDerivatives={BLOG.no_derivatives}
                        shareAlike={BLOG.share_alike}
                        nonCommercial={BLOG.non_commercial}
                        className="h-4 w-4"
                    />
                </span>
            </Hero>

            <div className="flex flex-col gap-8 py-12 xl:flex-row xl:gap-0">
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
    const post = await getPostBySlug(slug);

    return {
        title: post.title,
    } as Metadata;
};

export default page;
