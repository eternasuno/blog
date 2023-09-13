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
                'prose max-w-none prose-figcaption:text-center prose-pre:hyphens-none prose-pre:text-left prose-pre:font-mono prose-img:w-full prose-img:shadow dark:prose-img:opacity-75 dark:prose-img:brightness-90',
                className
            )}
            {...rest}>
            {children}
        </article>
    );
};

export default Prose;
