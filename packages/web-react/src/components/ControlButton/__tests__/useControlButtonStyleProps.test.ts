import { renderHook } from '@testing-library/react';
import { type SpiritControlButtonProps } from '../../../types';
import { useControlButtonStyleProps } from '../useControlButtonStyleProps';

describe('useControlButtonStyleProps', () => {
  it.each([
    // size, isDisabled, isSubtle, isSymmetrical, expectedClasses
    [
      'medium',
      false,
      false,
      false,
      'ControlButton ControlButton--medium dynamic-color-background-interactive accessibility-tap-target ControlButton--hasBackground dynamic-color-border',
    ],
    [
      'small',
      false,
      false,
      false,
      'ControlButton ControlButton--small dynamic-color-background-interactive accessibility-tap-target ControlButton--hasBackground dynamic-color-border',
    ],
    [
      'large',
      false,
      false,
      false,
      'ControlButton ControlButton--large dynamic-color-background-interactive accessibility-tap-target ControlButton--hasBackground dynamic-color-border',
    ],
    [
      'medium',
      true,
      false,
      false,
      'ControlButton ControlButton--medium dynamic-color-background-interactive accessibility-tap-target ControlButton--disabled ControlButton--hasBackground dynamic-color-border',
    ],
    [
      'medium',
      false,
      true,
      false,
      'ControlButton ControlButton--medium dynamic-color-background-interactive accessibility-tap-target',
    ],
    [
      'medium',
      false,
      false,
      true,
      'ControlButton ControlButton--medium dynamic-color-background-interactive accessibility-tap-target ControlButton--symmetrical ControlButton--hasBackground dynamic-color-border',
    ],
    [
      'medium',
      true,
      true,
      true,
      'ControlButton ControlButton--medium dynamic-color-background-interactive accessibility-tap-target ControlButton--disabled ControlButton--symmetrical',
    ],
  ])('should return classes', (size, isDisabled, isSubtle, isSymmetrical, expectedClasses) => {
    const props = { size, isDisabled, isSubtle, isSymmetrical } as SpiritControlButtonProps;
    const { result } = renderHook(() => useControlButtonStyleProps(props));

    expect(result.current.classProps).toBe(expectedClasses);
  });

  it('should return rest props', () => {
    const props = {
      size: 'medium',
      isDisabled: false,
      isSubtle: false,
      isSymmetrical: false,
      onClick: jest.fn(),
      'aria-label': 'Close',
      id: 'test-button',
    } as SpiritControlButtonProps;

    const { result } = renderHook(() => useControlButtonStyleProps(props));

    expect(result.current.props).toEqual({
      onClick: props.onClick,
      'aria-label': 'Close',
      id: 'test-button',
    });
  });
});
