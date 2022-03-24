import { renderHook } from '@testing-library/react-hooks';
import { SpiritAlertProps } from '../../../types';
import { useAlertStyleProps } from '../useAlertStyleProps';

describe('useAlertStyleProps', () => {
  it('should return defaults', () => {
    const props = {};
    const { result } = renderHook(() => useAlertStyleProps(props));

    expect(result.current.classProps).toBe('Alert');
  });

  it.each([['success'], ['danger']])('should return color class %s', (color) => {
    const props = { color } as SpiritAlertProps;
    const { result } = renderHook(() => useAlertStyleProps(props));

    expect(result.current.classProps).toBe(`Alert Alert--${color}`);
  });
});
