import { parseISO, format } from 'date-fns';

export const formatDate = (date: string) => {
  return format(parseISO(date), 'MMMM dd, yyyy');
  //   const newDate = Date.parse(date);
};
