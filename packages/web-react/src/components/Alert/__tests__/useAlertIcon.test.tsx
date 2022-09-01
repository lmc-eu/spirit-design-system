import { renderHook } from '@testing-library/react-hooks';
import { SpiritAlertProps } from '../../../types';
import { useAlertIcon } from '../useAlertIcon';

describe('useAlertIcon', () => {
  it('should return defaults', () => {
    const props = {};
    const { result } = renderHook(() => useAlertIcon(props));

    expect(result.current).toBe('info');
  });

  it('danger alert should return warning icon', () => {
    const props = { color: 'danger' } as SpiritAlertProps;
    const { result } = renderHook(() => useAlertIcon(props));

    expect(result.current).toBe('warning');
  });
});
