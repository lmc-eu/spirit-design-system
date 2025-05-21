import { ReactNode } from 'react';
import { LabelProps } from './label';
import {
  ChildrenProps,
  HelperTextProps,
  InputBaseProps,
  RequiredProps,
  SizesDictionaryType,
  SpiritTextAreaElementPropsWithRef,
  TextInputProps,
  Validation,
  ValidationTextProp,
} from './shared';

export type TextAreaElementBaseProps = Omit<SpiritTextAreaElementPropsWithRef, 'size'>;

export interface TextAreaProps<S = void>
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
  size?: SizesDictionaryType<S>;
}

export interface SpiritTextAreaProps<S = void> extends TextAreaProps<S> {}
