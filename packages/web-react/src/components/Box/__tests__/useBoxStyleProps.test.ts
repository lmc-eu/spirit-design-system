import { renderHook } from '@testing-library/react';
import { type SpiritBoxProps } from '../../../types';
import { useBoxStyleProps } from '../useBoxStyleProps';

describe('useBoxStyleProps', () => {
  it('should return defaults', () => {
    const props: SpiritBoxProps = {};
    const { result } = renderHook(() => useBoxStyleProps(props));

    expect(result.current.classProps).toBe('');
  });

  // handle `|| {}` fallback branch
  it('should return defaults with props `{}` fallback', () => {
    const props = undefined;
    const { result } = renderHook(() => useBoxStyleProps(props as unknown as SpiritBoxProps));

    expect(result.current.classProps).toBe('');
  });

  it('should return background classProps', () => {
    const props: SpiritBoxProps = {
      backgroundColor: 'secondary',
    };
    const { result } = renderHook(() => useBoxStyleProps(props));

    expect(result.current.classProps).toBe('bg-secondary');
  });

  it('should return border color classProps', () => {
    const props: SpiritBoxProps = {
      borderColor: 'basic',
      borderWidth: '100',
      borderStyle: 'solid',
    };
    const { result } = renderHook(() => useBoxStyleProps(props));

    expect(result.current.classProps).toBe('border-basic border-solid border-100');
  });

  it('should return border style classProps', () => {
    const props: SpiritBoxProps = {
      borderStyle: 'dashed',
      borderWidth: '100',
    };
    const { result } = renderHook(() => useBoxStyleProps(props));

    expect(result.current.classProps).toBe('border-basic border-dashed border-100');
  });

  it('should return text color classProps', () => {
    const props: SpiritBoxProps = {
      textColor: 'primary',
    };
    const { result } = renderHook(() => useBoxStyleProps(props));

    expect(result.current.classProps).toBe('text-primary');
  });
});
