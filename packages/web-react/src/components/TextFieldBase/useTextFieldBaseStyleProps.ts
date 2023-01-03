import classNames from 'classnames';
import { useClassNamePrefix } from '../../hooks/useClassNamePrefix';
import { SpiritTextFieldBaseProps, TextFieldBaseProps } from '../../types';

export interface TextFieldBaseStyles {
  /** className props */
  classProps: {
    root: string;
    label: string;
    input: string;
    message: string;
  };
  /** props to be passed to the input element */
  props: TextFieldBaseProps;
}

export function useTextFieldBaseStyleProps(props: SpiritTextFieldBaseProps): TextFieldBaseStyles {
  const { validationState, isLabelHidden, isFluid, isMultiline, ...restProps } = props;
  const { isDisabled, isRequired } = restProps;

  const TextFieldBaseClass = useClassNamePrefix(isMultiline ? 'TextArea' : 'TextField');
  const TextFieldBaseDisabledClass = `${TextFieldBaseClass}--disabled`;
  const TextFieldBaseFluidClass = `${TextFieldBaseClass}--fluid`;
  const TextFieldBaseValidationClass = `${TextFieldBaseClass}--${validationState}`;
  const TextFieldBaseInputClass = `${TextFieldBaseClass}__input`;
  const TextFieldBaseLabelClass = `${TextFieldBaseClass}__label`;
  const TextFieldBaseLabelRequiredClass = `${TextFieldBaseClass}__label--required`;
  const TextFieldBaseLabelHiddenClass = `${TextFieldBaseClass}__label--hidden`;
  const TextFieldBaseMessageClass = `${TextFieldBaseClass}__message`;

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
      message: TextFieldBaseMessageClass,
    },
    props: {
      ...restProps,
      isMultiline,
    },
  };
}
