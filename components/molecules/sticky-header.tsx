import React from "react";
import Container from "../atoms/container";

type Props = {
    children: React.ReactNode;
};

const StickyHeader = ({ children }: Props) => {
    return (
        <header className="backdrop-filter backdrop-blur-2xl sticky top-0 z-10">
            <Container>
                {children}
            </Container>
        </header>
    );
};

export default StickyHeader;