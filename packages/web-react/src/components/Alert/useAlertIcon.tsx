import { useIconName } from '../../hooks/useIconName';
import { SpiritAlertProps } from '../../types';

export function useAlertIcon({ color, iconName }: SpiritAlertProps) {
  const iconNameValue = useIconName(color, {
    default: 'info',
    danger: 'warning',
  });

  return iconName || iconNameValue;
}
