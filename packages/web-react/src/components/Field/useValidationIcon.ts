import { useIconName } from '../../hooks';
import { type ValidationTextProps } from './types';

export function useValidationIcon({ hasValidationStateIcon }: ValidationTextProps) {
  const iconNameValue = useIconName(hasValidationStateIcon as string, {
    success: 'check-plain',
    warning: 'warning',
    danger: 'danger',
  });

  return iconNameValue;
}
