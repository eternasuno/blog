import cn from "classnames";
import Capitalize from "../atoms/capitalize";

type Props = {
    children: React.ReactNode;
    className?: string;
};

const PageTitle = ({ children, className }: Props) => {
    return (
        <h1 className={cn("my-4 text-4xl", className)}>
            <Capitalize>{children}</Capitalize>
        </h1>
    );
};

export default PageTitle;
