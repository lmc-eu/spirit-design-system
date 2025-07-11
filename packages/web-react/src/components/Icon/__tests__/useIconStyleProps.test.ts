import { renderHook } from '@testing-library/react';
import { IconDualtoneColors } from '../../../constants';
import { IconDualtoneColorsType, SpiritIconProps } from '../../../types';
import { useIconStyleProps } from '../useIconStyleProps';

describe('useIconStyleProps', () => {
  it('should return responsive sizes', () => {
    const props = { boxSize: { mobile: 20, tablet: 40, desktop: 60 }, name: 'add' } as SpiritIconProps;
    const { result } = renderHook(() => useIconStyleProps(props));

    expect(result.current.iconStyleProps).toEqual({
      '--spirit-icon-size': '20px',
      '--spirit-icon-size-tablet': '40px',
      '--spirit-icon-size-desktop': '60px',
    });
  });

  it('should return only tablet', () => {
    const props = { boxSize: { tablet: 40 }, name: 'add' } as SpiritIconProps;
    const { result } = renderHook(() => useIconStyleProps(props));

    expect(result.current.iconStyleProps).toEqual({
      '--spirit-icon-size-tablet': '40px',
    });
  });

  it('should return empty when boxSize is a number', () => {
    const props = { boxSize: 20, name: 'add' } as SpiritIconProps;
    const { result } = renderHook(() => useIconStyleProps(props));

    expect(result.current.iconStyleProps).toEqual({});
  });

  it.each(Object.values(IconDualtoneColors))(
    'should have dualtone color classname %s',
    (dualtoneColor: IconDualtoneColorsType) => {
      const props: SpiritIconProps = {
        name: 'shield-dualtone',
        dualtoneColor,
      };
      const { result } = renderHook(() => useIconStyleProps(props));

      expect(result.current.classProps).toContain(`Icon--dualtone-${dualtoneColor}`);
    },
  );

  it("should have default classname when `color` isn't defined", () => {
    const props: SpiritIconProps = {
      name: 'shield-dualtone',
      dualtoneColor: undefined,
    };
    const { result } = renderHook(() => useIconStyleProps(props));

    expect(result.current.classProps).toContain('Icon--dualtone-primary');
  });
});
