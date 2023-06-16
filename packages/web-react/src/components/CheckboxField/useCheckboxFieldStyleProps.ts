import classNames from 'classnames';
import { useClassNamePrefix } from '../../hooks';
import { SpiritCheckboxFieldProps, CheckboxFieldProps } from '../../types';

export interface CheckboxFieldStyles {
  /** className props */
  classProps: {
    root: string;
    text: string;
    label: string;
    input: string;
    helperText: string;
    validationText: string;
  };
  /** props to be passed to the input element */
  props: CheckboxFieldProps;
}

export function useCheckboxFieldStyleProps(props: SpiritCheckboxFieldProps): CheckboxFieldStyles {
  const { validationState, isItem, isLabelHidden, ...restProps } = props;
  const { isDisabled, isRequired } = restProps;

  const checkboxFieldClass = useClassNamePrefix('CheckboxField');
  const checkboxFieldDisabledClass = `${checkboxFieldClass}--disabled`;
  const checkboxFieldItemClass = `${checkboxFieldClass}--item`;
  const checkboxFieldInputClass = `${checkboxFieldClass}__input`;
  const checkboxFieldTextClass = `${checkboxFieldClass}__text`;
  const checkboxFieldLabelClass = `${checkboxFieldClass}__label`;
  const checkboxFieldLabelRequiredClass = `${checkboxFieldClass}__label--required`;
  const checkboxFieldLabelHiddenClass = `${checkboxFieldClass}__label--hidden`;
  const checkboxFieldHelperTextClass = `${checkboxFieldClass}__helperText`;
  const checkboxFieldValidationTextClass = `${checkboxFieldClass}__validationText`;
  const checkboxFieldValidationClass = `${checkboxFieldClass}--${validationState}`;

  const rootStyles = classNames(checkboxFieldClass, {
    [checkboxFieldDisabledClass]: isDisabled,
    [checkboxFieldItemClass]: isItem,
    [checkboxFieldValidationClass]: validationState,
  });
  const labelStyles = classNames(checkboxFieldLabelClass, {
    [checkboxFieldLabelRequiredClass]: isRequired,
    [checkboxFieldLabelHiddenClass]: isLabelHidden,
  });

  return {
    classProps: {
      root: rootStyles,
      text: checkboxFieldTextClass,
      label: labelStyles,
      input: checkboxFieldInputClass,
      helperText: checkboxFieldHelperTextClass,
      validationText: checkboxFieldValidationTextClass,
    },
    props: {
      ...restProps,
      validationState,
    },
  };
}
