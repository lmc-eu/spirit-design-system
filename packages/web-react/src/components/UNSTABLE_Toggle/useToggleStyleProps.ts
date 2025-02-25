import classNames from 'classnames';
import { useClassNamePrefix } from '../../hooks';
import { SpiritToggleProps } from '../../types';

export interface ToggleStyles<T> {
  classProps: {
    root: string;
    label: string;
    text: string;
    helperText: string;
    input: string;
    validationText: string;
  };
  props: T;
}

export function useToggleStyleProps(props: SpiritToggleProps): ToggleStyles<SpiritToggleProps> {
  const {
    isRequired = false,
    isFluid = false,
    isDisabled = false,
    isLabelHidden = false,
    validationState,
    hasIndicators = false,
    ...restProps
  } = props;

  const toggleClass = useClassNamePrefix('UNSTABLE_Toggle');
  const toggleFluidClass = `${toggleClass}--fluid`;
  const toggleDisabledClass = `${toggleClass}--disabled`;
  const toggleTextClass = `${toggleClass}__text`;
  const toggleLabelClass = `${toggleClass}__label`;
  const toggleHiddenLabelClass = `${toggleLabelClass}--hidden`;
  const toggleValidationClass = `${toggleClass}--${validationState}`;
  const toggleRequiredClass = `${toggleLabelClass}--required`;
  const toggleInputClass = `${toggleClass}__input`;
  const toggleInputIndicatorsClass = `${toggleInputClass}--indicators`;
  const toggleHelperTextClass = `${toggleClass}__helperText`;
  const toggleValidationTextClass = `${toggleClass}__validationText`;
  const rootClass = classNames(toggleClass, {
    [toggleFluidClass]: isFluid,
    [toggleDisabledClass]: isDisabled,
    [toggleValidationClass]: validationState,
  });
  const labelClass = classNames(toggleLabelClass, {
    [toggleRequiredClass]: isRequired,
    [toggleHiddenLabelClass]: isLabelHidden,
  });
  const inputClass = classNames(toggleInputClass, {
    [toggleInputIndicatorsClass]: hasIndicators,
  });

  return {
    classProps: {
      root: rootClass,
      label: labelClass,
      text: toggleTextClass,
      helperText: toggleHelperTextClass,
      input: inputClass,
      validationText: toggleValidationTextClass,
    },
    props: { ...restProps, validationState, isDisabled, isRequired },
  };
}
