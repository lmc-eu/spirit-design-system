import classNames from 'classnames';
import { useClassNamePrefix } from '../../hooks/useClassNamePrefix';
import { SpiritTextFieldProps, TextFieldProps } from '../../types';
import { capitalize } from '../../utils/capitalize';

export interface TextFieldStyles {
  /** className props */
  classProps: {
    root: string;
    label: string;
    input: string;
    message: string;
  };
  /** props to be passed to the input element */
  props: TextFieldProps;
}

export function useTextFieldStyleProps(props: SpiritTextFieldProps): TextFieldStyles {
  const { validationState, isLabelHidden, ...restProps } = props;
  const { disabled, required, type } = restProps;

  const mainClass = `${capitalize(type)}Field`;
  const textFieldClass = useClassNamePrefix(mainClass);
  const textFieldDisabledClass = `${textFieldClass}--disabled`;
  const textFieldValidationClass = `${textFieldClass}--${validationState}`;
  const textFieldInputClass = `${textFieldClass}__input`;
  const textFieldLabelClass = `${textFieldClass}__label`;
  const textFieldLabelRequiredClass = `${textFieldClass}__label--required`;
  const textFieldLabelHiddenClass = `${textFieldClass}__label--hidden`;
  const textFieldMessageClass = `${textFieldClass}__message`;

  const rootStyles = classNames(textFieldClass, {
    [textFieldDisabledClass]: disabled,
    [textFieldValidationClass]: validationState,
  });
  const labelStyles = classNames(textFieldLabelClass, {
    [textFieldLabelRequiredClass]: required,
    [textFieldLabelHiddenClass]: isLabelHidden,
  });

  return {
    classProps: {
      root: rootStyles,
      label: labelStyles,
      input: textFieldInputClass,
      message: textFieldMessageClass,
    },
    props: restProps,
  };
}
