import { getRelatedPost } from '@/lib/post';
import cn from 'classnames';
import Link from 'next/link';
import Title from '../atoms/title';

type Props = {
  className?: string;
  slug: string;
};

const Pagination = async ({ className, slug }: Props) => {
  const { previousPost, nextPost } = await getRelatedPost(slug);

  return (
    <div className={cn('space-y-8', className)}>
      <Link className="block" href={`/posts/${previousPost.slug}`} replace>
        <div className="text-xs italic text-accent">PREVIOUS</div>
        <Title>{previousPost.title}</Title>
      </Link>
      <Link
        className="block text-end xl:text-start"
        href={`/posts/${nextPost.slug}`}
        replace>
        <div className="text-xs italic text-accent">NEXT</div>
        <Title>{nextPost.title}</Title>
      </Link>
    </div>
  );
};

export default Pagination;
