import { useState } from 'react';
import { PasswordToggleProps } from '../../types';

export const usePasswordToggle = (): PasswordToggleProps => {
  const [passwordShown, setPasswordShown] = useState<boolean>(false);
  const passwordToggleHandler = () => setPasswordShown(!passwordShown);

  return {
    passwordShown,
    passwordToggleHandler,
  };
};
