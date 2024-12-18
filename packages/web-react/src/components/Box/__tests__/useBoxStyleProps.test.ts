import { renderHook } from '@testing-library/react';
import { SpiritBoxProps } from '../../../types';
import { useBoxStyleProps } from '../useBoxStyleProps';

describe('useBoxStyleProps', () => {
  it('should return defaults', () => {
    const props: SpiritBoxProps = {};
    const { result } = renderHook(() => useBoxStyleProps(props));

    expect(result.current.classProps).toBe('');
  });

  it('should return background classProps', () => {
    const props: SpiritBoxProps = {
      backgroundColor: 'secondary',
    };
    const { result } = renderHook(() => useBoxStyleProps(props));

    expect(result.current.classProps).toBe('bg-secondary');
  });

  it('should return padding classProps', () => {
    const props: SpiritBoxProps = {
      padding: 'space-400',
    };
    const { result } = renderHook(() => useBoxStyleProps(props));

    expect(result.current.classProps).toBe('p-400');
  });

  it('should return paddingX classProps', () => {
    const props: SpiritBoxProps = {
      paddingX: 'space-400',
    };
    const { result } = renderHook(() => useBoxStyleProps(props));

    expect(result.current.classProps).toBe('px-400');
  });

  it('should return paddingY classProps', () => {
    const props: SpiritBoxProps = {
      paddingY: 'space-400',
    };
    const { result } = renderHook(() => useBoxStyleProps(props));

    expect(result.current.classProps).toBe('py-400');
  });

  it('should return paddingTop classProps', () => {
    const props: SpiritBoxProps = {
      paddingTop: 'space-400',
    };
    const { result } = renderHook(() => useBoxStyleProps(props));

    expect(result.current.classProps).toBe('pt-400');
  });

  it('should return paddingBottom classProps', () => {
    const props: SpiritBoxProps = {
      paddingBottom: 'space-400',
    };
    const { result } = renderHook(() => useBoxStyleProps(props));

    expect(result.current.classProps).toBe('pb-400');
  });

  it('should return paddingLeft classProps', () => {
    const props: SpiritBoxProps = {
      paddingLeft: 'space-400',
    };
    const { result } = renderHook(() => useBoxStyleProps(props));

    expect(result.current.classProps).toBe('pl-400');
  });

  it('should return paddingRight classProps', () => {
    const props: SpiritBoxProps = {
      paddingRight: 'space-400',
    };
    const { result } = renderHook(() => useBoxStyleProps(props));

    expect(result.current.classProps).toBe('pr-400');
  });

  it('should return responsive padding classProps', () => {
    const props: SpiritBoxProps = {
      padding: { mobile: 'space-400', tablet: 'space-500', desktop: 'space-600' },
    };
    const { result } = renderHook(() => useBoxStyleProps(props));

    expect(result.current.classProps).toBe('p-400 p-tablet-500 p-desktop-600');
  });

  it('should return border radius classProps', () => {
    const props: SpiritBoxProps = {
      borderRadius: '200',
      borderWidth: '100',
      borderStyle: 'solid',
    };
    const { result } = renderHook(() => useBoxStyleProps(props));

    expect(result.current.classProps).toBe('border-basic rounded-200 border-100 border-solid');
  });

  it('should not return border radius classProps if border with is not set', () => {
    const props: SpiritBoxProps = {
      borderRadius: '200',
    };
    const { result } = renderHook(() => useBoxStyleProps(props));

    expect(result.current.classProps).not.toBe('rounded-200');
  });

  it('should return border color classProps', () => {
    const props: SpiritBoxProps = {
      borderColor: 'basic',
      borderWidth: '100',
      borderStyle: 'solid',
    };
    const { result } = renderHook(() => useBoxStyleProps(props));

    expect(result.current.classProps).toBe('border-basic border-100 border-solid');
  });

  it('should return border style classProps', () => {
    const props: SpiritBoxProps = {
      borderStyle: 'dashed',
      borderWidth: '100',
    };
    const { result } = renderHook(() => useBoxStyleProps(props));

    expect(result.current.classProps).toBe('border-basic border-100 border-dashed');
  });
});
