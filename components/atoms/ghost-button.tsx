import cn from 'classnames';

const GhostButton = ({
    children,
    className,
}: React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLSpanElement>,
    HTMLSpanElement
>) => (
    <span className={cn('btn btn-ghost p-2 capitalize', className)}>
        {children}
    </span>
);

export default GhostButton;
