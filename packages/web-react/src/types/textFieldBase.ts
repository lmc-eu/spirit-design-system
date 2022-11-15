import { ChildrenProps } from './shared';
import { TextAreaProps } from './textArea';
import { TextFieldProps } from './textField';

export interface TextFieldBaseProps extends ChildrenProps, TextFieldProps, TextAreaProps {
  /** Whether the input is TextArea. */
  isMultiline?: boolean;
}

export interface SpiritTextFieldBaseProps extends TextFieldBaseProps {}
