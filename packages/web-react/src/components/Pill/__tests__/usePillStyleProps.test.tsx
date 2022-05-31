import { renderHook } from '@testing-library/react-hooks';
import { SpiritPillProps } from '../../../types';
import { usePillStyleProps } from '../usePillStyleProps';

describe('usePillStyleProps', () => {
  it('should return defaults', () => {
    const props = {};
    const { result } = renderHook(() => usePillStyleProps(props));

    expect(result.current.classProps).toBe('Pill');
  });

  it.each([['secondary'], ['selected']])('should return color class %s', (color) => {
    const props = { color } as SpiritPillProps;
    const { result } = renderHook(() => usePillStyleProps(props));

    expect(result.current.classProps).toBe(`Pill Pill--${color}`);
  });
});
