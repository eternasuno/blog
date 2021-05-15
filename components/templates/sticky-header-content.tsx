import React from "react";
import Container from "../atoms/container";

type Props = {
    header: React.ReactNode;
    content: React.ReactNode;
};

const StickyHeaderContent = ({ header, content }: Props) => {
    return (
        <>
            <header className="backdrop-filter backdrop-blur-2xl sticky top-0 z-10">
                <Container>
                    {header}
                </Container>
            </header>
            <section>
                <Container>
                    {content}
                </Container>
            </section>
        </>
    );
};

export default StickyHeaderContent;