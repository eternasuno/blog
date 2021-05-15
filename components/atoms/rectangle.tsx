import cn from "classnames";

type Props = {
    children: React.ReactNode;
    className?: string;
};

const Rectangle = ({ children, className }: Props) => {
    return (
        <span className={cn(
            "block rounded cursor-pointer hover:bg-gray-600 hover:bg-opacity-25",
            className
        )}>
            {children}
        </span>
    );
};

export default Rectangle;