import { TextFieldType } from '../../types';
import { usePasswordToggle } from './usePasswordToggle';

export interface UseTextFieldBaseProps {
  hasPasswordToggle?: boolean;
  isMultiline?: boolean;
  type?: TextFieldType;
}

export interface UseTextFieldBaseReturn {
  inputType?: TextFieldType;
  passwordShown: boolean;
  passwordToggleHandler: () => void;
}

export const useTextFieldBase = (props: UseTextFieldBaseProps): UseTextFieldBaseReturn => {
  const { hasPasswordToggle, isMultiline, type } = props;
  const { passwordShown, passwordToggleHandler } = usePasswordToggle();

  let inputType = type;
  if (isMultiline) {
    inputType = undefined;
  } else if (hasPasswordToggle) {
    inputType = passwordShown ? 'text' : 'password';
  }

  return {
    inputType,
    passwordShown,
    passwordToggleHandler,
  };
};
