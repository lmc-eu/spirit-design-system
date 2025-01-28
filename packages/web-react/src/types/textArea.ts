import { ReactNode } from 'react';
import { LabelProps } from './label';
import {
  ChildrenProps,
  HelperTextProps,
  InputBaseProps,
  RequiredProps,
  SpiritTextAreaElementPropsWithRef,
  TextInputProps,
  Validation,
  ValidationTextProp,
} from './shared';

export type TextAreaElementBaseProps = SpiritTextAreaElementPropsWithRef;

export interface TextAreaProps
  extends TextAreaElementBaseProps,
    InputBaseProps,
    ChildrenProps,
    LabelProps,
    HelperTextProps,
    ValidationTextProp,
    TextInputProps,
    RequiredProps,
    Validation {
  /** Maximum field height with automatic height control */
  autoResizingMaxHeight?: number;
  /** Whether is field auto resizing which adjusts its height while typing */
  isAutoResizing?: boolean;
  /** Label for the textarea, which provides context or description for the field */
  label: ReactNode;
}

export interface SpiritTextAreaProps extends TextAreaProps {}
