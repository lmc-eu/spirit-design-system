import { useClassNamePrefix } from '../../hooks';

export interface TextFieldBasePasswordToggleStyles {
  /** className props */
  classProps: {
    passwordToggle: string;
    passwordToggleButton: string;
    passwordToggleIcon: string;
  };
}

export function useTextFieldBasePasswordToggleStyleProps(): TextFieldBasePasswordToggleStyles {
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
  };
}
