import { useCallback, useState } from 'react';

export const useToggle = (initialState = false): [boolean, () => void] => {
  const [state, setState] = useState<boolean>(initialState);

  // Define and memorize toggler function in case we pass down the component,
  const toggle = useCallback((): void => setState((prevState) => !prevState), []);

  return [state, toggle];
};
