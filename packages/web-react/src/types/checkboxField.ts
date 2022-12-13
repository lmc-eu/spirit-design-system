import { ChildrenProps, StyleProps, InputProps, ItemProps, TransferProps } from './shared';
import { LabelProps } from './label';
import { MessageProps } from './message';

export interface CheckboxFieldProps
  extends ChildrenProps,
    StyleProps,
    LabelProps,
    InputProps,
    ItemProps,
    MessageProps,
    TransferProps {
  /** Whether the checkbox is indeterminate */
  indeterminate?: boolean;
  /** Whether the checkbox is checked */
  isChecked?: boolean;
}

export interface SpiritCheckboxFieldProps extends CheckboxFieldProps {}
