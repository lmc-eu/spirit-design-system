import { useIconName } from '../../hooks/useIconName';
import { ValidationTextProps } from './types';

export function useValidationIcon({ hasValidationStateIcon }: ValidationTextProps) {
  const iconNameValue = useIconName(hasValidationStateIcon as string, {
    success: 'check-plain',
    warning: 'warning',
    danger: 'danger',
  });

  return iconNameValue;
}
