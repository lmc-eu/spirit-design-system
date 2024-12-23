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

  it('should return border radius classProps', () => {
    const props: SpiritBoxProps = {
      borderRadius: '200',
      borderWidth: '100',
      borderStyle: 'solid',
    };
    const { result } = renderHook(() => useBoxStyleProps(props));

    expect(result.current.classProps).toBe('border-basic rounded-200 border-solid border-100');
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
});
