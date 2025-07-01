import { renderHook } from '@testing-library/react';
import { BorderRadii } from '../../../constants';
import { useIconBoxStyleProps } from '../useIconBoxStyleProps';

describe('useIconBoxStyleProps', () => {
  it('should return defaults when no props are passed', () => {
    const { result } = renderHook(() => useIconBoxStyleProps({}));

    expect(result.current.sizeProps).toEqual({ padding: 'space-600', iconSize: 24 });
    expect(result.current.shapesProps).toBe(BorderRadii['300']);
    expect(result.current.iconBoxStyles).toEqual({ padding: 'calc(var(--spirit-space-600) - 1px)' });
  });

  it('should return correct sizeProps for size="small"', () => {
    const { result } = renderHook(() => useIconBoxStyleProps({ size: 'small' }));

    expect(result.current.sizeProps).toEqual({ padding: 'space-500', iconSize: 20 });
    expect(result.current.iconBoxStyles).toEqual({ padding: 'calc(var(--spirit-space-500) - 1px)' });
  });

  it('should return correct borderRadiusProps for borderRadius="circle"', () => {
    const { result } = renderHook(() => useIconBoxStyleProps({ shape: 'circle' }));

    expect(result.current.shapesProps).toBe(BorderRadii.FULL);
  });

  it('should return padding style when hasBorder is false', () => {
    const { result } = renderHook(() => useIconBoxStyleProps({ hasBorder: false, size: 'xsmall' }));

    expect(result.current.iconBoxStyles).toEqual({});
  });

  it('should return empty style when hasBorder is true', () => {
    const { result } = renderHook(() => useIconBoxStyleProps({ hasBorder: true, size: 'large' }));

    expect(result.current.iconBoxStyles).toEqual({ padding: 'calc(var(--spirit-space-600) - 1px)' });
  });

  it('should forward other props', () => {
    const { result } = renderHook(() =>
      useIconBoxStyleProps({ size: 'medium', hasBorder: false, 'aria-label': 'foo' }),
    );

    expect(result.current.props).toHaveProperty('aria-label', 'foo');
    expect(result.current.props).not.toHaveProperty('size');
    expect(result.current.props).not.toHaveProperty('hasBorder');
  });
});
