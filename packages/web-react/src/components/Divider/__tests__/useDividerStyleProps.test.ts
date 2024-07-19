import { renderHook } from '@testing-library/react';
import { useDividerStyleProps } from '../useDividerStyleProps';

describe('useDividerStyleProps', () => {
  it('should return defaults', () => {
    const props = {};
    const { result } = renderHook(() => useDividerStyleProps(props));

    expect(result.current.classProps).toBe('Divider');
  });
});
