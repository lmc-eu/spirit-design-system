import { ElementType, JSXElementConstructor } from 'react';
import { ChildrenProps, StyleProps } from './shared';

export type AlertColor = 'success' | 'danger' | 'informative';

export interface AriaAlertElementTypeProps<T extends ElementType = 'div'> {
  /**
   * The HTML element or React element used to render the alert, e.g. 'div', 'span'.
   *
   * @default 'div'
   */
  elementType?: T | JSXElementConstructor<unknown>;
}

export interface AlertProps extends ChildrenProps, StyleProps {}

export interface SpiritAlertProps<T extends ElementType = 'div'> extends AriaAlertElementTypeProps<T>, AlertProps {
  /** The color of the alert. */
  color?: AlertColor;
}
