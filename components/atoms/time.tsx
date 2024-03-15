import { format as formatDate, formatISO, parseISO } from 'date-fns';
import type { ComponentProps } from 'react';

type Props = ComponentProps<'time'> & {
  dateTime: string;
  format?: string;
};

const Time = ({ dateTime, format = 'LLLL d, yyyy', ...rest }: Props) => {
  const date = parseISO(dateTime);

  return (
    <time {...rest} dateTime={formatISO(date)}>
      {formatDate(date, format)}
    </time>
  );
};

export default Time;
