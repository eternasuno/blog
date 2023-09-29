import cn from 'classnames';
import { DetailedHTMLProps, HTMLAttributes } from 'react';

const Prose = ({
    className,
    children,
    ...rest
}: DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>) => {
    return (
        <article
            className={cn(
                'prose max-w-none prose-img:shadow dark:prose-img:opacity-90 dark:prose-img:brightness-90',
                className
            )}
            {...rest}>
            {children}
        </article>
    );
};

export default Prose;
