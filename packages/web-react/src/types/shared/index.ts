import { ReactNode } from 'react';

export * from './dom';
export * from './events';
export * from './inputs';
export * from './style';
export * from './typography';

export interface ChildrenProps {
  /** The content to display in the button. */
  children?: ReactNode | string;
}

export enum SpiritBreakpoints {
  TABLET = 'tablet',
  DESKTOP = 'desktop',
}
