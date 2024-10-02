import { ChildrenProps, PasswordToggleAdornmentProp, RequiredProps, TextInputProps } from './shared';
import { TextAreaProps } from './textArea';
import { TextFieldProps } from './textField';

export interface TextFieldBaseMultiLineProps {
  /** Whether the input is TextArea. */
  isMultiline?: boolean;
}

export type TextFieldBaseProps = ChildrenProps & TextFieldBaseMultiLineProps & (TextFieldProps | TextAreaProps);

export type SpiritTextFieldBaseProps = TextFieldBaseProps;

export type TextFieldBaseInputProps = TextInputProps & TextFieldBaseMultiLineProps;

export interface SpiritTextFieldBaseInputProps extends RequiredProps, TextFieldBaseInputProps {}

export interface PasswordToggleProps {
  isDisabled?: boolean;
  isPasswordShown: boolean;
  onToggleClick: () => void;
}

export interface TextFieldBasePasswordToggleProps
  extends ChildrenProps,
    SpiritTextFieldBaseInputProps,
    PasswordToggleAdornmentProp {}

export interface SpiritTextFieldBasePasswordToggleProps extends TextFieldBasePasswordToggleProps, PasswordToggleProps {}
