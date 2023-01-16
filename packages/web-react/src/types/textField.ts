import { ChildrenProps, StyleProps, TextInputProps, TransferProps } from './shared';
import { LabelProps } from './label';
import { MessageProps } from './message';

export type TextFieldType = 'email' | 'number' | 'password' | 'search' | 'tel' | 'text' | 'url';

export interface TextFieldProps
  extends ChildrenProps,
    StyleProps,
    LabelProps,
    MessageProps,
    TextInputProps,
    TransferProps {
  /** If the input has password toggle */
  hasPasswordToggle?: boolean;
  /** The type of text field */
  type?: TextFieldType;
  /** The input width */
  inputWidth?: number;
}

export interface SpiritTextFieldProps extends TextFieldProps {}
