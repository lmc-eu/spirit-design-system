import { ReactNode } from 'react';
import {
  SpiritInputElementPropsWithRef,
  StyleProps,
  ValidationTextType,
  HelperTextProps,
  InputBaseProps,
  RequiredProps,
  Validation,
} from './shared';

export type SliderBaseProps = SpiritInputElementPropsWithRef;

export interface SliderProps
  extends SliderBaseProps,
    HelperTextProps,
    InputBaseProps,
    RequiredProps,
    Validation,
    StyleProps {
  isFluid?: boolean;
  isSelected?: boolean;
  label: ReactNode;
  max?: number;
  min?: number;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  step?: number;
  validationText?: ValidationTextType;
  value: number;
}

export interface SpiritSliderProps extends SliderProps {}

export interface UncontrolledSliderProps extends Omit<SliderProps, 'onChange' | 'value'> {
  value?: number;
}
