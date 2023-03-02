import {
  ChildrenProps,
  HelperTextProps,
  InputBaseProps,
  PasswordToggleAdornmentProp,
  SpiritInputElementProps,
  TextInputProps,
  Validation,
} from './shared';
import { LabelProps } from './label';
import { MessageProps } from './message';

export type TextFieldType = 'email' | 'number' | 'password' | 'search' | 'tel' | 'text' | 'url';

export type TextFieldElementBaseProps = SpiritInputElementProps;

export interface TextFieldProps
  extends TextFieldElementBaseProps,
    InputBaseProps,
    PasswordToggleAdornmentProp,
    ChildrenProps,
    LabelProps,
    MessageProps,
    HelperTextProps,
    TextInputProps,
    Validation {
  /** The type of text field */
  type?: TextFieldType;
}

export interface SpiritTextFieldProps extends TextFieldProps {}
