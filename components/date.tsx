import { parseISO, format } from 'date-fns';
import { FunctionComponent } from 'react';

type DateProps = {
  dateString: string;
};

export const Date: FunctionComponent<DateProps> = ({ dateString }) => {
  const date = parseISO(dateString);
  return <time dateTime={dateString}>{format(date, 'LLLL d, yyyy')}</time>;
};
