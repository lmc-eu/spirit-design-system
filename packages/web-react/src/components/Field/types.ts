import { ElementType, ReactNode } from 'react';
import { ChildrenProps, StyleProps, TransferProps, ValidationTextProp } from '../../types';
import { RegisterType } from './useAriaIds';

export interface FieldElementTypeProps<T extends ElementType = 'div'> {
  /**
   * The HTML element or React element used to render the pill, e.g. 'div', 'span'.
   *
   * @default 'div'
   */
  elementType?: T;
}

export interface FieldProps<T extends ElementType = 'div'> extends FieldElementTypeProps<T> {
  id?: string;
  registerAria?: RegisterType;
}

export interface HelperTextProps<T extends ElementType = 'div'>
  extends FieldProps<T>,
    StyleProps,
    ChildrenProps,
    TransferProps {
  helperText: ReactNode;
}

export interface ValidationTextProps<T extends ElementType = 'div'>
  extends FieldProps<T>,
    ValidationTextProp,
    StyleProps,
    ChildrenProps,
    TransferProps {}
