import cn from "classnames";

type Props = {
    children: React.ReactNode;
    className?: string;
};

const Container = ({ children, className }: Props) => {
    return (
        <div
            className={cn(
                "mx-auto w-full max-w-2xl p-4 lg:max-w-4xl",
                className
            )}
        >
            {children}
        </div>
    );
};

export default Container;
