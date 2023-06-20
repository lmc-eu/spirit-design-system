import {
  ChildrenProps,
  HelperTextProps,
  InputBaseProps,
  SpiritTextAreaElementPropsWithRef,
  TextInputProps,
  Validation,
} from './shared';
import { LabelProps } from './label';
import { MessageProps } from './message';

export type TextAreaElementBaseProps = SpiritTextAreaElementPropsWithRef;

export interface TextAreaProps
  extends TextAreaElementBaseProps,
    InputBaseProps,
    ChildrenProps,
    LabelProps,
    MessageProps,
    HelperTextProps,
    TextInputProps,
    Validation {
  /** Whether is field auto resizing which adjusts its height while typing */
  isAutoResizing?: boolean;
  /** Maximum field height with automatic height control */
  autoResizingMaxHeight?: number;
}

export interface SpiritTextAreaProps extends TextAreaProps {}
