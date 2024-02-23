import { ElementType } from 'react';
import { useIconName } from '../../hooks/useIconName';
import { SpiritAlertProps } from '../../types';

export function useAlertIcon<T extends ElementType = 'div', E = void>({ color, iconName }: SpiritAlertProps<T, E>) {
  const iconNameValue = useIconName(color as string, {
    default: 'info',
    success: 'check-plain',
    informative: 'info',
    warning: 'warning',
    danger: 'danger',
  });

  return iconName || iconNameValue;
}
