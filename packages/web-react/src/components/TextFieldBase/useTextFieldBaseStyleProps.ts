import classNames from 'classnames';
import { useClassNamePrefix } from '../../hooks';
import { SpiritTextFieldBaseProps, TextFieldBaseProps } from '../../types';

export interface TextFieldBaseStyles {
  /** className props */
  classProps: {
    root: string;
    label: string;
    input: string;
    helperText: string;
    validationText: string;
    passwordToggle: string;
    passwordToggleButton: string;
    passwordToggleIcon: string;
  };
  /** props to be passed to the input element */
  props: TextFieldBaseProps;
}

export function useTextFieldBaseStyleProps(props: SpiritTextFieldBaseProps): TextFieldBaseStyles {
  const { isFluid, isMultiline, isLabelHidden, validationState, ...restProps } = props;
  const { isDisabled, isRequired } = restProps;

  const TextFieldBaseClass = useClassNamePrefix(isMultiline ? 'TextArea' : 'TextField');
  const TextFieldBaseDisabledClass = `${TextFieldBaseClass}--disabled`;
  const TextFieldBaseFluidClass = `${TextFieldBaseClass}--fluid`;
  const TextFieldBaseValidationClass = `${TextFieldBaseClass}--${validationState}`;
  const TextFieldBaseInputClass = `${TextFieldBaseClass}__input`;
  const TextFieldBaseLabelClass = `${TextFieldBaseClass}__label`;
  const TextFieldBaseLabelRequiredClass = `${TextFieldBaseClass}__label--required`;
  const TextFieldBaseLabelHiddenClass = `${TextFieldBaseClass}__label--hidden`;
  const TextFieldBaseValidationTextClass = `${TextFieldBaseClass}__validationText`;
  const TextFieldBasePasswordToggleClass = `${TextFieldBaseClass}__passwordToggle`;
  const TextFieldBasePasswordToggleButtonClass = `${TextFieldBaseClass}__passwordToggle__button`;
  const TextFieldBasePasswordToggleIconClass = `${TextFieldBaseClass}__passwordToggle__icon`;
  const TextFieldBaseHelperTextClass = `${TextFieldBaseClass}__helperText`;

  const rootStyles = classNames(TextFieldBaseClass, {
    [TextFieldBaseDisabledClass]: isDisabled,
    [TextFieldBaseFluidClass]: isFluid,
    [TextFieldBaseValidationClass]: validationState,
  });
  const labelStyles = classNames(TextFieldBaseLabelClass, {
    [TextFieldBaseLabelRequiredClass]: isRequired,
    [TextFieldBaseLabelHiddenClass]: isLabelHidden,
  });

  return {
    classProps: {
      root: rootStyles,
      label: labelStyles,
      input: TextFieldBaseInputClass,
      helperText: TextFieldBaseHelperTextClass,
      validationText: TextFieldBaseValidationTextClass,
      passwordToggle: TextFieldBasePasswordToggleClass,
      passwordToggleButton: TextFieldBasePasswordToggleButtonClass,
      passwordToggleIcon: TextFieldBasePasswordToggleIconClass,
    },
    props: {
      ...restProps,
      isMultiline,
    },
  };
}
