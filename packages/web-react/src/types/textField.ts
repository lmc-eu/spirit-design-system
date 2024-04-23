import {
  ChildrenProps,
  HelperTextProps,
  InputBaseProps,
  PasswordToggleAdornmentProp,
  SpiritInputElementPropsWithRef,
  TextInputProps,
  Validation,
  ValidationTextProp,
} from './shared';
import { LabelProps } from './label';

export type TextFieldType = 'email' | 'number' | 'password' | 'search' | 'tel' | 'text' | 'url';

export type TextFieldElementBaseProps = SpiritInputElementPropsWithRef;

export interface TextFieldProps
  extends TextFieldElementBaseProps,
    InputBaseProps,
    PasswordToggleAdornmentProp,
    ChildrenProps,
    LabelProps,
    HelperTextProps,
    ValidationTextProp,
    TextInputProps,
    Validation {
  /** The type of text field */
  type?: TextFieldType;
}

export interface SpiritTextFieldProps extends TextFieldProps {
  label: string;
}
