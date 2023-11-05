import parse from 'html-react-parser';

export const htmlParser = typeof window === 'undefined' ? parse : null;
