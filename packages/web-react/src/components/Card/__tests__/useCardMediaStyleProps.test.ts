import { cssVariablePrefix } from '@lmc-eu/spirit-design-tokens';
import { renderHook } from '@testing-library/react';
import { type SpiritCardMediaProps } from '../../../types';
import { useCardMediaStyleProps } from '../useCardMediaStyleProps';

describe('useCardMediaStyleProps', () => {
  it('should return defaults', () => {
    const props: Partial<SpiritCardMediaProps> = {};
    const { result } = renderHook(() => useCardMediaStyleProps(props));

    expect(result.current.classProps).toBe('');
    expect(result.current.styleProps).toEqual({});
  });

  it('should return defaults with undefined props', () => {
    const props = undefined;
    const { result } = renderHook(() => useCardMediaStyleProps(props as unknown as SpiritCardMediaProps));

    expect(result.current.classProps).toBe('');
    expect(result.current.styleProps).toEqual({});
  });

  it('should return background color classProps', () => {
    const props: Partial<SpiritCardMediaProps> = {
      backgroundColor: 'primary',
    };
    const { result } = renderHook(() => useCardMediaStyleProps(props));

    expect(result.current.classProps).toBe('bg-primary');
    expect(result.current.styleProps).toEqual({});
  });

  it('should return fit CSS variable for contain', () => {
    const props: Partial<SpiritCardMediaProps> = {
      fit: 'contain',
    };
    const { result } = renderHook(() => useCardMediaStyleProps(props));

    expect(result.current.classProps).toBe('');
    expect(result.current.styleProps).toEqual({
      [`--${cssVariablePrefix}card-media-object-fit`]: 'contain',
    });
  });

  it('should return fit CSS variable for cover', () => {
    const props: Partial<SpiritCardMediaProps> = {
      fit: 'cover',
    };
    const { result } = renderHook(() => useCardMediaStyleProps(props));

    expect(result.current.styleProps).toEqual({
      [`--${cssVariablePrefix}card-media-object-fit`]: 'cover',
    });
  });

  it('should return both backgroundColor classProps and fit styleProps', () => {
    const props: Partial<SpiritCardMediaProps> = {
      backgroundColor: 'secondary',
      fit: 'contain',
    };
    const { result } = renderHook(() => useCardMediaStyleProps(props));

    expect(result.current.classProps).toBe('bg-secondary');
    expect(result.current.styleProps).toEqual({
      [`--${cssVariablePrefix}card-media-object-fit`]: 'contain',
    });
  });

  it('should return both tertiary backgroundColor classProps and fit styleProps', () => {
    const props: Partial<SpiritCardMediaProps> = {
      backgroundColor: 'tertiary',
      fit: 'cover',
    };
    const { result } = renderHook(() => useCardMediaStyleProps(props));

    expect(result.current.classProps).toBe('bg-tertiary');
    expect(result.current.styleProps).toEqual({
      [`--${cssVariablePrefix}card-media-object-fit`]: 'cover',
    });
  });

  it('should handle undefined backgroundColor', () => {
    const props: Partial<SpiritCardMediaProps> = {
      backgroundColor: undefined,
      fit: 'contain',
    };
    const { result } = renderHook(() => useCardMediaStyleProps(props));

    expect(result.current.classProps).toBe('');
    expect(result.current.styleProps).toEqual({
      [`--${cssVariablePrefix}card-media-object-fit`]: 'contain',
    });
  });

  it('should handle undefined fit', () => {
    const props: Partial<SpiritCardMediaProps> = {
      backgroundColor: 'primary',
      fit: undefined,
    };
    const { result } = renderHook(() => useCardMediaStyleProps(props));

    expect(result.current.classProps).toBe('bg-primary');
    expect(result.current.styleProps).toEqual({});
  });
});
