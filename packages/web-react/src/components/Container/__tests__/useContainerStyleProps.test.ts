import { renderHook } from '@testing-library/react';
import { SpiritContainerProps } from '../../../types';
import { useContainerStyleProps } from '../useContainerStyleProps';

describe('useContainerStyleProps', () => {
  it('should return defaults', () => {
    const props = {};
    const { result } = renderHook(() => useContainerStyleProps(props));

    expect(result.current.classProps).toBe('Container');
  });

  it('should return fluid', () => {
    const props = { isFluid: true } as SpiritContainerProps;
    const { result } = renderHook(() => useContainerStyleProps(props));

    expect(result.current.classProps).toBe('Container Container--fluid');
  });
});
