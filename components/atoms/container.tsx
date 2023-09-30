import cn from 'classnames';

type Props = {
    children: React.ReactNode;
    className?: string;
};

const Container = ({ children, className }: Props) => {
    return (
        <div
            className={cn(
                'container mx-auto px-4 sm:px-6 xl:max-w-5xl xl:px-0',
                className
            )}>
            {children}
        </div>
    );
};

export default Container;
