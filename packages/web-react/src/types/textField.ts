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
  /** The type of text field */
  type?: TextFieldType;
  /** The input width */
  inputWidth?: number;
}

export interface SpiritTextFieldProps extends TextFieldProps {}
