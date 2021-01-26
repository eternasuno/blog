import cn from 'classnames';

type Props = {
    className?: string;
    children: React.ReactNode;
};

const Container = ({ className, children }: Props) => (
    <div className={cn("max-w-3xl mx-auto px-4", className)}>
        {children}
    </div>
);

export default Container;