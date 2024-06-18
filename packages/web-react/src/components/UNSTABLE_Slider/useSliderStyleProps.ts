import classNames from 'classnames';
import { useClassNamePrefix } from '../../hooks';
import { SpiritSliderProps } from '../../types';

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
  const { isSelected, isFluid, isLabelHidden, isRequired, validationState, ...restProps } = props;

  const sliderClass = useClassNamePrefix('UNSTABLE_Slider');
  const rootClass = classNames(sliderClass);
  const isSelectedClass = `${sliderClass}--selected`;
  const isFluidClass = `${sliderClass}--fluid`;
  const validationStateClass = `${sliderClass}--${validationState}`;
  const labelClass = classNames(`${sliderClass}__label`);
  const isLabelHiddenClass = `${sliderClass}__label--hidden`;
  const isRequiredClass = `${sliderClass}__label--required`;
  const inputClass = `${sliderClass}__input`;
  const helperTextClass = `${sliderClass}__helperText`;
  const validationTextClass = `${sliderClass}__validationText`;

  return {
    classProps: {
      root: classNames(rootClass, {
        [isSelectedClass]: isSelected,
        [isFluidClass]: isFluid,
        [validationStateClass]: validationState,
      }),
      label: classNames(labelClass, {
        [isLabelHiddenClass]: isLabelHidden,
        [isRequiredClass]: isRequired,
      }),
      input: inputClass,
      helperText: helperTextClass,
      validationText: validationTextClass,
    },
    props: restProps,
  };
}
