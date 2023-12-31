import BLOG from '@/lib/config';

const Footer = () => (
  <footer className="footer footer-center p-4 text-xs">
    {`Copyright © ${new Date().getFullYear()} - All right reserved by ${
      BLOG.repository.owner
    }`}
  </footer>
);

export default Footer;
