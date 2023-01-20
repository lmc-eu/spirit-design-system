import { useState } from 'react';

export const usePasswordToggle = () => {
  const [isPasswordShown, setIsPasswordShown] = useState<boolean>(false);
  const passwordToggle = () => setIsPasswordShown(!isPasswordShown);

  return {
    isPasswordShown,
    passwordToggle,
  };
};
