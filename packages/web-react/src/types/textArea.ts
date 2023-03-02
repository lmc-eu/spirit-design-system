import {
  ChildrenProps,
  HelperTextProps,
  InputBaseProps,
  SpiritTextAreaElementProps,
  TextInputProps,
  Validation,
} from './shared';
import { LabelProps } from './label';
import { MessageProps } from './message';

export type TextAreaElementBaseProps = SpiritTextAreaElementProps;

export interface TextAreaProps
  extends TextAreaElementBaseProps,
    InputBaseProps,
    ChildrenProps,
    LabelProps,
    MessageProps,
    HelperTextProps,
    TextInputProps,
    Validation {
  /** Maximum characters length */
  maxLength?: number;
}

export interface SpiritTextAreaProps extends TextAreaProps {}
