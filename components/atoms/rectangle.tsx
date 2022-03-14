import cn from "classnames";

type Props = {
    children: React.ReactNode;
    className?: string;
};

const Rectangle = ({ children, className }: Props) => {
    return (
        <span
            className={cn(
                "block cursor-pointer rounded hover:bg-slate-600/25",
                className
            )}>
            {children}
        </span>
    );
};
export default Rectangle;
