import classNames from 'classnames';
import { useClassNamePrefix } from '../../hooks';
import { SpiritRadioFieldProps, RadioFieldProps } from '../../types';

export interface RadioFieldStyles {
  /** className props */
  classProps: {
    root: string;
    label: string;
    input: string;
    text: string;
    helperText: string;
  };
  /** props to be passed to the input element */
  props: RadioFieldProps;
}

export function useRadioFieldStyleProps(props: SpiritRadioFieldProps): RadioFieldStyles {
  const { isItem, validationState, isLabelHidden, ...restProps } = props;
  const { isDisabled } = restProps;

  const radioFieldClass = useClassNamePrefix('RadioField');
  const radioFieldDisabledClass = `${radioFieldClass}--disabled`;
  const radioFieldItemClass = `${radioFieldClass}--item`;
  const radioFieldInputClass = `${radioFieldClass}__input`;
  const radioFieldLabelClass = `${radioFieldClass}__label`;
  const radioFieldLabelHiddenClass = `${radioFieldClass}__label--hidden`;
  const radioFieldTextClass = `${radioFieldClass}__text`;
  const radioFieldHelperTextClass = `${radioFieldClass}__helperText`;
  const radioFieldValidationClass = `${radioFieldClass}--${validationState}`;

  const rootStyles = classNames(radioFieldClass, {
    [radioFieldDisabledClass]: isDisabled,
    [radioFieldItemClass]: isItem,
    [radioFieldValidationClass]: validationState,
  });
  const labelStyles = classNames(radioFieldLabelClass, {
    [radioFieldLabelHiddenClass]: isLabelHidden,
  });

  return {
    classProps: {
      root: rootStyles,
      label: labelStyles,
      input: radioFieldInputClass,
      text: radioFieldTextClass,
      helperText: radioFieldHelperTextClass,
    },
    props: restProps,
  };
}
