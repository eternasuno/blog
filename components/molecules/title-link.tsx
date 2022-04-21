import Capitalize from "../atoms/capitalize";
import Link from "../atoms/link";

type Props = {
    slug: string;
    title: string;
};

const TitleLink = ({ slug, title }: Props) => {
    return (
        <Link href={slug}>
            <Capitalize>{title}</Capitalize>
        </Link>
    );
};

export default TitleLink;
