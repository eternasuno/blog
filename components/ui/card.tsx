import cn from 'classnames';

type Props = {
    className?: string;
    children: React.ReactNode;
};

const Card = ({ className, children }: Props) => (
    <div className={cn("rounded shadow-lg p-4 flex", className)}>
        {children}
    </div>
);

export default Card;