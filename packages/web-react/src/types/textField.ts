import { ChildrenProps, StyleProps, TextInputBase, InputBase, Validation, ValueBase } from './shared';
import { LabelProps } from './label';
import { MessageProps } from './message';

interface InputProps extends InputBase, Validation, ValueBase<string | number>, TextInputBase {}

export interface TextFieldProps extends ChildrenProps, StyleProps, LabelProps, InputProps, MessageProps {
  /** Text of control label */
  label?: string;
  /** Identificator of input */
  id?: string;
}

export interface SpiritTextFieldProps extends TextFieldProps {
  /** Whether the label should be displayed */
  isLabelHidden?: boolean;
}
