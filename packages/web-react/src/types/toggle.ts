import { ChangeEvent } from 'react';
import { LabelProps } from './label';
import {
  ChildrenProps,
  HelperTextProps,
  InputBaseProps,
  RequiredProps,
  SpiritInputElementPropsWithRef,
  StyleProps,
  Validation,
  ValidationTextType,
} from './shared';

export type ToggleElementBaseProps = SpiritInputElementPropsWithRef;

export interface ToggleProps
  extends ToggleElementBaseProps,
    ChildrenProps,
    LabelProps,
    RequiredProps,
    InputBaseProps,
    HelperTextProps,
    StyleProps,
    Validation {
  hasIndicators?: boolean;
  isChecked?: boolean;
  isDisabled?: boolean;
  isFluid?: boolean;
  isLabelHidden?: boolean;
  label: string;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  validationText?: ValidationTextType;
}

export interface SpiritToggleProps extends ToggleProps {}
