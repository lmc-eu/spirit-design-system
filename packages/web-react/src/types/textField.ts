import { LabelProps } from './label';
import {
  ChildrenProps,
  HelperTextProps,
  InputBaseProps,
  PasswordToggleAdornmentProp,
  RequiredProps,
  SpiritInputElementPropsWithRef,
  TextInputProps,
  Validation,
  ValidationTextProp,
} from './shared';

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
    RequiredProps,
    Validation {
  /** The type of text field */
  type?: TextFieldType;
}

export interface SpiritTextFieldProps extends TextFieldProps {
  label: string;
}
