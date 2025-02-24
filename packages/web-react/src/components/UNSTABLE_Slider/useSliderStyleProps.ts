import classNames from 'classnames';
import { useClassNamePrefix } from '../../hooks';
import { SpiritSliderProps } from '../../types';
import { useValidationTextStyleProps } from '../Field/useValidationTextStyleProps';

type UseSliderStyleProps = Omit<SpiritSliderProps, 'id' | 'value' | 'label'>;

export interface SliderStyles {
  classProps: {
    root: string;
    label: string;
    input: string;
    helperText: string;
    validationText: string;
  };
  props: UseSliderStyleProps;
}

export function useSliderStyleProps(props: UseSliderStyleProps): SliderStyles {
  const { hasValidationIcon, isDisabled, isFluid, isLabelHidden, validationState, ...restProps } = props;

  const sliderClass = useClassNamePrefix('UNSTABLE_Slider');
  const rootClass = classNames(sliderClass);
  const isDisabledClass = `${sliderClass}--disabled`;
  const isFluidClass = `${sliderClass}--fluid`;
  const validationStateClass = `${sliderClass}--${validationState}`;
  const labelClass = classNames(`${sliderClass}__label`);
  const isLabelHiddenClass = `${sliderClass}__label--hidden`;
  const inputClass = `${sliderClass}__input`;
  const helperTextClass = `${sliderClass}__helperText`;
  const validationTextClass = useValidationTextStyleProps(sliderClass, hasValidationIcon);

  return {
    classProps: {
      root: classNames(rootClass, {
        [isDisabledClass]: isDisabled,
        [isFluidClass]: isFluid,
        [validationStateClass]: validationState,
      }),
      label: classNames(labelClass, {
        [isLabelHiddenClass]: isLabelHidden,
      }),
      input: inputClass,
      helperText: helperTextClass,
      validationText: validationTextClass,
    },
    props: restProps,
  };
}
