import { renderHook } from '@testing-library/react';
import { ElementType } from 'react';
import { SpiritHeadingProps } from '../../../types';
import { useHeadingStyleProps } from '../useHeadingStyleProps';
import headingSizeDataProvider from './headingSizeDataProvider';

describe('useHeadingStyleProps', () => {
  it.each(headingSizeDataProvider)('should return typography heading class', (size, emphasis, expectedClassName) => {
    const props = { size, emphasis } as SpiritHeadingProps<ElementType, void, void>;
    const { result } = renderHook(() => useHeadingStyleProps(props));

    expect(result.current.classProps).toBe(expectedClassName);
  });
});
