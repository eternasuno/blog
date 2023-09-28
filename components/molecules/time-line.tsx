import Time from '../atoms/time';
import Title from '../atoms/title';

type Props = {
    title: React.ReactNode;
    dateTime: string;
    children: React.ReactNode;
};

const Timeline = ({ dateTime, children, title }: Props) => (
    <div className="group grid grid-flow-row auto-rows-auto place-items-stretch gap-x-8 sm:grid-cols-[calc(2rem+2px)_auto] lg:grid-cols-[10rem_calc(2rem+2px)_auto]">
        <div className="relative hidden sm:block lg:-order-2">
            <span className="absolute left-2 top-[calc(50%-0.5rem-1px)] h-[calc(1rem+2px)] w-[calc(1rem+2px)] rotate-45 bg-current duration-200 ease-in group-hover:-rotate-45"></span>
        </div>
        <Time
            dateTime={dateTime}
            className="my-2 block self-center italic lg:-order-3 lg:justify-self-end"
        />
        <div className="relative hidden before:absolute before:left-4 before:top-0 before:h-full before:w-[2px] before:bg-current sm:block lg:before:h-0"></div>
        <Title className="self-center text-2xl font-bold tracking-tight lg:-order-1">
            {title}
        </Title>
        <div className="relative hidden before:absolute before:left-4 before:top-0 before:h-full before:w-[2px] before:bg-current sm:block"></div>
        <div className="mb-8">{children}</div>
    </div>
);

export default Timeline;
