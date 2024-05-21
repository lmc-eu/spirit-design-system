import { renderHook } from '@testing-library/react-hooks';
import { SpiritAlertProps } from '../../../types';
import { useAlertIcon } from '../useAlertIcon';

describe('useAlertIcon', () => {
  it('should return defaults', () => {
    const props = {};
    const { result } = renderHook(() => useAlertIcon(props));

    expect(result.current).toBe('info');
  });

  it.each([
    // color, expected icon name
    ['informative', 'info'],
    ['success', 'check-plain'],
    ['warning', 'warning'],
    ['danger', 'danger'],
  ])('should return icons based on color', (color, iconName) => {
    const props = { color } as SpiritAlertProps;
    const { result } = renderHook(() => useAlertIcon(props));

    expect(result.current).toBe(iconName);
  });
});
