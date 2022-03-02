import { ReactNode } from 'react';

export interface LabelProps {
  children?: ReactNode;
  htmlFor?: string; // for compatibility with React
  for?: string;
}
