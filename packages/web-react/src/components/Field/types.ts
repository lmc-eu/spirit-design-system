import { ElementType, JSXElementConstructor, ReactNode } from 'react';
import { ValidationTextProp } from '../../types';
import { RegisterType } from './useAriaIds';

export interface FieldElementTypeProps<T extends ElementType = 'div'> {
  /**
   * The HTML element or React element used to render the pill, e.g. 'div', 'span'.
   *
   * @default 'div'
   */
  elementType?: T | JSXElementConstructor<unknown>;
}

export interface FieldProps<T extends ElementType = 'div'> extends FieldElementTypeProps<T> {
  className?: string;
  id?: string;
  registerAria?: RegisterType;
}

export interface HelperTextProps<T extends ElementType = 'div'> extends FieldProps<T> {
  helperText: ReactNode;
}

export interface ValidationTextProps<T extends ElementType = 'div'> extends FieldProps<T>, ValidationTextProp {}
