import { ChildrenProps, StyleProps, Validation, InputBase, ValueBase } from './shared';
import { LabelProps } from './label';
import { MessageProps } from './message';

interface InputProps extends InputBase, Validation, ValueBase<string | number> {}

export interface CheckboxFieldProps extends ChildrenProps, StyleProps, LabelProps, InputProps, MessageProps {
  /** Whether the checkbox is indeterminate */
  indeterminate?: boolean;
  /** Text of control label */
  label?: string;
  /** Identificator of input */
  id?: string;
  /** Whether the checkbox is checked */
  checked?: boolean;
}

export interface SpiritCheckboxFieldProps extends CheckboxFieldProps {
  /** Whether the label should be displayed */
  isLabelHidden?: boolean;
}
