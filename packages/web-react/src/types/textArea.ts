import {
  ChildrenProps,
  HelperTextProps,
  InputBaseProps,
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
    Validation {
  /** Whether is field auto resizing which adjusts its height while typing */
  isAutoResizing?: boolean;
  /** Maximum field height with automatic height control */
  autoResizingMaxHeight?: number;
  /** @deprecated The "id" property will be required instead of optional starting from the next major version. */
  id?: string;
}

export interface SpiritTextAreaProps extends TextAreaProps {}
