import { renderHook } from '@testing-library/react';
import { useSplitButtonStyleProps } from '../useSplitButtonStyleProps';

describe('useSplitButtonStyleProps', () => {
  it('should return defaults', () => {
    const { result } = renderHook(() => useSplitButtonStyleProps());

    expect(result.current.classProps).toBe('SplitButton');
  });
});
