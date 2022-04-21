import Capitalize from "../atoms/capitalize";
import Title from "../atoms/title";
import Time from "../molecules/time";

type Props = {
    title: string;
    dateTime: string;
};

const PostTitle = ({ title, dateTime }: Props) => {
    return (
        <Title className="text-center">
            <Time dateTime={dateTime} format="EEEE,  LLLL    d,  yyyy" />
            <h1 className="text-3xl font-extrabold md:text-6xl">
                <Capitalize>{title}</Capitalize>
            </h1>
        </Title>
    );
};

export default PostTitle;
