import cn from "classnames";

type Props = {
    children: React.ReactNode;
    className?: string;
};

const Content = ({ children, className }: Props) => {
    return (
        <section className={cn("py-4 md:py-16", className)}>{children}</section>
    );
};

export default Content;
