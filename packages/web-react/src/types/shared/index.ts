import { ReactNode, ElementType, JSXElementConstructor } from 'react';

export * from './adornments';
export * from './alignments';
export * from './colors';
export * from './dialogs';
export * from './dictionaries';
export * from './directions';
export * from './dom';
export * from './dragAndDrop';
export * from './element';
export * from './events';
export * from './inputs';
export * from './item';
export * from './refs';
export * from './rest';
export * from './style';
export * from './tokens';

export interface ChildrenProps {
  /** The content to display in the component. */
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
