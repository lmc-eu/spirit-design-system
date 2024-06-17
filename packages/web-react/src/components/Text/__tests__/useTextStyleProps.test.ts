import { renderHook } from '@testing-library/react';
import { SpiritTextProps } from '../../../types';
import { useTextStyleProps } from '../useTextStyleProps';
import textPropsDataProvider from './textPropsDataProvider';

describe('useTextStyleProps', () => {
  it.each(textPropsDataProvider)('should return typography class', (size, emphasis, expectedClassName) => {
    const props = { size, emphasis } as SpiritTextProps;
    const { result } = renderHook(() => useTextStyleProps(props));

    expect(result.current.classProps).toBe(expectedClassName);
  });
});
