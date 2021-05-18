import cn from "classnames";

type Props = {
    children: React.ReactNode;
    className?: string;
};

const Container = ({ children, className }: Props) => {
    return (
        <div className={cn("max-w-3xl xl:max-w-5xl mx-auto px-4", className)}>
            {children}
        </div>
    );
};

export default Container;