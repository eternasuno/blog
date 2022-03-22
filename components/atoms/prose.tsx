import cn from "classnames";

type Props = {
    className?: string;
    children: React.ReactNode;
};

const Prose = ({ className, children }: Props) => {
    return (
        <div
            className={cn(
                "prose prose-slate max-w-none dark:prose-invert",
                className
            )}>
            {children}
        </div>
    );
};

export default Prose;
