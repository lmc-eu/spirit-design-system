import { renderHook } from '@testing-library/react';
import { useTruncateStyleProps } from '../useTruncateStyleProps';

describe('useTruncateStyleProps', () => {
  it('should return defaults', () => {
    const props = {};
    const { result } = renderHook(() => useTruncateStyleProps(props));

    expect(result.current.classProps).toBe('text-truncate-multiline');
  });

  it('should return correct style based on lines', () => {
    const props = { lines: 2 };
    const { result } = renderHook(() => useTruncateStyleProps(props));

    expect(result.current.classProps).toBe('text-truncate-multiline');
    expect(result.current.styleProps).toEqual({ '--text-truncate-lines': 2 });
  });
});
