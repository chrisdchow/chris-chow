import { parseISO, format } from 'date-fns';
import { FunctionComponent } from 'react';

type DateProps = {
  dateString: string;
  pattern?: string;
};

export const Date: FunctionComponent<DateProps> = ({ dateString, pattern = 'LLLL d, yyyy' }) => {
  const date = parseISO(dateString);
  return <time dateTime={dateString}>{format(date, pattern)}</time>;
};
