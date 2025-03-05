import { renderHook } from '@testing-library/react';
import { useIconStyleProps } from '../useIconStyleProps';
import { IconProps } from '../../../types';

describe('useIconBoxSize', () => {
  it('should return default', () => {
    const props = { boxSize: { mobile: 20, tablet: 40, desktop: 60 }, name: 'add' } as IconProps;
    const { result } = renderHook(() => useIconStyleProps(props));

    expect(result.current.iconStyleProps).toEqual({
      '--spirit-icon-size': '20px',
      '--spirit-icon-size-tablet': '40px',
      '--spirit-icon-size-desktop': '60px',
    });
  });

  it('should return only tablet', () => {
    const props = { boxSize: { tablet: 40 }, name: 'add' } as IconProps;
    const { result } = renderHook(() => useIconStyleProps(props));

    expect(result.current.iconStyleProps).toEqual({
      '--spirit-icon-size-tablet': '40px',
    });
  });

  it('should return empty', () => {
    const props = { boxSize: 20, name: 'add' } as IconProps;
    const { result } = renderHook(() => useIconStyleProps(props));

    expect(result.current.iconStyleProps).toEqual({});
  });
});
