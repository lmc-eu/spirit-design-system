import { renderHook } from '@testing-library/react-hooks';
import { SpiritButtonProps } from '../../../types';
import { useButtonStyleProps } from '../useButtonStyleProps';

declare const global: any;

describe('useButtonStyleProps', () => {
  it.each([
    // color, block, disabled, isSquare, expectedClasses
    ['primary', false, false, false, 'Button Button--primary'],
    ['secondary', false, false, false, 'Button Button--secondary'],
    ['tertiary', false, false, false, 'Button Button--tertiary'],
    ['danger', false, false, false, 'Button Button--danger'],
    ['inverted', false, false, false, 'Button Button--inverted'],
    ['primary', true, false, false, 'Button Button--primary Button--block'],
    ['primary', false, true, false, 'Button Button--primary Button--disabled'],
    ['primary', false, false, true, 'Button Button--primary Button--square'],
  ])('should return classes', (color, block, disabled, isSquare, expectedClasses) => {
    const props = { color, block, disabled, isSquare } as SpiritButtonProps;
    const { result } = renderHook(() => useButtonStyleProps(props));

    expect(result.current.classProps).toBe(expectedClasses);
  });

  it('should warn when using unsupported sizes on body', () => {
    const consoleWarnMock = jest.spyOn(global.console, 'warn').mockImplementation();

    const props = { color: 'primary', block: true, isSquare: true } as SpiritButtonProps;
    renderHook(() => useButtonStyleProps(props));

    expect(consoleWarnMock).toHaveBeenCalledWith('isBlock and isSquare props are mutually exclusive');

    consoleWarnMock.mockRestore();
  });
});
