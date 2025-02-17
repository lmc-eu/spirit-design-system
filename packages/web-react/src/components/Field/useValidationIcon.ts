import { ElementType } from 'react';
import { useIconName } from '../../hooks/useIconName';
import { ValidationTextProps } from './types';

export function useValidationIcon<T extends ElementType = 'div'>({ validationState }: ValidationTextProps<T>) {
  const iconNameValue = useIconName(validationState as string, {
    success: 'check-plain',
    warning: 'warning',
    danger: 'danger',
  });

  return iconNameValue;
}
