import { renderHook } from '@testing-library/react';
import { BackgroundColors, BorderColors, TextColors } from '../../../constants';
import { useIconBoxColors } from '../useIconBoxColors';

describe('useIconBoxColors', () => {
  it('should return defaults if no color is provided', () => {
    const { result } = renderHook(() => useIconBoxColors());

    expect(result.current.colors).toEqual({
      backgroundColor: BackgroundColors.PRIMARY,
      borderColor: BorderColors.BASIC,
      textColor: TextColors.PRIMARY,
    });
  });

  it('should return correct colors for a background color in BackgroundColors', () => {
    const { result } = renderHook(() => useIconBoxColors(BackgroundColors.SECONDARY));

    expect(result.current.colors).toEqual({
      backgroundColor: BackgroundColors.SECONDARY,
      borderColor: BorderColors.BASIC,
      textColor: BackgroundColors.SECONDARY,
    });
  });

  it('should parse "-basic" suffix correctly and return complementary text color with "-subtle"', () => {
    const { result } = renderHook(() => useIconBoxColors('test-basic'));

    expect(result.current.colors).toEqual({
      backgroundColor: 'test-basic',
      borderColor: 'test-basic',
      textColor: 'test-subtle',
    });
  });

  it('should parse "-subtle" suffix correctly and return complementary text color with "-basic"', () => {
    const { result } = renderHook(() => useIconBoxColors('test-subtle'));

    expect(result.current.colors).toEqual({
      backgroundColor: 'test-subtle',
      borderColor: 'test-subtle',
      textColor: 'test-basic',
    });
  });

  it('should default to BASIC intensity when no suffix present', () => {
    const { result } = renderHook(() => useIconBoxColors('tertiary'));

    expect(result.current.colors).toEqual({
      backgroundColor: 'tertiary',
      borderColor: 'basic',
      textColor: 'tertiary',
    });
  });
});
