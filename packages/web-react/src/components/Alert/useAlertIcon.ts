import { ElementType } from 'react';
import { useIconName } from '../../hooks/useIconName';
import { SpiritAlertProps } from '../../types';

export function useAlertIcon<T extends ElementType = 'div', E = void>({ color, iconName }: SpiritAlertProps<T, E>) {
  const iconNameValue = useIconName(color as string, {
    default: 'info',
    danger: 'warning',
  });

  return iconName || iconNameValue;
}
