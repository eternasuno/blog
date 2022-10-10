type Props = {
    author: string;
    since: string;
};

const Footer = ({ author, since }: Props) => {
    const now = new Date();
    return (
        <footer className="text-center text-xs text-zinc-400 dark:text-zinc-500">
            {`© ${since}-${now.getFullYear()} ${author}, All Rights
                Reserved.`}
        </footer>
    );
};

export default Footer;
