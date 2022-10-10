import cn from "classnames";
import Capitalize from "../atoms/capitalize";

type Props = {
    children: React.ReactNode;
    className?: string;
};

const PageTitle = ({ children, className }: Props) => {
    return (
        <h1 className={cn("mb-4 text-4xl font-bold", className)}>
            <Capitalize>{children}</Capitalize>
        </h1>
    );
};

export default PageTitle;
