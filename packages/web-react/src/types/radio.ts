import { type ReactNode } from 'react';
import { type LabelProps } from './label';
import {
  type ChildrenProps,
  type HelperTextProps,
  type InputBaseProps,
  type ItemProps,
  type RequiredProps,
  type SpiritInputElementPropsWithRef,
  type Validation,
} from './shared';

export type RadioElementBaseProps = SpiritInputElementPropsWithRef;

export interface RadioProps
  extends RadioElementBaseProps,
    ChildrenProps,
    LabelProps,
    ItemProps,
    HelperTextProps,
    InputBaseProps,
    RequiredProps,
    Omit<Validation, 'isRequired'> {
  /** Whether the checkbox is checked */
  isChecked?: boolean;
  /** Text of control label */
  label: ReactNode;
}

export interface SpiritRadioProps extends RadioProps {}
