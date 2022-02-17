import { ReactNode } from 'react';

export * from './dom';
export * from './events';
export * from './style';

export interface ChildrenProps {
  /** The content to display in the button. */
  children?: ReactNode | string;
}
