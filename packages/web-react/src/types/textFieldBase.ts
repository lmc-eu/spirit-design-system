import { ReactNode } from 'react';
import {
  ChildrenProps,
  PasswordToggleAdornmentProp,
  RequiredProps,
  SizesDictionaryType,
  TextInputProps,
} from './shared';
import { TextAreaProps } from './textArea';
import { TextFieldProps } from './textField';

export interface TextFieldBaseMultiLineProps {
  /** Whether the input is TextArea. */
  isMultiline?: boolean;
}

export type TextFieldBaseProps = ChildrenProps & TextFieldBaseMultiLineProps & (TextFieldProps | TextAreaProps);

export type SpiritTextFieldBaseProps = {
  label: ReactNode;
} & TextFieldBaseProps;

export type TextFieldBaseSizeType<S> = SizesDictionaryType<S>;

export type TextFieldBaseInputProps = TextInputProps & TextFieldBaseMultiLineProps;

export interface SpiritTextFieldBaseInputProps extends RequiredProps, TextFieldBaseInputProps {}

export interface PasswordToggleProps<S = void> {
  isDisabled?: boolean;
  isPasswordShown: boolean;
  onToggleClick: () => void;
  size?: TextFieldBaseSizeType<S>;
}

export interface TextFieldBasePasswordToggleProps<S = void>
  extends ChildrenProps,
    SpiritTextFieldBaseInputProps,
    PasswordToggleAdornmentProp {
  size?: TextFieldBaseSizeType<S>;
}

export interface SpiritTextFieldBasePasswordToggleProps extends TextFieldBasePasswordToggleProps, PasswordToggleProps {}
