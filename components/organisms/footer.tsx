import React from "react";
import Container from "../atoms/container";

const Footer = () => {
    return (
        <footer className="py-8">
            <Container className="border-t border-gray-200 py-4 text-right">
                本作品采用
                <a rel="license" href="http://creativecommons.org/licenses/by-nc/4.0/">
                    知识共享署名-非商业性使用 4.0 国际许可协议
                </a>
                进行许可。
            </Container>
        </footer>
    );
};

export default Footer;