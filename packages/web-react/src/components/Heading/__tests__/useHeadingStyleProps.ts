import { renderHook } from '@testing-library/react';
import { SpiritHeadingProps } from '../../../types';
import { useHeadingStyleProps } from '../useHeadingStyleProps';
import headingSizeDataProvider from './headingSizeDataProvider';

describe('useHeadingStyleProps', () => {
  it.each(headingSizeDataProvider)('should return for size %s expected class %s', (size, expectedClassName) => {
    const props = { size } as SpiritHeadingProps;
    const { result } = renderHook(() => useHeadingStyleProps(props));

    expect(result.current.classProps).toBe(expectedClassName);
  });
});
