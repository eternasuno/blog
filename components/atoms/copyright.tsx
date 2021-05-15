type Props = {
    author: string;
    since: string;
};

const Copyright = ({ author, since }: Props) => {
    return (
        <p>
            {`${author} © ${since}-${new Date().getFullYear()}`}
        </p>
    );
};

export default Copyright;