type Props = {
    children: React.ReactNode;
};

const Container = ({ children }: Props) => {
    return (
        <div className="max-w-3xl xl:max-w-5xl mx-auto px-4">
            {children}
        </div>
    );
};

export default Container;