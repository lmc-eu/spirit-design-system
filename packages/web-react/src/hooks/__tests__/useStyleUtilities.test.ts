import { renderHook } from '@testing-library/react';
import { StyleProps } from '../../types';
import { useStyleUtilities } from '../useStyleUtilities';

describe('useStyleUtilities hook', () => {
  it('should process style utilities correctly', () => {
    const mockProps = {
      margin: 'space-100',
      marginX: {
        mobile: 'space-200',
        tablet: 'auto',
        desktop: 'space-300',
      },
    };
    const mockPrefix = 'test-prefix';

    const { result } = renderHook(() => useStyleUtilities(mockProps as StyleProps, mockPrefix));

    expect(result.current.styleUtilities).toEqual([
      'test-prefix-m-100',
      'test-prefix-mx-200',
      'test-prefix-mx-tablet-auto',
      'test-prefix-mx-desktop-300',
    ]);
    expect(result.current.props).toEqual({});
  });

  it('should process style utilities correctly without prefix', () => {
    const mockProps = {
      margin: 'space-100',
      marginX: {
        mobile: 'space-200',
        tablet: 'auto',
        desktop: 'space-300',
      },
    };

    const { result } = renderHook(() => useStyleUtilities(mockProps as StyleProps));

    expect(result.current.styleUtilities).toEqual(['m-100', 'mx-200', 'mx-tablet-auto', 'mx-desktop-300']);
    expect(result.current.props).toEqual({});
  });

  it('should process style utilities correctly with responsive values', () => {
    const mockProps = {
      margin: { mobile: 'space-100', tablet: 'space-200', desktop: 'space-300' },
      marginX: { mobile: 'space-200', tablet: 'space-200', desktop: 'space-300' },
    };
    const mockPrefix = 'test-prefix';

    const { result } = renderHook(() => useStyleUtilities(mockProps as StyleProps, mockPrefix));

    expect(result.current.styleUtilities).toEqual([
      'test-prefix-m-100',
      'test-prefix-m-tablet-200',
      'test-prefix-m-desktop-300',
      'test-prefix-mx-200',
      'test-prefix-mx-tablet-200',
      'test-prefix-mx-desktop-300',
    ]);
    expect(result.current.props).toEqual({});
  });

  it('should process style utilities correctly with responsive values without prefix', () => {
    const mockProps = {
      margin: { mobile: 'space-100', tablet: 'space-200', desktop: 'space-300' },
      marginX: { mobile: 'space-200', tablet: 'space-200', desktop: 'space-300' },
    };

    const { result } = renderHook(() => useStyleUtilities(mockProps as StyleProps));

    expect(result.current.styleUtilities).toEqual([
      'm-100',
      'm-tablet-200',
      'm-desktop-300',
      'mx-200',
      'mx-tablet-200',
      'mx-desktop-300',
    ]);
    expect(result.current.props).toEqual({});
  });

  it('should process style utilities with additional spacing props', () => {
    const mockProps = {
      margin: 'space-100',
      marginX: 'space-200',
      marginY: 'space-400',
      padding: 'space-500',
      paddingX: 'space-600',
      paddingY: 'space-700',
    };
    const additionalSpacingProps = {
      padding: 'p',
      paddingX: 'px',
      paddingY: 'py',
    };

    const { result } = renderHook(() =>
      useStyleUtilities(mockProps as StyleProps, 'test-prefix', additionalSpacingProps),
    );

    expect(result.current.styleUtilities).toEqual([
      'test-prefix-m-100',
      'test-prefix-mx-200',
      'test-prefix-my-400',
      'test-prefix-p-500',
      'test-prefix-px-600',
      'test-prefix-py-700',
    ]);
  });

  it('should process style utilities with responsive additional spacing props', () => {
    const mockProps = {
      margin: 'space-100',
      marginX: 'space-200',
      marginY: 'space-400',
      padding: { mobile: 'space-500', tablet: 'space-600', desktop: 'space-700' },
      paddingX: { mobile: 'space-600', tablet: 'space-700', desktop: 'space-800' },
      paddingY: { mobile: 'space-700', tablet: 'space-800', desktop: 'space-900' },
    };
    const additionalSpacingProps = {
      padding: 'p',
      paddingX: 'px',
      paddingY: 'py',
    };

    const { result } = renderHook(() => useStyleUtilities(mockProps as StyleProps, '', additionalSpacingProps));

    expect(result.current.styleUtilities).toEqual([
      'm-100',
      'mx-200',
      'my-400',
      'p-500',
      'p-tablet-600',
      'p-desktop-700',
      'px-600',
      'px-tablet-700',
      'px-desktop-800',
      'py-700',
      'py-tablet-800',
      'py-desktop-900',
    ]);
  });
});
