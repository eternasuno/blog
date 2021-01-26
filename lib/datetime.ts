import { format, parseISO } from 'date-fns';

export const formatDateTime = (dateTime: string) =>
    format(parseISO(dateTime), 'LLLL    d, yyyy');

export const getFullYear = (dateTime: string) =>
    parseISO(dateTime).getFullYear();