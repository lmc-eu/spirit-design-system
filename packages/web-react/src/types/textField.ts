import { ChildrenProps, StyleProps, TextInputBase, InputBase, Validation, ValueBase } from './shared';
import { LabelProps } from './label';
import { MessageProps } from './message';

interface InputProps extends InputBase, Validation, ValueBase<string | number>, TextInputBase {}

export type TextFieldType = 'text' | 'password';

export interface TextFieldProps extends ChildrenProps, StyleProps, LabelProps, InputProps, MessageProps {
  /** Text of control label */
  label?: string;
  /** Identificator of input */
  id?: string;
  /** The type of text field */
  type: TextFieldType;
  /** The placeholder for input. */
  placeholder?: string;
  /** Whether the input is disabled. */
  isDisabled?: boolean;
  /** Whether the input is required. */
  isRequired?: boolean;
  /** Value of the input. */
  value?: string | number;
}

export interface SpiritTextFieldProps extends TextFieldProps {
  /** Whether the label should be displayed */
  isLabelHidden?: boolean;
}
