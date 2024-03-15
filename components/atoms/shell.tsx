import { compose } from '@/libs/twc';

type Props = {
  children?: React.ReactNode;
  className?: string;
};

const Shell = ({ children, className }: Props) => (
  <span className={compose('inline-flex max-w-max gap-[1ch] align-baseline', className)}>
    <span className="text-primary">$</span>
    <span className="inline-block overflow-hidden whitespace-nowrap border-primary pr-[1ch] font-mono md:motion-safe:animate-type md:border-r-[1ch]">
      {children}
    </span>
  </span>
);

export default Shell;
