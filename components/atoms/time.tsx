import { format as formatDate, formatISO, parseISO } from "date-fns";

type Props = {
    dateTime: string;
    format?: string;
};

const Time = ({ dateTime, format = "LLLL    d, yyyy" }: Props) => {
    const date = parseISO(dateTime);
    return (
        <time dateTime={formatISO(date)} className={"text-sm md:text-base text-gray-500 dark:text-gray-400"}>
            {formatDate(date, format)}
        </time>
    );
};

export default Time;