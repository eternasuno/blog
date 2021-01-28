import cn from 'classnames';
import React from 'react';
import Container from './container';

type Props = {
    className?: string;
    children: React.ReactNode;
};

const Nav = ({ className, children }: Props) => (
    <nav className={cn("w-full py-4 shadow-md", className)}
        style={{ backdropFilter: "blur(20px)" }}>
        <Container className="flex justify-between items-center">
            {children}
        </Container>
    </nav>
);

export default Nav;