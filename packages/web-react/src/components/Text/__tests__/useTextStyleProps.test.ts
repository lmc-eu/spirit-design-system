import { renderHook } from '@testing-library/react';
import { Emphasis, SizesExtended, TextColors } from '../../../constants';
import { type SpiritTextProps } from '../../../types';
import { useTextStyleProps } from '../useTextStyleProps';
import textPropsDataProvider from './textPropsDataProvider';

describe('useTextStyleProps', () => {
  it.each(textPropsDataProvider)('should return typography class', (size, emphasis, expectedClassName) => {
    const props = { size, emphasis } as SpiritTextProps;
    const { result } = renderHook(() => useTextStyleProps(props));

    expect(result.current.classProps).toBe(expectedClassName);
  });

  it.each(Object.values(TextColors))('should return %s color class', (textColor) => {
    const emphasis = Emphasis.REGULAR;
    const size = SizesExtended.MEDIUM;
    const props = { emphasis, size, textColor } as SpiritTextProps;
    const { result } = renderHook(() => useTextStyleProps(props));

    expect(result.current.classProps).toBe(`typography-body-${size}-${emphasis} text-${textColor}`);
  });
});
