import { Heading } from '@lmc-eu/spirit-web-react';
import { type ReactNode } from 'react';

interface HeadLineProps {
  children: ReactNode;
}

const HeadLine = ({ children }: HeadLineProps) => (
  <Heading elementType="h1" size="xlarge" emphasis="bold">
    {children}
  </Heading>
);

export default HeadLine;
