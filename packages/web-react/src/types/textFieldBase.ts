import { ChildrenProps, TextInputProps } from './shared';
import { TextAreaProps } from './textArea';
import { TextFieldProps, TextFieldType } from './textField';
import { PasswordToggleAdornmentProp } from './shared/adornments';

export interface TextFieldBaseMultiLineProps {
  /** Whether the input is TextArea. */
  isMultiline?: boolean;
}

export interface TextFieldBaseProps extends ChildrenProps, TextFieldProps, TextAreaProps, TextFieldBaseMultiLineProps {}

export interface SpiritTextFieldBaseProps extends TextFieldBaseProps {}

export interface TextFieldBaseInputProps extends TextInputProps, TextFieldBaseMultiLineProps {
  /** The input width */
  inputWidth?: number;
  /** The type of text field */
  type?: TextFieldType;
}

export interface SpiritTextFieldBaseInputProps extends TextFieldBaseInputProps {}

export interface PasswordToggleProps {
  isPasswordShown: boolean;
  onToggleClick: () => void;
}

export interface TextFieldBasePasswordToggleProps
  extends ChildrenProps,
    SpiritTextFieldBaseInputProps,
    PasswordToggleAdornmentProp {}

export interface SpiritTextFieldBasePasswordToggleProps extends TextFieldBasePasswordToggleProps, PasswordToggleProps {}
