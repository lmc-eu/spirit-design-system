import {
  ChildrenProps,
  HelperTextProps,
  InputBaseProps,
  ItemProps,
  SpiritInputElementPropsWithRef,
  Validation,
  ValidationTextProp,
} from './shared';
import { LabelProps } from './label';

export type CheckboxElementBaseProps = SpiritInputElementPropsWithRef;

export interface CheckboxProps
  extends CheckboxElementBaseProps,
    ChildrenProps,
    LabelProps,
    ItemProps,
    InputBaseProps,
    Validation,
    ValidationTextProp,
    HelperTextProps {
  /** Whether the checkbox is indeterminate */
  indeterminate?: boolean;
  /** Whether the checkbox is checked */
  isChecked?: boolean;
  /** Text of control label */
  label: string;
  /** @deprecated The "id" property will be required instead of optional starting from the next major version. */
  id?: string;
}

export interface SpiritCheckboxProps extends CheckboxProps {}
