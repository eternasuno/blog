import Container from "../atoms/container";
import cn from "classnames";

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
                "text-center text-xs text-zinc-600 dark:text-zinc-400",
                className
            )}
        >
            <Container>
                {`© ${since}-${now.getFullYear()} ${author}, All Rights
                Reserved.`}
            </Container>
        </footer>
    );
};

export default Footer;
