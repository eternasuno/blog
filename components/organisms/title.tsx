import cn from "classnames";
import CapitalizeSpan from "../atoms/capitalize-span";
import Time from "../molecules/time";

type Props = {
    title: string;
    dateTime?: string;
    description?: string;
};

const Title = ({ title, dateTime, description }: Props) => {
    return (
        <section
            className={cn("space-y-2 py-16 md:space-y-5", {
                "text-center": dateTime
            })}>
            {dateTime ? (
                <Time dateTime={dateTime} format="EEEE,  LLLL    d,  yyyy" />
            ) : (
                <></>
            )}
            <h1 className="text-3xl font-extrabold md:text-6xl">
                <CapitalizeSpan>{title}</CapitalizeSpan>
            </h1>
            {dateTime ? (
                <></>
            ) : (
                <p className="text-slate-700 dark:text-slate-300">
                    {description}
                </p>
            )}
        </section>
    );
};

export default Title;
