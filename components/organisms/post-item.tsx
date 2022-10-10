import Capitalize from "../atoms/capitalize";
import Link from "../atoms/link";
import Prose from "../atoms/prose";
import Tags from "../atoms/tags";
import Time from "../molecules/time";

type Props = {
    slug: string;
    title: string;
    date: string;
    tags: string[];
    excerpt: string;
};

const PostItem = ({ slug, title, date, tags, excerpt }: Props) => {
    return (
        <article className="flex flex-col gap-2 lg:flex-row lg:gap-8">
            <Time
                className="min-w-[10rem] text-sm text-slate-700 dark:text-slate-400"
                dateTime={date}
            />
            <div className="space-y-2">
                <h1 className="text-lg font-bold">
                    <Capitalize>
                        <Link href={`/posts/${slug}`}>{title}</Link>
                    </Capitalize>
                </h1>
                <Prose>{excerpt}</Prose>
                <Tags tags={tags} />
            </div>
        </article>
    );
};

export default PostItem;
