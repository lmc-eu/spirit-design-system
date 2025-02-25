import classNames from 'classnames';
import { useClassNamePrefix } from '../../hooks';
import { SpiritCheckboxProps, CheckboxProps } from '../../types';

export interface CheckboxStyles {
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
  props: CheckboxProps;
}

export function useCheckboxStyleProps(props: SpiritCheckboxProps): CheckboxStyles {
  const { validationState, isItem, isLabelHidden, ...restProps } = props;
  const { isDisabled, isRequired } = restProps;

  const checkboxClass = useClassNamePrefix('Checkbox');
  const checkboxDisabledClass = `${checkboxClass}--disabled`;
  const checkboxItemClass = `${checkboxClass}--item`;
  const checkboxInputClass = `${checkboxClass}__input`;
  const checkboxTextClass = `${checkboxClass}__text`;
  const checkboxLabelClass = `${checkboxClass}__label`;
  const checkboxLabelRequiredClass = `${checkboxClass}__label--required`;
  const checkboxLabelHiddenClass = `${checkboxClass}__label--hidden`;
  const checkboxHelperTextClass = `${checkboxClass}__helperText`;
  const checkboxValidationTextClass = `${checkboxClass}__validationText`;
  const checkboxValidationClass = `${checkboxClass}--${validationState}`;

  const rootStyles = classNames(checkboxClass, {
    [checkboxDisabledClass]: isDisabled,
    [checkboxItemClass]: isItem,
    [checkboxValidationClass]: validationState,
  });
  const labelStyles = classNames(checkboxLabelClass, {
    [checkboxLabelRequiredClass]: isRequired,
    [checkboxLabelHiddenClass]: isLabelHidden,
  });

  return {
    classProps: {
      root: rootStyles,
      text: checkboxTextClass,
      label: labelStyles,
      input: checkboxInputClass,
      helperText: checkboxHelperTextClass,
      validationText: checkboxValidationTextClass,
    },
    props: {
      ...restProps,
      validationState,
    },
  };
}
