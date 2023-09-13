import Title from '../atoms/title';

type Props = {
    title: string;
    children?: React.ReactNode;
};

const Hero = ({ title, children }: Props) => (
    <div className="hero relative min-h-[30vh] sm:min-h-[50vh]">
        <h1 className="hero-content mb-8 text-center">
            <Title className="text-4xl sm:text-6xl">{title}</Title>
        </h1>
        <p className="absolute bottom-0 right-0 text-sm xl:text-base">
            {children}
        </p>
    </div>
);

export default Hero;
