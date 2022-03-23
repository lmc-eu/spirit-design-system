import { ElementType, JSXElementConstructor } from 'react';
import { ChildrenProps } from './shared';

export type AlertColor = 'success' | 'danger';

export interface AriaAlertElementTypeProps<T extends ElementType = 'div'> {
  /**
   * The HTML element or React element used to render the alert, e.g. 'div', 'span'.
   *
   * @default 'div'
   */
  elementType?: T | JSXElementConstructor<unknown>;
}

export interface SpiritAlertProps<T extends ElementType = 'div'> extends AriaAlertElementTypeProps<T>, ChildrenProps {
  /** The color of the alert. */
  color?: AlertColor;
}
