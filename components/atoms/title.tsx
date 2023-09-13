import cn from 'classnames';

type Props = {
    children: React.ReactNode;
    className?: string;
};

const Title = ({ children, className }: Props) => (
    <div
        className={cn(
            'font-sans font-bold capitalize tracking-tight',
            className
        )}>
        {children}
    </div>
);

export default Title;
