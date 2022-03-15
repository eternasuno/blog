import cn from "classnames";

type Props = {
    children: React.ReactNode;
    className?: string;
};

const Title = ({ children, className }: Props) => {
    return (
        <section className={cn("space-y-2 py-16 md:space-y-5", className)}>
            {children}
        </section>
    );
};

export default Title;
