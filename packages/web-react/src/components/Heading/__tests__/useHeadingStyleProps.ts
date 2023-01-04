import { renderHook } from '@testing-library/react-hooks';
import { useHeadingStyleProps } from '../useHeadingStyleProps';
import headingSizeDataProvider from './headingSizeDataProvider';
import { SpiritHeadingProps } from '../../../types';

describe('useHeadingStyleProps', () => {
  it.each(headingSizeDataProvider)('should return for size %s expected classs %s', (size, expectedClassName) => {
    const props = { size } as SpiritHeadingProps;
    const { result } = renderHook(() => useHeadingStyleProps(props));

    expect(result.current.classProps).toBe(expectedClassName);
  });
});
