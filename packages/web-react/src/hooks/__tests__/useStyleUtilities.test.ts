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
});
