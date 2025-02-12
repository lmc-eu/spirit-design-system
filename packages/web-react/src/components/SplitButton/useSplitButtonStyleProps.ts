import { useClassNamePrefix } from '../../hooks';

export interface SplitButtonStyles {
  /** className props */
  classProps: string;
}

export function useSplitButtonStyleProps(): SplitButtonStyles {
  const SplitButtonClass = useClassNamePrefix('SplitButton');

  return {
    classProps: SplitButtonClass,
  };
}
