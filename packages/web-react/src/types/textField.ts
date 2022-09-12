import { ChildrenProps, StyleProps, TextInputBase, InputBase, Validation, ValueBase, TransferProps } from './shared';
import { LabelProps } from './label';
import { MessageProps } from './message';

interface InputProps extends InputBase, Validation, ValueBase<string | number>, TextInputBase {}

export type TextFieldType = 'text' | 'password' | 'email';

export interface TextFieldProps extends ChildrenProps, StyleProps, LabelProps, InputProps, MessageProps, TransferProps {
  /** The type of text field */
  type?: TextFieldType;
}

export interface SpiritTextFieldProps extends TextFieldProps {
  /** Whether the label should be displayed */
  isLabelHidden?: boolean;
  /** Whether the width should be controlled by container */
  isFluid?: boolean;
}
