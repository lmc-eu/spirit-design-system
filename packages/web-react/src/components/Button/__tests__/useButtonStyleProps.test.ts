import { renderHook } from '@testing-library/react';
import { SpiritButtonProps } from '../../../types';
import { useButtonStyleProps } from '../useButtonStyleProps';

describe('useButtonStyleProps', () => {
  it.each([
    // color, size, isBlock, isDisabled, isLoading, isSymmetrical, expectedClasses
    ['primary', 'medium', false, false, false, false, 'Button Button--primary Button--medium'],
    ['secondary', 'medium', false, false, false, false, 'Button Button--secondary Button--medium'],
    ['tertiary', 'medium', false, false, false, false, 'Button Button--tertiary Button--medium'],
    ['plain', 'medium', false, false, false, false, 'Button Button--plain Button--medium'],
    ['danger', 'medium', false, false, false, false, 'Button Button--danger Button--medium'],
    ['primary', 'medium', true, false, false, false, 'Button Button--primary Button--medium Button--block'],
    ['primary', 'medium', false, true, false, false, 'Button Button--primary Button--medium Button--disabled'],
    [
      'primary',
      'medium',
      false,
      false,
      true,
      false,
      'Button Button--primary Button--medium Button--disabled Button--loading',
    ],
    ['primary', 'medium', false, false, false, true, 'Button Button--primary Button--medium Button--symmetrical'],
  ])('should return classes', (color, size, isBlock, isDisabled, isLoading, isSymmetrical, expectedClasses) => {
    const props = { color, size, isBlock, isDisabled, isLoading, isSymmetrical } as SpiritButtonProps;
    const { result } = renderHook(() => useButtonStyleProps(props));

    expect(result.current.classProps).toBe(expectedClasses);
  });

  it('should warn when using unsupported sizes on body', () => {
    process.env.NODE_ENV = 'development';

    const consoleWarnMock = jest.spyOn(global.console, 'warn').mockImplementation();

    const props = { color: 'primary', size: 'medium', isBlock: true, isSymmetrical: true } as SpiritButtonProps;
    renderHook(() => useButtonStyleProps(props));

    expect(consoleWarnMock).toHaveBeenCalledWith('Warning: isBlock and isSymmetrical props are mutually exclusive');

    consoleWarnMock.mockRestore();
  });
});
