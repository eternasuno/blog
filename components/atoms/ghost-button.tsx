import cn from 'classnames';

type Props = {
    className?: string;
    children: React.ReactNode;
};

const GhostButton = ({ children, className }: Props) => (
    <span className={cn('btn btn-ghost p-2 capitalize', className)}>
        {children}
    </span>
);

export default GhostButton;
