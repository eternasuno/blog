import cn from "classnames";

type Props = {
    className?: string;
};

const SlopingLine = ({ className }: Props) => {
    return (
        <hr
            className={cn(
                "my-4 rotate-[-2deg] border-t-2 border-b-0 border-l-0 border-r-0 border-solid border-current",
                className
            )}
        />
    );
};

export default SlopingLine;
