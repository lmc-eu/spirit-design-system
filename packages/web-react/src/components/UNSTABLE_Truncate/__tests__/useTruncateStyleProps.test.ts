import { renderHook } from '@testing-library/react';
import { TruncateModes } from '../../../types';
import { useTruncateStyleProps } from '../useTruncateStyleProps';

describe('useTruncateStyleProps', () => {
  it('should return defaults', () => {
    const props = {};
    const { result } = renderHook(() => useTruncateStyleProps(props));

    expect(result.current.classProps).toBe('text-truncate-multiline');
  });

  it('should return correct style for lines mode', () => {
    const props = { mode: TruncateModes.LINES, limit: 2 };
    const { result } = renderHook(() => useTruncateStyleProps(props));

    expect(result.current.classProps).toBe('text-truncate-multiline');
    expect(result.current.styleProps).toEqual({ '--text-truncate-lines': 2 });
  });

  it('should return empty classname for words mode', () => {
    const props = { mode: TruncateModes.WORDS, limit: 5 };
    const { result } = renderHook(() => useTruncateStyleProps(props));

    expect(result.current.classProps).toBe('');
    expect(result.current.styleProps).toEqual({});
  });

  it('should return empty classname for characters mode', () => {
    const props = { mode: TruncateModes.CHARACTERS, limit: 10 };
    const { result } = renderHook(() => useTruncateStyleProps(props));

    expect(result.current.classProps).toBe('');
    expect(result.current.styleProps).toEqual({});
  });

  it('should support deprecated lines prop for backward compatibility', () => {
    const props = { lines: 2 };
    const { result } = renderHook(() => useTruncateStyleProps(props));

    expect(result.current.classProps).toBe('text-truncate-multiline');
    expect(result.current.styleProps).toEqual({ '--text-truncate-lines': 2 });
  });

  it('should prioritize lines prop over mode when both are provided', () => {
    const props = { mode: TruncateModes.WORDS, lines: 3, limit: 5 };
    const { result } = renderHook(() => useTruncateStyleProps(props));

    expect(result.current.classProps).toBe('text-truncate-multiline');
    expect(result.current.styleProps).toEqual({ '--text-truncate-lines': 3 });
  });
});
