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
import { LabelProps } from './label';

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
  /** Whether is field auto resizing which adjusts its height while typing */
  isAutoResizing?: boolean;
  /** Maximum field height with automatic height control */
  autoResizingMaxHeight?: number;
}

export interface SpiritTextAreaProps extends TextAreaProps {}
