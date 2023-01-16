import { useClassNamePrefix } from '../../hooks';
import { SpiritTextFieldBasePasswordToggleProps, TextFieldBaseProps } from '../../types';

export interface TextFieldBasePasswordToggleStyles {
  /** className props */
  classProps: {
    passwordToggle: string;
    passwordToggleButton: string;
    passwordToggleIcon: string;
  };
  /** props to be passed to the input element */
  props: TextFieldBaseProps;
}

export function useTextFieldBasePasswordToggleStyleProps(
  props: SpiritTextFieldBasePasswordToggleProps,
): TextFieldBasePasswordToggleStyles {
  const TextFieldBaseClass = useClassNamePrefix('TextField');
  const TextFieldBasePasswordToggleClass = `${TextFieldBaseClass}__passwordToggle`;
  const TextFieldBasePasswordToggleButtonClass = `${TextFieldBaseClass}__passwordToggle__button`;
  const TextFieldBasePasswordToggleIconClass = `${TextFieldBaseClass}__passwordToggle__icon`;

  return {
    classProps: {
      passwordToggle: TextFieldBasePasswordToggleClass,
      passwordToggleButton: TextFieldBasePasswordToggleButtonClass,
      passwordToggleIcon: TextFieldBasePasswordToggleIconClass,
    },
    props: {
      ...props,
    },
  };
}
