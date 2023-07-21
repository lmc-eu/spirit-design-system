import {
  ChildrenProps,
  HelperTextProps,
  InputBaseProps,
  ItemProps,
  SpiritInputElementPropsWithRef,
  Validation,
} from './shared';
import { LabelProps } from './label';

export type RadioElementBaseProps = SpiritInputElementPropsWithRef;

export interface RadioProps
  extends RadioElementBaseProps,
    ChildrenProps,
    LabelProps,
    ItemProps,
    HelperTextProps,
    InputBaseProps,
    Omit<Validation, 'isRequired'> {
  /** Whether the checkbox is checked */
  isChecked?: boolean;
  /** Text of control label */
  label: string;
}

export interface SpiritRadioProps extends RadioProps {}
