import { renderHook } from '@testing-library/react';
import { useIconStyleProps } from '../useIconStyleProps';
import { IconProps } from '../../../types';

describe('useIconStyleProps', () => {
  it('should return full', () => {
    const props = { boxSize: { mobile: 20, tablet: 40, desktop: 60 }, name: 'add' } as IconProps;
    const { result } = renderHook(() => useIconStyleProps(props));

    expect(result.current.iconStyleProps).toEqual({
      '--spirit-icon-width': '20px',
      '--spirit-icon-width-tablet': '40px',
      '--spirit-icon-width-desktop': '60px',
      '--spirit-icon-height': '20px',
      '--spirit-icon-height-tablet': '40px',
      '--spirit-icon-height-desktop': '60px',
    });
  });

  it('should return only tablet', () => {
    const props = { boxSize: { tablet: 40 }, name: 'add' } as IconProps;
    const { result } = renderHook(() => useIconStyleProps(props));

    expect(result.current.iconStyleProps).toEqual({
      '--spirit-icon-width-tablet': '40px',
      '--spirit-icon-height-tablet': '40px',
    });
  });

  it('should return empty', () => {
    const props = { boxSize: 20, name: 'add' } as IconProps;
    const { result } = renderHook(() => useIconStyleProps(props));

    expect(result.current.iconStyleProps).toEqual({});
  });
});
