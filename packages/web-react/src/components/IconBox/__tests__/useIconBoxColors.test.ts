import { renderHook } from '@testing-library/react';
import { BackgroundColors, BorderColors, TextColors } from '../../../constants';
import { useIconBoxColors } from '../useIconBoxColors';

describe('useIconBoxColors', () => {
  it('should return defaults if no color is provided', () => {
    const { result } = renderHook(() => useIconBoxColors());

    expect(result.current.colors).toEqual({
      background: BackgroundColors.PRIMARY,
      border: BorderColors.BASIC,
      text: TextColors.PRIMARY,
    });
  });

  it('should return correct colors for a background color in BackgroundColors', () => {
    const { result } = renderHook(() => useIconBoxColors(BackgroundColors.SECONDARY));

    expect(result.current.colors).toEqual({
      background: BackgroundColors.SECONDARY,
      border: BorderColors.BASIC,
      text: BackgroundColors.SECONDARY,
    });
  });

  it('should parse "-basic" suffix correctly and return complementary text color with "-subtle"', () => {
    const { result } = renderHook(() => useIconBoxColors('test-basic'));

    expect(result.current.colors).toEqual({
      background: 'test-basic',
      border: 'test-basic',
      text: 'test-subtle',
    });
  });

  it('should parse "-subtle" suffix correctly and return complementary text color with "-basic"', () => {
    const { result } = renderHook(() => useIconBoxColors('test-subtle'));

    expect(result.current.colors).toEqual({
      background: 'test-subtle',
      border: 'test-subtle',
      text: 'test-basic',
    });
  });

  it('should default to BASIC intensity when no suffix present', () => {
    const { result } = renderHook(() => useIconBoxColors('tertiary'));

    expect(result.current.colors).toEqual({
      background: 'tertiary',
      border: 'basic',
      text: 'tertiary',
    });
  });
});
