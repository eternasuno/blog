import cn from "classnames";
import Container from "../atoms/container";

type Props = {
    author: string;
    since: string;
    className?: string;
};

const Footer = ({ author, since, className }: Props) => {
    const now = new Date();
    return (
        <footer
            className={cn(
                "text-xs text-zinc-600 dark:text-zinc-400",
                className
            )}
        >
            <Container className="border-t-2 border-dashed border-t-zinc-300 dark:border-t-zinc-600">
                {`© ${since}-${now.getFullYear()} ${author}, All Rights
                Reserved.`}
            </Container>
        </footer>
    );
};

export default Footer;
