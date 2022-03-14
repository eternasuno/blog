import CapitalizeSpan from "../atoms/capitalize-span";
import Link from "../atoms/link";

type Props = {
    slug: string;
    title: string;
};

const TitleLink = ({ slug, title }: Props) => {
    return (
        <Link href={slug}>
            <CapitalizeSpan>{title}</CapitalizeSpan>
        </Link>
    );
};

export default TitleLink;
