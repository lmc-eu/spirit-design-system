import { ReactNode, ElementType, JSXElementConstructor } from 'react';

export * from './colors';
export * from './dom';
export * from './events';
export * from './inputs';
export * from './style';
export * from './typography';
export * from './rest';

export interface ChildrenProps {
  /** The content to display in the button. */
  children?: ReactNode | string;
}

export interface ElementTypeProps<T extends ElementType = 'div'> {
  /**
   * The HTML element or React element used to render the component.
   *
   * @default 'div'
   */
  elementType?: T | JSXElementConstructor<unknown>;
}

export enum SpiritBreakpoints {
  TABLET = 'tablet',
  DESKTOP = 'desktop',
}

/**
 * This is actual type for all aria-* props which have value 'true' or 'false' is called Booleanish.
 * Unfortunately it is not exported, and you must create it manually.
 */
export type Booleanish = boolean | 'true' | 'false';
