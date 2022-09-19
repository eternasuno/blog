import SlopingLine from "../atoms/sloping-line";

type Props = {
    author: string;
    since: string;
};

const Footer = ({ author, since }: Props) => {
    const now = new Date();
    return (
        <footer className="">
            <SlopingLine />
            <p className="mt-8">
                {`Copyright © ${since}-${now.getFullYear()} ${author}, All Rights
                Reserved.`}
            </p>
        </footer>
    );
};

export default Footer;
