import Capitalize from "../atoms/capitalize";
import Container from "../atoms/container";

type Props = {
    title: string;
    className?: string;
    children: React.ReactNode;
};

const Main = ({ title, className, children }: Props) => {
    return (
        <main className={className}>
            <Container className="space-y-16">
                <div className="flex min-h-[20vh] flex-col">
                    <div className="m-auto">
                        <h1 className="text-4xl font-bold lg:text-6xl">
                            <Capitalize>{title}</Capitalize>
                        </h1>
                    </div>
                </div>
                {children}
            </Container>
        </main>
    );
};

export default Main;
