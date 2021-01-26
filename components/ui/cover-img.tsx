import cn from 'classnames';

type Props = {
    src: string;
    className?: string;
    children: React.ReactNode;
};

const CoverImg = ({ src, className, children }: Props) => (
    <div
        className={cn("bg-cover bg-center", className)}
        style={{
            backgroundImage: `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3)), url(${src})`
        }}>
        {children}
    </div>
);

export default CoverImg;