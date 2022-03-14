import cn from "classnames";
import { format as formatDate, formatISO, parseISO } from "date-fns";

type Props = {
    className?: string;
    dateTime: string;
    format?: string;
};

const Time = ({ className, dateTime, format = "LLLL    d, yyyy" }: Props) => {
    const date = parseISO(dateTime);
    return (
        <time
            dateTime={formatISO(date, { representation: "date" })}
            className={cn(
                "text-sm text-slate-700 dark:text-slate-300 md:text-base",
                className
            )}>
            {formatDate(date, format)}
        </time>
    );
};

export default Time;
