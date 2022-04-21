import cn from "classnames";

type Props = {
    children: React.ReactNode;
    className?: string;
};

const Capitalize = ({ children, className }: Props) => {
    return (
        <span className={cn("capitalize tracking-tight", className)}>
            {children}
        </span>
    );
};

export default Capitalize;
