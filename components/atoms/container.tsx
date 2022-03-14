import cn from "classnames";

type Props = {
    children: React.ReactNode;
    className?: string;
};

const Container = ({ children, className }: Props) => {
    return (
        <div className={cn("mx-auto max-w-3xl px-4 xl:max-w-5xl", className)}>
            {children}
        </div>
    );
};

export default Container;
