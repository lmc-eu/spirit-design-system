import classNames from 'classnames';
import { useClassNamePrefix } from '../../hooks/useClassNamePrefix';
import { SpiritCheckboxFieldProps, CheckboxFieldProps } from '../../types';

export interface CheckboxFieldStyles {
  /** className props */
  classProps: {
    root: string;
    text: string;
    label: string;
    input: string;
    message: string;
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
  const checkboxFieldDangerClass = `${checkboxFieldClass}--danger`;
  /* @deprecated Will be removed in next major version. */
  const checkboxFieldErrorClass = `${checkboxFieldClass}--error`;
  const checkboxFieldInputClass = `${checkboxFieldClass}__input`;
  const checkboxFieldTextClass = `${checkboxFieldClass}__text`;
  const checkboxFieldLabelClass = `${checkboxFieldClass}__label`;
  const checkboxFieldLabelRequiredClass = `${checkboxFieldClass}__label--required`;
  const checkboxFieldLabelHiddenClass = `${checkboxFieldClass}__label--hidden`;
  const checkboxFieldMessageClass = `${checkboxFieldClass}__message`;

  const rootStyles = classNames(checkboxFieldClass, {
    [checkboxFieldDisabledClass]: isDisabled,
    [checkboxFieldItemClass]: isItem,
    [checkboxFieldDangerClass]: validationState === 'danger',
    /* @deprecated Will be removed in next major version. */
    [checkboxFieldErrorClass]: validationState === 'error',
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
      message: checkboxFieldMessageClass,
    },
    props: restProps,
  };
}
