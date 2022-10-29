import cn from "classnames";
import Capitalize from "./capitalize";

type Props = {
    title: string;
    className?: string;
    children: React.ReactNode;
};

const Title = ({ title, className, children }: Props) => (
    <div
        className={cn(
            "flex min-h-[50vh] flex-col border-b-2 border-dashed border-b-zinc-300 dark:border-b-zinc-600",
            className
        )}
    >
        <div className="m-auto lg:mx-0">
            <h1 className="text-4xl font-bold lg:text-6xl">
                <Capitalize>{title}</Capitalize>
            </h1>
        </div>

        <p className="text-end text-sm sm:text-base">{children}</p>
    </div>
);

export default Title;
