import {
  ChildrenProps,
  HelperTextProps,
  InputBaseProps,
  ItemProps,
  SpiritInputElementPropsWithRef,
  Validation,
} from './shared';
import { LabelProps } from './label';
import { MessageProps } from './message';

export type CheckboxElementBaseProps = SpiritInputElementPropsWithRef;

export interface CheckboxFieldProps
  extends CheckboxElementBaseProps,
    ChildrenProps,
    LabelProps,
    ItemProps,
    MessageProps,
    InputBaseProps,
    Validation,
    HelperTextProps {
  /** Whether the checkbox is indeterminate */
  indeterminate?: boolean;
  /** Whether the checkbox is checked */
  isChecked?: boolean;
  /** Text of control label */
  label: string;
}

export interface SpiritCheckboxFieldProps extends CheckboxFieldProps {}
